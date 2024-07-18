import type Resolver from "../interfaces/resolver";

const bookResolver: Resolver = {
  Query: {
    books: async (_, _args) => {
      const response = await fetch("https://potterapi-fedeperin.vercel.app/es/books")
      if(response.ok) {
        let data = await response.json();
        return data;
      }
    }
  },
  Mutation: {},
};

export default bookResolver;
