import CardBox from "../../elements/cardBox";
import ChartBox from "../../elements/chartBox/chartBox";
import UpperMenu from "../../elements/upperMenu/upperMenu";
import styles from "./content.module.scss";

interface Props {
  itemList: string[];
}

export default function Content(props: Props) {
  return (
    <div className={styles.contetContainer}>
      <div className={styles.menu}>
        <UpperMenu itemList={props.itemList} />
      </div>
      <div className={styles.cards}>
        <CardBox type="sales" value="R$ 5.736.812,89" />
        <CardBox type="salesAmount" value="1.512.998" />
        <CardBox type="client" value="92.345" />
        <CardBox type="newClient" value="2.511" />
      </div>
      <div className={styles.charts}>
        <ChartBox title="Valor em vendas" />
        <ChartBox title="Unidades vendidas" />
        <ChartBox title="Clientes" />
        <ChartBox title="Novos clientes" />
      </div>
    </div>
  );
}
