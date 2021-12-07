import { SAVE, UPDATE, FETCH_ALL } from "../constants/constants";

export const getResume = (data) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const saveResume = (data) => async (dispatch) => {
  console.log(data, "loll");
  try {
    dispatch({ type: SAVE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const updatePost = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
