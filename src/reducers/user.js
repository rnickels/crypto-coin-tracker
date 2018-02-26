export const INIT_USER_SIGN_IN_SAGA = 'INIT_USER_SIGN_IN_SAGA'
export const REQUEST_USER_SIGN_IN = 'REQUEST_USER_SIGN_IN'
export const SET_USER_SIGNED_IN = 'SET_USER_SIGNED_IN'
export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION'

const initialState = {
  loggingIn: false,
  registering: false,
  authorized: false,
  email: null,
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_SIGN_IN:
      return {
        ...state,
        loggingIn: true,
      }
    case SET_USER_SIGNED_IN:
      return {
        ...state,
        authorized: true,
        email: action.email,
      }
    case REQUEST_USER_REGISTRATION:
      return {
        ...state,
        registering: true,
      }
    default:
      return state
  }
}

export default login

export const signInUser = () => ({
  type: INIT_USER_SIGN_IN_SAGA,
})

export const requestUserSignIn = () => ({
  type: REQUEST_USER_SIGN_IN,
})

export const setUserSignedIn = user => ({
  type: SET_USER_SIGNED_IN,
  email: user.email
})

export const requestUserRegistration = user => ({
  type: REQUEST_USER_REGISTRATION
})