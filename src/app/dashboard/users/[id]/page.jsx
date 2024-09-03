import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const NEXT_PUBLIC_APP_API_ENDPOINT = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

const getTopics = async () => {
  try {
    const res = await fetch(`${NEXT_PUBLIC_APP_API_ENDPOINT}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);
  const { topics } = await getTopics();

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.firstname}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Овог</label>
          <input type="text" name="lastname" placeholder={user.lastname} />
          <label>Нэр</label>
          <input type="text" name="firstname" placeholder={user.firstname} />
          <label>Хэрэглэгчийн эрх</label>
          <select name="role" id="role">
            <option value="admin" selected={user.role === "admin"}>
              admin
            </option>
            <option value="angi10_12" selected={user.role === "angi10_12"}>
              10-12 анги
            </option>
            <option value="angi8_9" selected={user.role === "angi8_9"}>
              8-9 анги
            </option>
          </select>
          <label>Зөвлөмж сонгох</label>
          <select name="topic_id" id="topic_id">
            {topics.map((t) => (
              <option
                key={t._id}
                value={t._id}
                selected={user.topic_id === t._id}
              >
                <h2 className="font-bold text-2xl">{t.title}</h2>
              </option>
            ))}
          </select>
          <button>Өөрчил</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
