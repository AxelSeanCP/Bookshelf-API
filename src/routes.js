const addBookHandler = require('./handler/addBookHandler');
const getAllBooks = require('./handler/getAllBooks');

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
];

module.exports = routes;
