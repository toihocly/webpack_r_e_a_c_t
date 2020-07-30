export const setStorage = (key, value) => {
  if (typeof Storage !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getStorage = (key) => {
  if (typeof Storage !== 'undefined') {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const removeItemStorage = (key) => {
  if (typeof Storage !== 'undefined') {
    return localStorage.removeItem(key);
  }
};
