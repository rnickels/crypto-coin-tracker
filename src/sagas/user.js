import { call, put, takeEvery } from 'redux-saga/effects'
import { requestUserSignIn, setUserSignedIn, requestUserRegistration } from '../reducers/user'
import { catchError } from '../reducers/error'
import { authorizeUser, registerUser } from '../services/api/user'

export function* watchSignInUser() {
  yield takeEvery('INIT_USER_SIGN_IN_SAGA', signInUserAsync())
}

export function* watchRegisterUser() {
  yield takeEvery('INIT_USER_REGISTRATION_SAGA', registerUserAsync())
}

export function* signInUserAsync(action) {
  yield put(requestUserSignIn())
  const data = yield call(authorizeUser(action.user))
  if (data && !data.error) {
    yield put(setUserSignedIn(data))
  } else {
    yield put(catchError(data.error))
  }
}

export function* registerUserAsync(action) {
  yield put(requestUserRegistration())
  const data = yield call(registerUser(action.user))
  if (data && !data.error) {
    yield put(setUserSignedIn(data))
  } else {
    yield put(catchError(data.error))
  }
}