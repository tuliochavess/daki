import money from "../../../assets/icons/cards/money-bill-trend-up.svg";
import chart from "../../../assets/icons/cards/chart-line-up.svg";
import user from "../../../assets/icons/cards/users.svg";
import userPlus from "../../../assets/icons/cards/user-plus.svg";
import CardIcon from "../cardIcon/cardIcon";
import styles from "./cardBox.module.scss";

interface Props {
  type: "sales" | "salesAmount" | "client" | "newClient";
  value: string;
}

export default function CardBox(props: Props) {
  function renderIcon(type: string) {
    if (type === "sales")
      return (
        <CardIcon icon={money} backGroundColor="rgba(174, 255, 48, 0.25)" />
      );
    if (type === "salesAmount")
      return (
        <CardIcon icon={chart} backGroundColor="rgba(25, 252, 226, 0.20)" />
      );
    if (type === "client")
      return <CardIcon icon={user} backGroundColor="#C9DDFF" />;
    if (type === "client")
      return (
        <CardIcon icon={userPlus} backGroundColor="rgba(91, 36, 255, 0.25)" />
      );
  }

  function renderTitle(type: string) {
    if (type === "sales") return "Valor em vendas";
    if (type === "salesAmount") return "Unidades vendidas";
    if (type === "client") return "Clientes";
    if (type === "newClient") return "Novos clientes";
  }

  return (
    <div className={styles.cardBoxContainer}>
      {renderIcon(props.type)}
      <div className={styles.valueAndTitle}>
        <span className={styles.value}>{props.value}</span>
        <span className={styles.title}>{renderTitle(props.type)}</span>
      </div>
    </div>
  );
}
