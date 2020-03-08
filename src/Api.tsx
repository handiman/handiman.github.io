const get = async (resource: string) => {
  const response = await fetch(resource);
  return await response.json();
}
const getProfile = async () => await get('/static/profile.json');
const getUsps = async () => await get('/static/usps.json');
const getRecommendations = async () => await get('/static/recommendations.json');

const getIp = async function () {
  const response = await fetch('https://www.henrikbecker.se/api/ip');
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
    request.open('POST', 'https://www.henrikbecker.se/api/contact-form');
    request.send(body);
  })
}

export {
  getIp,
  getProfile,
  getUsps,
  getRecommendations,
  sendContactForm
}