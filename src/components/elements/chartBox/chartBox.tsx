import WeekSelect from "../weekSelect/weekSelect";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import styles from "./chartBox.module.scss";

interface ChartData {
  dia: string | number;
  total: number;
}

interface Props {
  title: string;
  data: ChartData[];
  chartColor: string;
  label?: string;
  onChange: (x: string) => void;
}

export default function ChartBox(props: Props) {
  const weeks = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"];

  return (
    <div className={styles.chartBoxContainer}>
      <div className={styles.upperRow}>
        <span className={styles.title}>{props.title}</span>
        <WeekSelect options={weeks} onChange={props.onChange} />
      </div>
      <hr className={styles.separator} />
      <div className={styles.chart}>
        <BarChart
          width={420}
          height={200}
          data={props.data}
          margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="dia" />
          <YAxis
            label={{
              value: props.label,
              angle: -90,
              position: "left",
              offset: -4,
            }}
          />
          <Tooltip />
          <Bar
            dataKey="total"
            fill={props.chartColor}
            barSize={25}
            radius={4}
          />
        </BarChart>
      </div>
    </div>
  );
}
