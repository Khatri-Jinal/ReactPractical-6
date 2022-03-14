export const USER_LOADING = "USER_LOADING";
export const USER_FAIL = "USER_FAIL";
export const USER_SUCCESS = "USER_SUCCESS";

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string
}

export interface UserLoading {
  type: typeof USER_LOADING
  payload: []
}

export interface UserFail {
  type: typeof USER_FAIL,
  payload: string
}

export interface UserSuccess {
  type: typeof USER_SUCCESS,
  payload: UserType[]
}

export type UserDispatchTypes = UserLoading | UserFail | UserSuccess