/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
  isEven: false,
  isAdult: false,
  startsWith: {
    state: false,
    letter: "",
  },
};
/*********/
/* TYPES */
/*********/
const TOGGLE_EVEN = "TOGGLE_EVEN";
const TOGGLE_ADULT = "TOGGLE_ADULT";
const TOGGLE_STARTS_WITH = "TOGGLE_STARTS_WITH";

/********************/
/* ACTIONS CREATORS */
/********************/
export const toggleEven = () => ({
  type: TOGGLE_EVEN,
});
export const toggleAdult = () => ({
  type: TOGGLE_ADULT,
});
export const toggleStartsWith = (str) => ({
  type: TOGGLE_STARTS_WITH,
  payload: str,
});

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_EVEN:
      return { ...state, isEven: !state.isEven };
    case TOGGLE_ADULT:
      return { ...state, isAdult: !state.isAdult };
    case TOGGLE_STARTS_WITH:
      return {
        ...state,
        startsWith: { state: !state.startsWith.state, letter: payload },
      };
    default:
      return state;
  }
};
