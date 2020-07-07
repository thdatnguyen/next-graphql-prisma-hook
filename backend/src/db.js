const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secrect: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
