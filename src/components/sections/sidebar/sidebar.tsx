import download from "../../../assets/icons/download.svg";
import AdvertisingBox from "../../elements/advertisingBox/advertisingBox";
import Button from "../../elements/button/button";
import DefaultInput from "../../elements/deafultInput/defaultInput";
import styles from "./sidebar.module.scss";

interface Props {
  cityValue: (value: string) => void;
}

export default function Sidebar(props: Props) {
  const cityOptions = ["BH", "SP", "RJ"];
  const brandOptions = ["Sadia Premium", "Sadia"];
  const correncyOptions = ["Real", "Dolar"];
  const productOptions = ["Margarina Qualy", "Peito de Frango"];
  const barcodeOptions = ["000011111", "00002222", "00003333"];

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.filterContainer}>
        <div className={styles.inputRow}>
          <DefaultInput type="date" label="Data" />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput
            type="select"
            label="Cidade"
            options={cityOptions}
            onChange={(x) => {
              props.cityValue(x);
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput type="select" label="Marca" options={brandOptions} />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput type="select" label="Moeda" options={correncyOptions} />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput
            type="select"
            label="Produto"
            options={productOptions}
          />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput
            type="select"
            label="Barcode"
            options={barcodeOptions}
          />
        </div>
        <div className={styles.button}>
          <Button type="primary" content="Baixar Tabela" icon={download} />
        </div>
      </div>
      <div>
        <AdvertisingBox />
      </div>
    </div>
  );
}
