import axios from "axios";
import { ACCOUNT_API } from "../../helpers/consts";
import {
  incrementLike,
  decrementLike,
  fetchLikeCount,
} from "../../store/like/likeCounterSlice";

export const likeProduct = (productId) => async (dispatch) => {
  try {
    const liked = await axios.post(
      `${ACCOUNT_API}/apartment/${productId}/like/`
    );

    if (liked) {
      dispatch(incrementLike(productId));
      dispatch(fetchLikeCount(productId));
    }
  } catch (error) {
    console.error("Error liking the product:", error);
  }
};
