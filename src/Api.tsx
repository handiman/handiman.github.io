import React, { createContext, useContext } from "react";
import { IProfile, mockProfile } from "./wombat/Profile";
import { isLocal } from './Config';

const apiHost = () => isLocal ? 'https://localhost:5001' : 'https://henrikbecker.azurewebsites.net';
const ApiRootUri = `${apiHost()}/api/v1`;

const getProfile = async () => await Promise.resolve((window as any).henrikBeckerResume); //get(`/assets/profile.json`);

const getIp = async function () {
  const response = await fetch(`${ApiRootUri}/ip`);
  return await response.text();
}

const sendContactForm = async (form: {
  name: string,
  from: string,
  message: string,
  captcha: string,
  trace: string
}) => {
  const { from, name, message, captcha, trace } = form;
  let body = new FormData();
  body.append("subject", "Contact Form");
  body.append("from", from);
  body.append("name", name);
  body.append("address", await getIp());
  body.append("message", message);
  body.append("captcha", captcha);

  const response = await fetch(`${ApiRootUri}/contact-form`, {
    headers: { 'X-DEBUG': trace },
    method: 'POST',
    body
  }); 

  if (response.status >= 400) {
    const errors = await response.json();
    throw {
      message: Object.keys(errors).map((key:any, _:any) => errors[key].join('\n')).join('\n')
    };
  }
}

interface IApi {
  apiHost(): string,
  getIp(): Promise<string>,
  getProfile(): Promise<IProfile>,
  sendContactForm(form: any): Promise<void>
}

const Api = {
  apiHost,
  getIp,
  getProfile,
  sendContactForm
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
      apiHost: () => document.location.hostname,
      getIp: () => Promise.resolve('127.0.0.1'),
      getProfile: () => Promise.resolve(mockProfile),
      sendContactForm: (form: any) => new Promise<void>(() => console.log("SEND CONTACT FORM", form))
    }}>
      {children}
    </ApiContext.Provider>
  )
};
export const useApi = () => useContext(ApiContext);