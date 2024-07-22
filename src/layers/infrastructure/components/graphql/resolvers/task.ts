import type Resolver from "../interfaces/resolver";

let tasks = [];

const taskResolver: Resolver = {
  Query: {
    tasks: (_, _arg) => {
      return tasks;
    }
  },
  Mutation: {
     create(_, args) {

      let {title, description, creation_date, expiration_date, completed} = args;

      let task = {
        title,
        description,
        creation_date,
        expiration_date,
        completed
      };

      tasks.push(task);
      return task;
    }
  }
};

export default taskResolver;
