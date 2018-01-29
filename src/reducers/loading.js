const Loading = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return true
    case 'LOADING_DATA_ERROR':
    case 'LOADING_DATA_COMPLETE':
      return false
    default:
      return state
  }
}

export default Loading