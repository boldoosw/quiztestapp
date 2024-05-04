"use client";
import { signOut, useSession } from "next-auth/react";
const UserInfo = () => {
  const { data: session }: any = useSession();
  return (
    <>
      <form action="#">
        {/* <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fullName"
                  >
                    Овог Нэр
                  </label>
                  <div>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Халтар Ганболд"
                      defaultValue={
                        !session
                          ? ""
                          : session.user?.lastname +
                            " " +
                            session.user?.firstname
                      }
                    />
                  </div>
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="phoneNumber"
                  >
                    Утасны дугаар
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+976 8811 5348"
                    defaultValue="+976 8811 5348"
                  />
                </div>
              </div> */}
        {/* <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="emailAddress"
                >
                  Имайл хаяг
                </label>
                <div>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    placeholder="boldoosw@gmail.com"
                    defaultValue={!session ? "" : session.user?.email}
                  />
                </div>
              </div>{" "} */}
        <div className="mb-5.5">
          <label
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            htmlFor="Username"
          >
            Нэвтрэх нэр
          </label>
          <input
            className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
            type="text"
            name="Username"
            id="Username"
            placeholder="boldoosw"
            defaultValue={!session ? "Халтар Ганболд" : session.user?.email}
          />
        </div>
      </form>
    </>
  );
};

export default UserInfo;
