import DateInput from "../dateInput/dateInput";
import SelectInput from "../selectInput/selectInput";
import styles from "./defaultInput.module.scss";

interface Props {
  type: "date" | "select";
  label: string;
  options?: string[];
  onChange?: (value: string) => void;
}

export default function DefaultInput(props: Props) {
  function renderInput(input: string, options?: string[]) {
    if (input === "date") return <DateInput />;
    if (input === "select")
      return <SelectInput options={options!} onChange={props.onChange!} />;
  }

  return (
    <div className={styles.defaultInputContainer}>
      <label className={styles.label}>{props.label}</label>
      {renderInput(props.type, props.options)}
    </div>
  );
}
