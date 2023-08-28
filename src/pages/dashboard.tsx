import { useState } from "react";
import Content from "../components/sections/content/content";
import Header from "../components/sections/header/header";
import Sidebar from "../components/sections/sidebar/sidebar";
import styles from "./dashboard.module.scss";

export default function Dashboard() {
  const upperMenuList = [
    "Overview",
    "Perfor. de produtos e marca",
    "Comport. de compra",
    "CEO - Analytcs",
    "Costumer insight",
    "Market Share e concorrência",
    "Supply",
  ];
  const [cityValue, setCityValue] = useState("");

  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.sidebarAndContent}>
        <Sidebar cityValue={(x) => setCityValue(x)} />
        <Content itemList={upperMenuList} cityValue={cityValue} />
      </div>
    </div>
  );
}
