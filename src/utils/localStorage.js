export const loadState = () => {
  try {
    const storedState = localStorage.getItem('state');
    if (storedState === null) {
      return undefined;
    }
    return JSON.parse(storedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedStore = JSON.stringify(state);
    const storedState = localStorage.setItem('state', serializedStore);
  } catch (err) {}
};