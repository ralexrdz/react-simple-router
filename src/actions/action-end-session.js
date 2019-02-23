function endSession() {
  return {
    type: 'SET_SESSION',
    user: null
  }
}

export default endSession