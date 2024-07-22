import { UserSearchOptions } from "./types/usersearchoptions";

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
};


//TODO: deberia extender de una clase base llamada BaseEntity
export class Account {

  //TODO: reemplazar esto con una llamada a la base de datos.
  private users: UserData[] = [];

  constructor() {}

  create(user: UserData) {
    //TODO: Verificar que el usuario no exista previamente.
    this.users.push(user);
  }

  findUserBy(user: UserData, searchOptions: UserSearchOptions) {
    //TODO: reemplazar esta chanchada con una funcion generica o con un strategy.
    switch (searchOptions) {
      case UserSearchOptions.EMAIL:
        return this.users.find(storedUser  => user.email === storedUser.email);
        break;
      case UserSearchOptions.USERNAME:
        return this.users.find(storedUser  => user.username === storedUser.username);
        break;
      case UserSearchOptions.FULLNAME:
        return this.users.find(storedUser  => `${user.firstName } ${user.lastName}` === `${storedUser.firstName} ${storedUser.lastName}`);
        break;
    }
  }
}
