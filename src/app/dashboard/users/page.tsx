import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <main>
      <div className=" mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className={styles.top}>
          <Search placeholder="Имайл хаягаар хайлт хийнэ үү..." />
          <Link href="/dashboard/users/add">
            {/* <button className={styles.addButton}>Шинээр нэмэх</button> */}
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Овог Нэр</td>
              <td>Имайл хаяг</td>
              <td>Утас</td>
              <td>Үүсгэсэн огноо</td>
              <td>Хэрэглэгч</td>
              <td>Төлөв</td>
              <td>Үйлдлүүд</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {user.lastname + " " + user.firstname}
                  </div>
                </td>
                <td>{user.email}</td>{" "}
                <td>{user.phone ? user.phone : "байхгүй"}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>
                  {user.role === "admin"
                    ? "Админ"
                    : user.role === "angi8_9"
                    ? "8,9 анги"
                    : "10-12 анги"}
                </td>
                <td>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.edit}`}>
                      Зөвлөмж
                    </button>
                  </Link>
                </td>
                <td>
                  <div className={styles.buttons}>
                    {user.role === "angi8_9" && (
                      <Link
                        href={`/dashboard_one?email=${user.email}&topic_id=${user.topic_id}&role=${user.role}`}
                      >
                        <button className={`${styles.button} ${styles.report}`}>
                          Тайлан
                        </button>
                      </Link>
                    )}
                    {user.role === "angi10_12" && (
                      <Link
                        href={`/dashboard_two?email=${user.email}&topic_id=${user.topic_id}&role=${user.role}`}
                      >
                        <button className={`${styles.button} ${styles.report}`}>
                          Тайлан
                        </button>
                      </Link>
                    )}
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Устгах
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </main>
  );
};

export default UsersPage;
