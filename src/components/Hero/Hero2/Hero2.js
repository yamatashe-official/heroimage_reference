import ScrollIndicator from "../../ScrollIndicator/ScrollIndicator";
import style from "./Hero2.module.css";

export default function Hero2() {
  return (
    <div className={style.overall}>
      <h1 className={style.title}>COMPANY NAME</h1>
      <ScrollIndicator />
    </div>
  );
}
