import styles from "./weekSelect.module.scss";

interface Props {
  options: string[];
}

export default function WeekSelect(props: Props) {
  function renderOption(options: string[]) {
    return options.map((x, i) => (
      <option key={i} value={x}>
        {x}
      </option>
    ));
  }
  return (
    <div className={styles.weekSelectContainer}>
      <span className={styles.showing}>Mostrando</span>
      <select className={styles.weekSelect}>
        {renderOption(props.options)}
      </select>
    </div>
  );
}
