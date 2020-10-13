const isLocal = document.location.hostname === 'localhost';
const apiHost = () => isLocal ? 'https://localhost:5001' : 'https://henrikbecker.azurewebsites.net';
const ApiRootUri = `${apiHost()}/api/v1`;

const get = async (resource: string) => {
  const response = await fetch(resource);
  return await response.json();
}
const getProfile = async () => await get('/assets/profile.json');
const getUsps = async () => await get('/assets/usps.json');
const getRecommendations = async () => await get('/assets/recommendations.json');

const getIp = async function () {
  const response = await fetch(`${ApiRootUri}/ip`);
  return await response.text();
}

const sendContactForm = async (form: {
  name: string,
  from: string,
  message: string
}) => {
  const { from, name, message } = form;
  await getIp().then(address => {
    let body = new FormData();
    body.append("subject", "Contact Form");
    body.append("from", from);
    body.append("name", name);
    body.append("address", address);
    body.append("message", message);

    var request = new XMLHttpRequest();
    request.open('POST', `${ApiRootUri}/contact-form`);
    request.send(body);
  })
}

export {
  apiHost,
  getIp,
  getProfile,
  getUsps,
  getRecommendations,
  sendContactForm
}