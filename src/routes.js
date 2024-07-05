const addBookHandler = require('./handler/addBookHandler');
const getAllBooks = require('./handler/getAllBooks');
const getBookById = require('./handler/getBookById');
const editBookById = require('./handler/editBookById');
const delBookById = require('./handler/delBookById');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookById,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookById,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: delBookById,
    },
];

module.exports = routes;
