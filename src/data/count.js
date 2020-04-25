/*****************/
/* INITIAL STATE */
/*****************/
const initialState = 0;

/*********/
/* TYPES */
/*********/
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_FIVE = "INCREMENTFIVE";
const MULTIPLY_BY = "MULTIPLY_BY";

/********************/
/* ACTIONS CREATORS */
/********************/
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const reset = () => ({
  type: RESET,
  payload: 0,
});
export const incrementFive = () => ({
  type: INCREMENT_FIVE,
});
export const multiplyBy = (nr) => ({
  type: MULTIPLY_BY,
  payload: nr,
});

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_FIVE:
      return state + 5;
    case MULTIPLY_BY:
      return state * payload;
    case RESET:
      return payload;
    default:
      return state;
  }
};
