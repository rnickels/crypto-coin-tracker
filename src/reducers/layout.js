const SET_MOBILE_NAV_VISIBILITY = 'LAYOUT/SET_MOBILE_NAV_VISIBILITY'

export const setMobileNavVisibility = (isVisible) => ({
  type: SET_MOBILE_NAV_VISIBILITY,
  isVisible
})

export const toggleMobileNavVisibility = (dispatch, getState) => {
  let visible = getState().Layout.mobileNavVisibility
  dispatch(setMobileNavVisibility(!visible))
}

export default function reducer(state = {
  mobileNavVisibility: false
}, action) {
  switch (action.type) {
    case SET_MOBILE_NAV_VISIBILITY:
      return {
        ...state,
        mobileNavVisibility: action.isVisibile
      }
    default:
      return { ...state }
  }
}