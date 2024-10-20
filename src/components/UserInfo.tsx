import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const UserInfo = ({ email }: { email: String }) => {
  const [searchedUser, setData] = useState({});

  const [user_email, setEmail] = useState(email);

  async function fetchUserData() {
    const { data } = await axios.get(`/api/user`, {
      params: { user_email: user_email },
    });

    setData({ ...data.existinguser });
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Хувийн мэдээлэл
            </h3>
          </div>
          <div className="p-7">
            <form action="#">
              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
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
                      placeholder=""
                      defaultValue={
                        !searchedUser ? "" : (searchedUser as any).lastname
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
                    defaultValue={
                      !searchedUser ? "" : (searchedUser as any).phone
                    }
                  />
                </div>
              </div>

              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="fullName"
                  >
                    Сургууль анги
                  </label>
                  <div>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder=""
                      defaultValue={
                        !searchedUser ? "" : (searchedUser as any).firstname
                      }
                    />
                  </div>
                </div>

                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="phoneNumber"
                  >
                    Имайл хаяг
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+976 8811 5348"
                    defaultValue={
                      !searchedUser ? "" : (searchedUser as any).email
                    }
                  />
                </div>
              </div>

              <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                <div className="w-full sm:w-1/2">
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
                    defaultValue={
                      !searchedUser ? "" : (searchedUser as any).email
                    }
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="phoneNumber"
                  >
                    Фэйсбүүк хаяг
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                    type="text"
                    name="facebook"
                    id="facebook"
                    defaultValue={
                      !searchedUser ? "" : (searchedUser as any).facebook
                    }
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
