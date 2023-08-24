import daki from "../../../assets/logos/daki-logo-1.svg";
import sadia from "../../../assets/logos/sadia.svg";
import SearchInput from "../../elements/searchInput/searchInput";
import UserDropdown from "../../elements/userDropdown/userDropdown";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={daki} alt="Logo daki" className={styles.dakiLogo} />
      <div className={styles.noLogo}>
        <SearchInput />
        <UserDropdown logo={sadia} company="Grupo Sadia" />
      </div>
    </div>
  );
}
