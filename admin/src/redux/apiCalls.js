import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user)
  await axios(
    { url: `/user/login`, data: user, method: 'post', baseURL: 'https://api.shopunicorn.live'}
).then(function (response) {
    dispatch(loginSuccess(response.data))
}).catch(function (error) {
    dispatch(loginFailure)
})
};

export const register = async (dispatch, user) => {
    console.log(user)
    await axios(
      { url: `/user/register`, data: user, method: 'post', baseURL: 'https://api.shopunicorn.live'}
  ).then(function (response) {
      dispatch(loginSuccess(response.data))
  }).catch(function (error) {
      dispatch(loginFailure)
  })
  };
