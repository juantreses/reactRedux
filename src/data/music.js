import axios from "axios";

/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
  music: {
    loading: false,
    error: "",
    data: [],
  },
};

/*********/
/* TYPES */
/*********/
const FETCH_MUSIC_START = "FETCH_MUSIC_START";

/********************/
/* ACTIONS CREATORS */
/********************/
export const searchMusic = (str) => (dispatch) => {
  dispatch(setLoad());
  axios
    .get(`https://api.deezer.com/search/artist?q=${str}`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export const setLoad = () => ({ type: FETCH_MUSIC_START });

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MUSIC_START:
      return { ...state, music: { ...state.music, loading: true } };
    default:
      return state;
  }
};
