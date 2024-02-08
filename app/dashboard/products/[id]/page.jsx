import { updateProduct } from "@/app/lib/action";
import { fetchProduct, fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"
export default function page({params}) {
  const { id } = params;
  const product =fetchProduct(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id"  />
          <label>Title</label>
          <input type="text" name="title" />
          <label>Price</label>
          <input type="number" name="price"  />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Colors</label>
          <input type="text" name="red"/>
          <label>Size</label>
          <textarea type="text" name="size" />
          <label>Cal</label>
          <select name="cal" id="cal">
            <option value="kitchen" >
             Kitchen
            </option>
            <option value="computer" >
              Computer
            </option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
