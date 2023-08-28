import { useEffect } from "react";
import useRequest from "../../../hooks/useRequest/use-request";
import CardBox from "../../elements/cardBox";
import ChartBox from "../../elements/chartBox/chartBox";
import UpperMenu from "../../elements/upperMenu/upperMenu";
import { data1, data2, data3, data4 } from "./chartData";
import styles from "./content.module.scss";
import { DataItem } from "../../../api/request/db-request";

interface Props {
  itemList: string[];
  cityValue: string;
  brandValue: string;
  productValue: string;
  barCodeValue: string;
}

export default function Content(props: Props) {
  const api = useRequest<DataItem>();

  useEffect(() => {
    api.fetchApi({
      method: "GET",
      data: {
        CITY_CODE: props.cityValue,
        BRAND_NAME: props.brandValue,
        FULL_PRODUCT_NAME: props.productValue,
        BARCODE: props.barCodeValue,
      },
    });
  }, [props]);

  function renderTotal(property: keyof DataItem): string {
    const total = api.data.reduce((accumulator, currentValue) => {
      const propertyValue = currentValue[property] as number;
      return accumulator + propertyValue;
    }, 0);

    return total.toFixed(2);
  }

  return (
    <div className={styles.contetContainer}>
      <div className={styles.menu}>
        <UpperMenu itemList={props.itemList} />
      </div>
      <div className={styles.cards}>
        <CardBox type="sales" value={`R$ ${renderTotal("SALES_LC")}`} />
        <CardBox type="salesAmount" value={renderTotal("QUANTITY_SOLD")} />
        <CardBox type="client" value={renderTotal("CUSTOMERS")} />
        <CardBox type="newClient" value={renderTotal("NEW_CUSTOMERS")} />
      </div>
      <div className={styles.charts}>
        <ChartBox title="Valor em vendas" data={data1} chartColor="#6FB307" />
        <ChartBox title="Unidades vendidas" data={data2} chartColor="#009C8A" />
        <ChartBox title="Clientes" data={data3} chartColor="#1759FF" />
        <ChartBox title="Novos clientes" data={data4} chartColor="#5B24FF" />
      </div>
    </div>
  );
}
