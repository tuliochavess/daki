import { useEffect, useState } from "react";
import useRequest from "../../../hooks/useRequest/use-request";
import CardBox from "../../elements/cardBox";
import ChartBox from "../../elements/chartBox/chartBox";
import UpperMenu from "../../elements/upperMenu/upperMenu";
import styles from "./content.module.scss";
import { DataItem } from "../../../api/request/db-request";
import RenderChartData from "./renderChart";

interface Props {
  itemList: string[];
  cityValue: string;
  brandValue: string;
  productValue: string;
  barCodeValue: string;
}

type WeekRange = {
  start: number;
  end: number;
};

export default function Content(props: Props) {
  const api = useRequest<DataItem>();
  const [salesWeek, setSalesWeek] = useState({ start: 1, end: 7 });
  const [unityWeek, setUnityWeek] = useState({ start: 1, end: 7 });
  const [clientsWeek, setClientsWeek] = useState({ start: 1, end: 7 });
  const [newClientsWeek, setNewClientsWeek] = useState({ start: 1, end: 7 });

  function setDateRange(value: string, key: string) {
    const weekMap: Record<string, WeekRange> = {
      "Semana 1": { start: 1, end: 7 },
      "Semana 2": { start: 8, end: 14 },
      "Semana 3": { start: 15, end: 21 },
      "Semana 4": { start: 22, end: 31 },
    };

    const selectedWeek = weekMap[value];

    if (selectedWeek) {
      if (key === "SALES_LC") setSalesWeek(selectedWeek);
      if (key === "QUANTITY_SOLD") setUnityWeek(selectedWeek);
      if (key === "CUSTOMERS") setClientsWeek(selectedWeek);
      if (key === "NEW_CUSTOMERS") setNewClientsWeek(selectedWeek);
    }
  }

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
        <ChartBox
          title="Valor em vendas"
          data={RenderChartData(
            api.data,
            salesWeek.start,
            salesWeek.end,
            "SALES_LC"
          )}
          chartColor="#6FB307"
          onChange={(x) => setDateRange(x, "SALES_LC")}
        />
        <ChartBox
          title="Unidades vendidas"
          data={RenderChartData(
            api.data,
            unityWeek.start,
            unityWeek.end,
            "QUANTITY_SOLD"
          )}
          chartColor="#009C8A"
          onChange={(x) => setDateRange(x, "QUANTITY_SOLD")}
        />
        <ChartBox
          title="Clientes"
          data={RenderChartData(
            api.data,
            clientsWeek.start,
            clientsWeek.end,
            "CUSTOMERS"
          )}
          chartColor="#1759FF"
          onChange={(x) => setDateRange(x, "CUSTOMERS")}
        />
        <ChartBox
          title="Novos clientes"
          data={RenderChartData(
            api.data,
            newClientsWeek.start,
            newClientsWeek.end,
            "NEW_CUSTOMERS"
          )}
          chartColor="#5B24FF"
          onChange={(x) => setDateRange(x, "NEW_CUSTOMERS")}
        />
      </div>
    </div>
  );
}
