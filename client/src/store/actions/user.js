import { createAction } from "@reduxjs/toolkit";

export const adduser = createAction("adduser");
export const fetchUserAction = createAction("fetchUserAction");
export const fetchUserFailed = createAction("fetchUserFailed");

export const fetchUser = (user) => async (dispatch) => {
  const url =
    "https://contact-frontend-test-api.herokuapp.com/anushree-bagchi/applications";
  return dispatch({
    type: "apiCallBegan",
    payload: {
      url,
      method: "POST",
      data: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      onSuccess: fetchUserAction.type,
      onError: fetchUserFailed.type,
    },
  });
};

export const getResponse = (state) => {
  console.log(state)
}
