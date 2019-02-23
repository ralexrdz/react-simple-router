function sessionReducer(state = 'alguien', action) {
	switch (action.type) {
    case 'SET_SESSION': 
      console.log(action)
      return action.user
    default:
      return state
	}
}

export default sessionReducer