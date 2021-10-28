import React, { createContext, useContext } from "react";
import { IProfile, mockProfile } from "./wombat/Profile";
import { isLocal } from './Config';

const ApiRootUri = isLocal ? 'http://localhost:7071/api' : 'https://henrikbecker.azure-api.net';

const getProfile = async () => await Promise.resolve((window as any).henrikBeckerResume);

const ping = async () => {
  const response = await fetch(`${ApiRootUri}/ping`);
  return await response.text();
}

const getIp = async () => {
  const response = await fetch(`${ApiRootUri}/ip`);
  return await response.text();
}

const sendContactForm = async (form: {
  name: string,
  from: string,
  message: string
}) => {
  const { from, name, message } = form;
  let body = new FormData();
  body.append("subject", "Contact Form");
  body.append("from", from);
  body.append("name", name);
  body.append("message", message);
  const response = await fetch(`${ApiRootUri}/contact`, { method: 'POST', body }); 

  if (response.status >= 400) {
    const errors = await response.json();
    throw {
      message: Object.keys(errors).map((key:any, _:any) => errors[key].join('\n')).join('\n')
    };
  }
}

interface IApi {
  getIp(): Promise<string>,
  getProfile(): Promise<IProfile>,
  sendContactForm(form: any): Promise<void>,
  ping(): Promise<string>
}

const Api = {
  getIp,
  getProfile,
  sendContactForm,
  ping
};

const ApiContext = createContext<IApi>(Api);

export const ApiProvider: React.FC<{ children?: any }> = ({ children }) => (
  <ApiContext.Provider value={Api}>
    {children}
  </ApiContext.Provider>
);

export const MockApi: React.FC<{ children?: any }> = ({ children }) => {
  return (
    <ApiContext.Provider value={{
      getIp: () => Promise.resolve('127.0.0.1'),
      getProfile: () => Promise.resolve(mockProfile),
      sendContactForm: (form: any) => new Promise<void>(() => console.log("SEND CONTACT FORM", form)),
      ping: () => Promise.resolve('Pong')
    }}>
      {children}
    </ApiContext.Provider>
  )
};
export const useApi = () => useContext(ApiContext);