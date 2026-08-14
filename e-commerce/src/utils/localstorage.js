const setLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLS = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export { getLS, setLS };
