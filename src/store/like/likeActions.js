// likeActions.js
import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";

export const likeApartment = (apartmentId) => async (dispatch) => {
  try {
    await axios.post(`${ACCOUNT_API}/apartment/${apartmentId}/like/`);
    dispatch(likeSuccess(apartmentId));
  } catch (error) {
    console.error("Error liking apartment:", error);
    dispatch(likeError());
  }
};

const likeSuccess = (apartmentId) => ({
  type: "LIKE_SUCCESS",
  payload: { apartmentId },
});

const likeError = () => ({
  type: "LIKE_ERROR",
});
