import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import groq from "./groq.js";

const resolvers = {
  Query: {
    games() {
      return groq.games;
    },
    game(_, args) {
      args.id;
      return groq.games.find((data) => data.id === args.id);
    },
    reviews() {
      return groq.reviews;
    },
    review(_, args) {
      // console.log("args", ...args);
      args.id;
      return groq.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return groq.authors;
    },
    author(_, args) {
      args.id;
      return groq.authors.find((data) => data.id === args.id);
    },
    authorVerified(_, args) {
      // args.id;
      // console.log("argsIsCalled", args.verified);

      const verified = groq.authors.filter(
        (data) => data.verified === args.verified
      );
      // console.log("verified", verified);
      return verified;
    },
  },
  Game: {
    reviews(parent) {
      // console.log("parent", parent);
      return groq.reviews.filter((data) => data.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return groq.reviews.filter((data) => data.author_id === parent.id);
    },
  },
  Review: {
    author(parent) {
      return groq.authors.find((auth) => auth.id === parent.author_id);
    },
    game(parent) {
      return groq.games.find((gam) => gam.id === parent.game_id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      groq.games = groq.games.filter((data) => data.id !== args.id);
      return groq.games;
    },
    addGame(_, args) {
      let game = {
        id: Math.floor(Math.random() * 10000).toString(),
        ...args.game,
      };
      // console.log("game", game);
      groq.games.push(game);
      return groq.games;
    },
    updateGame(_, args) {
      console.log("args", args);
      groq.games = groq.games.map((data) => {
        if (data.id === args.id) {
          return { ...data, ...args.edits };
        }
        return data;
      });
      return groq.games.find((data) => data.id === args.id);
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at port 4000`);
