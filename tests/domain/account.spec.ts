import {expect, test, describe} from 'bun:test';
import {UserUtils} from '../utils/user.utils';
import {Account, type UserData, UserSearchOptions} from '../../src/domain/account';


describe("New account creation", () => {
  test("should add a new account sucefully", () => {
    let sut = new Account();
    let user: UserData = UserUtils.createRandomUser();

    sut.create(user);
    let result = sut.findUserBy(user, UserSearchOptions.EMAIL);
    expect(result).toEqual(user);
  });

  test.todo("should fail if account exists") /*TODO: Este caso se implementa desde la db */
  test.todo("should handle account profile")
  test.todo("should signin")
  test.todo("should signout")

})
