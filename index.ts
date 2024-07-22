import { GraphqlServer } from "./src/index";


async function main() {
  let graphqlServer = new GraphqlServer();
  graphqlServer.start(4000);
}

main();
