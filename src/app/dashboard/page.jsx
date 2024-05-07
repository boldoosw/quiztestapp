import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className={styles.top}>
          <Search placeholder="Search for a user..." />
          <Link href="/dashboard/users/add">
            <button className={styles.addButton}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
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
                    {user.firstname}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.role ? "Admin" : "Client"}</td>
                <td>{user.email ? "active" : "passive"}</td>
                <td>
                  <div className={styles.buttons}>
                    {session.user.role === "angi_8_9" && (
                      <Link href={`/dashboard_one?email=${user.email}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          Тайлан
                        </button>
                      </Link>
                    )}
                    {session.user.role === "angi10_12" && (
                      <Link href={`/dashboard_two?email=${user.email}`}>
                        <button className={`${styles.button} ${styles.view}`}>
                          Тайлан
                        </button>
                      </Link>
                    )}
                    {/* <form action={deleteUser}> */}
                    <form>
                      <input type="hidden" name="id" value={user.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
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
