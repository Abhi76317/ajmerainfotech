import { isEmail, isName } from "../validation/validation";

describe('testing validations', () => {
  test('check email', () => {
    expect(isEmail("manu12@gmail.com")).toBeTruthy()
  });

  test('check name', () => {
    expect(isName("manu12")).toBeTruthy()
  });

  test('check name', () => {
    expect(isName("137mman")).not.toBeTruthy()
  });
});
