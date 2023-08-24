import styles from "./selectInput.module.scss";

interface Props {
  options: string[];
}

export default function SelectInput(props: Props) {
  function renderOption(options: string[]) {
    return options.map((x, i) => (
      <option key={i} value={x}>
        {x}
      </option>
    ));
  }
  return (
    <select className={styles.select}>
      <option value="">Todos</option>
      {renderOption(props.options)}
    </select>
  );
}
