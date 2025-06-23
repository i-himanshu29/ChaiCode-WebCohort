import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";
const typeDefs = `#graphql

    type Author {
        name:String
        email:String
        books:[Book]
    }
    type Book {
        title: String
        subtitle: String
        publisher:String
        description: String
        author: Author
    }
    input BookPayload {
        title:String!
        description:String!
    }
    type Mutation {
        book(payload:BookPayload): Book
    }
    type Query {
        books: [Book]
        authors:[Author]
    }

`;

const resolvers = {
  Mutation: {
    book: async (_,{ payload }) => {
      console.log(payload);
      return { title: payload.title, description: payload.description };
    },
  },
  Query: {
    authors: () => {
      return [
        {
          name: "Himanshu",
          email: "himanshu@gmail.com",
        },
      ];
    },
    books: async () => {
      //DB calls

      const { data } = await axios.get(
        "https://api.freeapi.app/api/v1/public/books"
      );

      return data.data.data.map((book) => ({
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        publisher: book.volumeInfo.publisher,
        description: book.volumeInfo.description,
        author: {
          name: book.volumeInfo.authors[0],
        },
      }));
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function init() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
  });
  console.log(`Server is running on url ${url}`);
}

init();

// basic- step-0 -----------------------------------

// import { ApolloServer } from "@apollo/server";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const typeDefs = `#graphql

//     type Author {
//         name:String
//         email:String
//     }
//     type Book {
//         title: String
//         subtitle: String
//         publisher:String
//         description: String
//         author: Author
//     }

//     type Query {
//         books: [Book]
//         authors:[Author]
//     }

// `;

// const resolvers = {
//   Query: {
//     authors: () => {
//       return [
//         {
//           name: "Himanshu",
//           email: "himanshu@gmail.com",
//         },
//       ];
//     },
//     books: () => {
//       return [
//         {
//           title: "My title",
//           subtitle: "my subtitle",
//           publisher: "Himanshu",
//           description: "A book about pride",
//           author: {
//             name: "Himanshu",
//             email: "himanshu@gmail.com",
//           },
//         },
//       ];
//     },
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// async function init() {
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 8000 },
//   });
//   console.log(`Server is running on url ${url}`);
// }

// init();
