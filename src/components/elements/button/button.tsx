import styles from "./button.module.scss";

interface Props {
  type: "primary";
  content: string;
  icon?: string;
}

export default function Button(props: Props) {
  return (
    <button className={styles.button}>
      {props.content}
      <img src={props.icon} className={styles.icon} />
    </button>
  );
}
