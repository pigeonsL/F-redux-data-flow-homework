const signIn = payload => {
  return {
    type: 'SIGN_IN',
    payload
  };
};
const signOut = {
  type: 'SIGN_OUT'
};
export { signIn, signOut };
