import CardBox from "../../elements/cardBox";
import ChartBox from "../../elements/chartBox/chartBox";
import UpperMenu from "../../elements/upperMenu/upperMenu";
import { data1, data2, data3, data4 } from "./chartData";
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
        <ChartBox
          title="Valor em vendas (por milhão)"
          data={data1}
          chartColor="#6FB307"
        />
        <ChartBox
          title="Unidades vendidas (por milhão)"
          data={data2}
          chartColor="#009C8A"
        />
        <ChartBox title="Clientes" data={data3} chartColor="#1759FF" />
        <ChartBox title="Novos clientes" data={data4} chartColor="#5B24FF" />
      </div>
    </div>
  );
}
