import { GraphqlServer } from "./src/index";

async function main() {
  //TODO: Injectar los casos de uso en el constructor de `GraphqlServer`
  return await new GraphqlServer().start(4000);
}

main();
