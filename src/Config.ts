export const isLocal = document.location.hostname === 'localhost';
export const recaptchaSiteKey = "6LdN5lcaAAAAAHJKO0vadb6Xd9NseBkzePlMSh7d";

export const useConfig = () => ({
  recaptchaSiteKey, 
  isLocal
});