import styles from "./cardIcon.module.scss";

interface Props {
  icon: string;
  backGroundColor: string;
  iconClass?: string;
}

export default function CardIcon(props: Props) {
  return (
    <span
      className={styles.circle}
      style={{ background: props.backGroundColor }}>
      <img src={props.icon} className={props.iconClass} />
    </span>
  );
}
