/* eslint arrow-parens: [2, "as-needed"] */
export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  book,
});

export const filterChange = book => ({
  type: 'CHANGE_FILTER',
  book,
});
