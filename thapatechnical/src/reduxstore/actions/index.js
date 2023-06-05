export const incNumber = num => {
  return {
    type: 'INCREMENT',
    payload: num,
  };
};
export const decnumber = () => {
  return {
    type: 'DECREMENT',
  };
};
