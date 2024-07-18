import  { ApolloServer }  from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import type { Server } from "../interfaces/server";
import { bookSchema } from "../schemas";
import bookResolver from "../resolvers";

export default class GraphqlServer implements Server {
  private server: any;
  constructor() {
    this.server = new ApolloServer({typeDefs: bookSchema , resolvers: bookResolver});
  }
  async start(port: number = 4000) {
    const { url } = await startStandaloneServer(this.server, {
      listen: { port: port },
    });
    console.log(`🚀  Server ready at: ${url}`);
  }
};
