import Image from 'next/image'
import React from 'react'
import { MdPlayCircleFilled } from 'react-icons/md'
import styles from "./rightbar.module.css"
export default function rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> Avilable Now</span>
          <h3 className={styles.title}>
            {" "}
            How to use the new versionof admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            sunt
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}> Avilable Now</span>
          <h3 className={styles.title}>
            {" "}
            How to use the new versionof admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            sunt
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}
