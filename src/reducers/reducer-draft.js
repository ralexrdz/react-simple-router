function reducerDraft (state= "", action) {
  switch (action.type) {
    case "SET_DRAFT":
      return action.text
    case "REMOVE_DRAFT":
      return ""  
    default:
      return state
  }
}