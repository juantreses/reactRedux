import { v4 as uuid } from "uuid";

/*****************/
/* INITIAL STATE */
/*****************/
const initialState = [
  {
    id: uuid(),
    fn: "Jos",
    age: 16,
  },
  {
    id: uuid(),
    fn: "Pieter",
    age: 22,
  },
  {
    id: uuid(),
    fn: "Jordan",
    age: 23,
  },
];

/*********/
/* TYPES */
/*********/
const ADD_FRIEND = "ADD_FRIEND";
const REMOVE_FRIEND = "REMOVE_FRIEND";

/********************/
/* ACTIONS CREATORS */
/********************/
export const addFriend = (fn, age) => ({
  type: ADD_FRIEND,
  payload: {
    id: uuid(),
    fn,
    age,
  },
});
export const removeFriend = (id) => ({
  type: REMOVE_FRIEND,
  payload: id,
});

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FRIEND:
      return [...state, payload];
    case REMOVE_FRIEND:
      return state.filter((friendObj) => {
        return friendObj.id === payload ? false : true;
      });
    default:
      return state;
  }
};
