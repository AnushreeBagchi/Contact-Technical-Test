import { createReducer } from "@reduxjs/toolkit";
import { adduser, fetchUserAction, fetchUserFailed } from "../actions/user";

const reducer = createReducer(
  {},
  {
    [adduser.type]: (user, action) => {
      const key = Object.keys(action.payload);
      if (typeof user[key] )
      user[key] = action.payload[key];
    },
    [fetchUserAction.type]: (user, action) => {
      user.response = action.payload;
    },
    [fetchUserFailed.type]: (user,action) => {
      user.response = action.payload;
    }

  }
);

export default reducer;
