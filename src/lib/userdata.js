import { faker } from "@faker-js/faker";
// import { fetchAllUsers } from "@/app/lib/data";

export function createRandomUser() {
  // const { count, users } = await fetchAllUsers();
  // console.log("fetch users:", users);
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: "boldoosw@gmail.com",
    phone: "",
    created_date: "",
    role: "Админ",
    topic: "",
    report: "",
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});
