import style from "./ScrollIndicator.module.css";

export default function ScrollIndicator(props) {
  return <div className={style.overall} style={props.style}></div>;
}
