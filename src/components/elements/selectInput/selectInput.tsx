import styles from "./selectInput.module.scss";

interface Props {
  options: string[];
  onChange: (value: string) => void;
}

export default function SelectInput(props: Props) {
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
    <select className={styles.select} onChange={handleChange}>
      <option value="">Todos</option>
      {renderOption(props.options)}
    </select>
  );
}
