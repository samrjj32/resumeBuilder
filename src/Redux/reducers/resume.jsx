import { SAVE, UPDATE, FETCH_ALL } from "../constants/constants";

export default (resume = {}, action) => {
 
  switch (action.type) {

  
    case FETCH_ALL:
      return action.payload;

    case SAVE:
      return action.payload;

    // case UPDATE:
    //   return posts.map((post) =>
    //     resume._id === action.payload._id ? action.payload : resume
    //   );

    default:
      return resume;
  }
};
