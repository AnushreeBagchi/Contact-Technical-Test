import { createReducer } from "@reduxjs/toolkit";
import { adduser } from "../actions/user";

const reducer = createReducer(
  {},
  {
    [adduser.type]: (user, action) => {
      const key = Object.keys(action.payload);
      user[key] = action.payload[key];
    }
  }
);

export default reducer;
