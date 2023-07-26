import style from "./Hero4.module.css";
import Form1 from "../../Forms/Form1/Form1";

export default function Hero4() {
  return (
    <div className={style.overall}>
      <div className={style.gridLeft}>
        <h1 className={style.title}>
          Leading Text / Hook / Whatever gets the customer hooked on the main
          item
        </h1>
        <p className={style.support}>Some supporting tag line.</p>
      </div>
      <div className={style.gridRight}>
        <Form1 />
      </div>
    </div>
  );
}
