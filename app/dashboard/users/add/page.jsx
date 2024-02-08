import { addUser } from "@/app/lib/action";
import styles from "@/app/ui/dashboard/products/addProducts/addProducts.module.css";
export default function page() {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={false} className={styles.option} selected>
            is Admin?
          </option>
          <option value={true} className={styles.option}>
            {" "}
            Yes
          </option>
          <option value={false} className={styles.option}>
            No
          </option>
        </select>

        <select name="isActive" id="isActive">
          <option value={true} selected className={styles.option}>
            is Active?
          </option>
          <option value={true} className={styles.option}>
            {" "}
            Yes
          </option>
          <option value={false} className={styles.option}>
            {" "}
            No
          </option>
        </select>
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
