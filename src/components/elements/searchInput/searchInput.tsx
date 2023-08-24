import magnifyingGlass from "../../../assets/icons/magnifying-glass.svg";
import styles from "./searchInput.module.scss";

export default function SearchInput() {
  return (
    <div className={styles.searchInputContainer}>
      <img
        src={magnifyingGlass}
        alt="Imagem de uma lupa para pesquisa."
        className={styles.searchInputContainer}
      />
      <input
        type="text"
        placeholder="Pesquisar..."
        className={styles.searchInput}
      />
    </div>
  );
}
