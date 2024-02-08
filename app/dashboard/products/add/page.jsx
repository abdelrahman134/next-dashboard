import { addProduct } from "@/app/lib/action";
import styles from "@/app/ui/dashboard/products/addProducts/addProducts.module.css"
export default function page() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option className={styles.option} value="general">
            Choose a Category
          </option>
          <option className={styles.option} value="kitchen">
            Kitchen
          </option>
          <option className={styles.option} value="kitchen">
            Phone
          </option>
          <option className={styles.option} value="kitchen">
            Computer
          </option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
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

