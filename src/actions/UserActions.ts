import { Dispatch } from "redux";
import { USER_FAIL, USER_LOADING, USER_SUCCESS, UserDispatchTypes, UserType } from "./UserActionTypes";
import axios from "axios";

interface ResponseDataType {
  data: UserType[],
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  support: {
    text: string
    url: string
  }
}

export const getUser = (pn: number) => {
  return function (dispatch: Dispatch<UserDispatchTypes>) {
    dispatch({
      type: USER_LOADING,
      payload: []
    })
    axios
      .get<ResponseDataType>(`https://reqres.in/api/users?page=${pn}`)
      .then((response) => {
        dispatch({
          type: USER_SUCCESS,
          payload: response.data.data
        })
      })
      .catch((error) => {
        dispatch({
          type: USER_FAIL,
          payload: error.message
        })
      });
  };
};
