const initCaps = (s:string) => {
  if (1 === s.length) {
    return s.toUpperCase();
  } else if (s) {
    return `${s.substr(0, 1).toUpperCase()}${s.substr(1)}`;
  } else {
    return s;
  }
}

const useArray = (items:any) :Array<any> => {
  if (items && items.map) {
    return items;
  } else if (items) {
    return [items];
  } else {
    return [];
  }
}

export {
  initCaps,
  useArray
}