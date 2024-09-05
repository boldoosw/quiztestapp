import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: "boldoosw@gmail.com",
    phone: faker.person.phone,
    created_date: faker.person.created_date,
    role: "Админ",
    topic: "",
    report: "",
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});
