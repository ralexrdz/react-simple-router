function login(user) {
  return {
    type: 'SET_SESSION',
    user
  }
}

export default login