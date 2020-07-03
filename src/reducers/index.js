const defaultState = {
  profile: undefined,
  isLogin: false
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return { ...state, profile: action.payload, isLogin: true };
    case 'SIGN_OUT':
      return { ...state, profile: undefined, isLogin: false };
    default:
      return state;
  }
};
export default reducer;
