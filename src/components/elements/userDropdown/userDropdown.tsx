import bell from "../../../assets/icons/bell.svg";
import chevronDown from "../../../assets/icons/chevron-down.svg";
import styles from "./userDropdown.module.scss";

interface Props {
  logo: string;
  company: string;
}

export default function UserDropdown(props: Props) {
  return (
    <div className={styles.userDropdownContainer}>
      <img
        src={bell}
        alt="Imagem de um sino para notificações."
        className={styles.bellIcon}
      />
      <div className={styles.logoCompanyArrow}>
        <img
          src={props.logo}
          alt="Logo da empresa"
          className={styles.companyLogo}
        />
        <span className={styles.companyName}>{props.company}</span>
        <img src={chevronDown} alt="Imagem de uma seta apontando para baixo." />
      </div>
    </div>
  );
}
