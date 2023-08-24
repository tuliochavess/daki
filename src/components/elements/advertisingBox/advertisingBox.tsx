import logoDaki from "../../../assets/logos/daki-logo-2.svg";
import apple from "../../../assets/icons/appleStore.svg";
import android from "../../../assets/icons/googlePlay.svg";
import styles from "./advertisingBox.module.scss";

export default function AdvertisingBox() {
  return (
    <div className={styles.advertisingBoxContainer}>
      <img src={logoDaki} alt="Logo da Daki" className={styles.logo} />
      <hr className={styles.sparator} />
      <div className={styles.donwloadBox}>
        <span className={styles.downloadTitle}>Baixe o app</span>
        <div className={styles.appleAndroid}>
          <a
            href="https://apps.apple.com/br/app/daki-mercado-em-minutos/id1542429806"
            target="_blank">
            <img
              className={styles.apple}
              src={apple}
              alt="Link para baixar o app pela Apple Store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.daki&referrer=adjust_reftag%3DcIJNjRDm7ZD15%26utm_source%3DSite_Daki"
            target="_blank">
            <img src={android} alt="Link para baixar o app pela Goggle Play" />
          </a>
        </div>
      </div>
    </div>
  );
}
