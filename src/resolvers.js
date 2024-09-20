const { v4: uuidv4 } = require('uuid'); 


const books = [];


const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === args.id),
  },
  Mutation: {
    addBook: (parent, args) => {
      const newBook = { id: uuidv4(), ...args };
      books.push(newBook);
      return newBook;
    },
  },
};

module.exports = resolvers;
