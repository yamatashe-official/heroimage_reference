import style from "./DynamicBackground.module.css";

let viewable = [];
for (var i = 0; i < 50; i++) {
  const size = Math.random() * 20;
  const opacityRandom = Math.random() * 0.5;
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 10 + 1;
  let dot = {
    opacity: `${opacityRandom}`,
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    background: "transparent",
    border: "3px solid black",
    borderRadius: "50%",
    top: `${top}vh`,
    left: `${left}vw`,
    animationDuration: `${animationDuration}s`,
    zIndex: "1",
  };
  viewable.push(<div key={i + "cir"} className={style.dot} style={dot} />);
}

export default function DotBackground(props) {
  return (
    <div className={style.overall}>
      {viewable}
      {props.children}
    </div>
  );
}
