import { useState } from "react";
import styles from "./upperMenu.module.scss";

interface Props {
  itemList: string[];
}

export default function UpperMenu(props: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  function toggleClass(index: number) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div className={styles.upperMenuContainer}>
      {props.itemList.map((x, i) => (
        <div>
          <span
            key={i}
            className={`${styles.item} ${
              i === activeIndex ? styles.active : ""
            }`}
            onClick={() => toggleClass(i)}>
            {x}
          </span>
          {i === activeIndex ? <hr className={styles.emphasis} /> : null}
        </div>
      ))}
    </div>
  );
}
