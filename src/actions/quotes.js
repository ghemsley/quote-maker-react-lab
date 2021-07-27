// TODO: Create action creators as defined in tests
import uuid from 'uuid'
export const addQuote = (quote) => ({
  type: 'ADD_QUOTE',
  quote: { ...quote, id: uuid() }
})

export const removeQuote = (quoteId) => ({
  type: 'REMOVE_QUOTE',
  quoteId
})

export const upvoteQuote = (quoteId) => ({
  type: 'UPVOTE_QUOTE',
  quoteId
})

export const downvoteQuote = (quoteId) => ({
  type: 'DOWNVOTE_QUOTE',
  quoteId
})
