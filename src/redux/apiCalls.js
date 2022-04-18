import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom'
import initCart from "./cartRedux"
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log(user)
  await axios(
    { url: `/user/login`, data: user, method: 'post', baseURL: 'https://api.shopunicorn.live'}
).then(function (response) {
    console.log(response.data)
    dispatch(loginSuccess(response.data.data))
}).catch(function (error) {
    dispatch(loginFailure)
})
};




export const register = async (dispatch, user) => {
    console.log(user)
    await axios(
      { url: `/user/register`, data: user, method: 'post', baseURL: 'https://api.shopunicorn.live'}
  ).then(function (response) {
      
  }).catch(function (error) {
      
  })
  };
