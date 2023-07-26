import ScrollIndicator from "../../ScrollIndicator/ScrollIndicator";
import DotBackground from "./DynamicBackground/DynamicBackground";
import style from "./Hero3.module.css";

export default function Hero3() {
  return (
    <DotBackground>
      <div className={style.overall}>
        <h1 className={style.companyName}>COMPANY NAME</h1>
        <ScrollIndicator style={{ backgroundColor: "black", border: "none" }} />
      </div>
    </DotBackground>
  );
}
