function tuitsReducer (state = [{
  id: Date.now(),
  text: 'Hola',
  quien: 'ralex',
  date: new Date().toLocaleString('es-MX')
}], action) {
  switch (action.type) {
    case 'ADD_TUIT':
      console.log('TuitReducer addTuit', action.tuit)
      return [...state, action.tuit]
    case 'DELETE_TUIT':
      let filterTuits = state.filter((tuit) => tuit.id !== action.tuitId)
      return filterTuits
    case 'GET_TWEETS_SUCCESSFUL':
      return [...state, ...action.tweets]
    default:
      return state
  }
}

export default tuitsReducer
