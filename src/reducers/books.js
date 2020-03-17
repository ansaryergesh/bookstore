const booksReducer = (state,action) => {
    const {type} = action;
    switch(type) {
        case 'CREATE_BOOK':
            return [...state,action.book];
        case 'REMOVE_BOOK':
            return state.filter(book=>book.id !== action.book.id);
        default:
            return state;
    }
}

export default booksReducer;