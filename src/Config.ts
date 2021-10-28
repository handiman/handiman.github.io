export const isLocal = document.location.hostname === 'localhost';

export const useConfig = () => ({
  isLocal
});