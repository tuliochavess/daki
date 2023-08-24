import WeekSelect from "../weekSelect/weekSelect";
import chart from "../../../assets/deletarDepois/chart1.svg";
import styles from "./chartBox.module.scss";

interface Props {
  title: string;
}

export default function ChartBox(props: Props) {
  const weeks = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];
  return (
    <div className={styles.chartBoxContainer}>
      <div className={styles.upperRow}>
        <span className={styles.title}>{props.title}</span>
        <WeekSelect options={weeks} />
      </div>
      <hr className={styles.separator} />
      <div className={styles.chart}>
        <img src={chart} />
      </div>
    </div>
  );
}
