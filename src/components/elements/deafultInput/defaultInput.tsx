import DateInput from "../dateInput/dateInput";
import SelectInput from "../selectInput/selectInput";
import styles from "./defaultInput.module.scss";

interface Props {
  type: "date" | "select";
  label: string;
  options?: string[];
}

export default function DefaultInput(props: Props) {
  function renderInput(input: string, options?: string[]) {
    if (input === "date") return <DateInput />;
    if (input === "select") return <SelectInput options={options!} />;
  }

  return (
    <div className={styles.defaultInputContainer}>
      <label htmlFor="" className={styles.label}>
        {props.label}
      </label>
      {renderInput(props.type, props.options)}
    </div>
  );
}
