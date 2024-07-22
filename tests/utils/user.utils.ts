import { faker } from '@faker-js/faker';

export class UserUtils {
  private constructor(){}
  static createRandomUser() {
    let user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
    }
    return user;
  }
}
