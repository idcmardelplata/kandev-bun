import type Resolver from "../interfaces/resolver";

const taskResolver: Resolver = {
  Query: {
    tasks: (_, _arg) => {
      let task = {
        title: "Some task",
        description: "Some description",
        creation_date: "18/10/2024 15:02pm",
        expiration_date: "29/10/2024 19:00pm",
        completed: true
      };
      return [task];
    }
  }
};

export default taskResolver;
