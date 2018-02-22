export const ERROR = 'ERROR'

const initialState = {
  error: null
}

const error = (state = initialState, action) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default error

export const catchError = (error, type = 'ERROR') => ({
  type: type,
  error: error
})
