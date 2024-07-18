import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

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
          <label>Утас</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />

          <label>Is Admin?</label>
          <select name="role" id="role">
            <option value="admin" selected={user.admin}>
              admin
            </option>
            <option value="angi_8_9" selected={user.angi_8_9}>
              angi_8_9
            </option>
            <option value="angi10_12" selected={user.angi10_12}>
              angi10_12
            </option>
          </select>
          {/* <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select> */}
          <button>Өөрчил</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
