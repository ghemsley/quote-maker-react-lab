const quotesReducer = (state = [], action) => {
  let foundQuote
  let newState
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        {
          content: action.quote.content,
          author: action.quote.author,
          votes: 0,
          id: action.quote.id
        }
      ]

    case 'REMOVE_QUOTE':
      foundQuote = state.find((quote) => quote.id === action.quoteId)
      if (foundQuote) {
        newState = [...state]
        newState.splice(newState.indexOf(foundQuote), 1)
        return newState
      } else return state

    case 'UPVOTE_QUOTE':
      newState = [...state]
      foundQuote = newState.find((quote) => quote.id === action.quoteId)
      if (foundQuote) {
        foundQuote.votes += 1
        return newState
      } else return state

    case 'DOWNVOTE_QUOTE':
      newState = [...state]
      foundQuote = newState.find((quote) => quote.id === action.quoteId)
      if (foundQuote) {
        foundQuote.votes -= 1
        return newState
      } else return state

    default:
      return state
  }
}

export default quotesReducer
