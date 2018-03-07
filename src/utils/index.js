export const formatDate = date => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;

  return `${day}-${month}-${date.getFullYear()}`;
};

export const saveState = state => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch (err) {
    console.log(err);
  }
};

export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('state');
    if (serializeState === null) {
      return undefined;
    }

    return JSON.parse(serializeState);
  } catch (err) {
    return undefined;
  }
};
