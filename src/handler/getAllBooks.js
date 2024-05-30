const books = require('../books');

const selectProperty = (book) => {
    const {id, name, publisher} = book;
    return {id, name, publisher};
};

const getAllBooks = (request, h) => {
    const listBooks = books.length !== 0 ? books.map(selectProperty) : [];

    const response = h.response({
        status: 'success',
        data: {
            books: listBooks,
        },
    });
    response.code(200);
    return response;
};

module.exports = getAllBooks;
