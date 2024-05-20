const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("../graphql/typeDefs.js");
const resolvers = require("../graphql/resolvers.js");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const port = 3005;
// const mongoUri = process.env.MONGO_DB_URI;
const mongoUri = `mongodb+srv://academiateologie:7k7kcTZC0wSANmsW@posts.bgpyxkq.mongodb.net/posts?retryWrites=true&w=posts`;

const app = express();
app.use(cors());

// console.log("Connection String:", umongoUri);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log(`🚀 Database is connected!`);
  })
  .then(() => {
    startStandaloneServer(server, {
      listen: { port },
    });
    // console.log(`🚀 Server is ready to go on port:${port}!`);
  })
  .catch((err) => {
    console.log(`Some wrong${err}!`);
  });

let server = new ApolloServer({
  typeDefs,
  resolvers,
});
