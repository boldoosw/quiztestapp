// * fake data's
// import { faker } from "https://esm.sh/@faker-js/faker";
// import { faker } from "faker";
import { faker } from "@faker-js/faker";
// import * as faker from "@faker-js/faker";

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(120),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});
