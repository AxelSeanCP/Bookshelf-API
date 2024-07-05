const books = require('../books');

const selectProperty = (book) => {
    const {id, name, publisher} = book;
    return {id, name, publisher};
};

const getAllBooks = (request, h) => {
    const {name, finished, reading} = request.query;

    if (books.length === 0) {
        const response = h.response({
            status: 'success',
            data: {
                books: [],
            },
        });
        response.code(200);
        return response;
    }

    let getBooks = books;

    if (reading) {
        if (reading === '1') {
            getBooks = getBooks.filter((book) => book.reading === true);
        } else if (reading === '0') {
            getBooks = getBooks.filter((book) => book.reading === false);
        }
    }

    if (finished) {
        if (finished === '1') {
            getBooks = getBooks.filter((book) => book.finished === true);
        } else if (finished === '0') {
            getBooks = getBooks.filter((book) => book.finished === false);
        }
    }

    if (name) {
        getBooks = getBooks.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    }

    const listBooks = getBooks.map(selectProperty);

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
