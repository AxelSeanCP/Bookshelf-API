const books = require('../books');

const delBookById = (request, h) => {
    const {bookId} = request.params;

    const index = books.findIndex((book) => book.id === bookId);

    if (index === -1) {
        const response = h.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan',
        });
        response.code(404);
        return response;
    }

    books.splice(index, 1);
    const response = h.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
};

module.exports = delBookById;
