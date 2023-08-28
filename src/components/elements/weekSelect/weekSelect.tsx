import styles from "./weekSelect.module.scss";

interface Props {
  options: string[];
  onChange: (x: string) => void;
}

export default function WeekSelect(props: Props) {
  function renderOption(options: string[]) {
    return options.map((x, i) => (
      <option key={i} value={x}>
        {x}
      </option>
    ));
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    props.onChange(event.target.value);
  }

  return (
    <div className={styles.weekSelectContainer}>
      <span className={styles.showing}>Mostrando</span>
      <select className={styles.weekSelect} onChange={handleChange}>
        {renderOption(props.options)}
      </select>
    </div>
  );
}
