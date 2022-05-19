

import { register } from "../../ServerRequest";
import {registerWithEmailAndPassword} from "../../ServerRequest/auth";

export const userRegister = (
  firstName,
  lastName,
  address,
  phone,
  email,
  password
) => dispatch => {
  dispatch({
    type: POST_REGISTER_BEGIN
  });

  return registerWithEmailAndPassword(firstName, lastName, address, phone, email, password)
    .then(res => {
      dispatch({
        type: POST_REGISTER_SUCCESS,
        payload: res
      });

      return res;
    })
    .catch(error => {
      dispatch({
        type: POST_REGISTER_FAIL,
        payload: { error }
      });

      throw error;
    });
};

export const POST_REGISTER_BEGIN = "POST_REGISTER_BEGIN";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAIL = "POST_REGISTER_FAIL";
