import download from "../../../assets/icons/download.svg";
import AdvertisingBox from "../../elements/advertisingBox/advertisingBox";
import Button from "../../elements/button/button";
import DefaultInput from "../../elements/deafultInput/defaultInput";
import styles from "./sidebar.module.scss";

interface Props {
  cityValue: (value: string) => void;
  brandValue: (value: string) => void;
  productValue: (value: string) => void;
  barCodeValue: (value: string) => void;
}

export default function Sidebar(props: Props) {
  const cityOptions = ["BH", "SP", "RJ"];
  const brandOptions = ["Sadia Premium", "Sadia"];
  const correncyOptions = ["Real", "Dolar"];
  const productOptions = ["Peito de Frango", "Qualy"];
  const barcodeOptions = ["1", "2", "3", "4", "5", "6", "7"];

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
          <DefaultInput
            type="select"
            label="Marca"
            options={brandOptions}
            onChange={(x) => {
              props.brandValue(x);
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput type="select" label="Moeda" options={correncyOptions} />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput
            type="select"
            label="Produto"
            options={productOptions}
            onChange={(x) => {
              props.productValue(x);
            }}
          />
        </div>
        <div className={styles.inputRow}>
          <DefaultInput
            type="select"
            label="Barcode"
            options={barcodeOptions}
            onChange={(x) => {
              props.barCodeValue(x);
            }}
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
