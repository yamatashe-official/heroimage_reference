import style from "./Hero5.module.css";

export default function Hero5(props) {
  const contactUsSpeechBubble = () => {
    console.log("contact us speech bubble clicked");
  };

  const buttonOneHandler = () => {
    console.log("button one clicked");
  };
  const buttonTwoHandler = () => {
    console.log("button two clicked");
  };

  return (
    <div className={style.overall}>
      <div className={style.text}>
        <h1 className={style.title}>
          Hero 5<br />
          Sample title <br />
          <span className={style.titleAccent}>information</span>
        </h1>
        <p className={style.description}>
          Qui sunt exercitation aliqua eu consequat est excepteur laborum
          eiusmod ullamco do ut. Voluptate deserunt in elit occaecat excepteurs
          in mollit nisi aliqua. Sit est non consequat consectetur ad ut tempor
          nisi ea adipisicing dolore ut pariatur non. Do pariatur eiusmod elit
          officia elit anim occaecat quis in ullamco.
        </p>
      </div>
      <div className={style.buttons}>
        <div className={style.button1} onClick={buttonOneHandler}>
          Button 1
        </div>
        <div className={style.button2} onClick={buttonTwoHandler}>
          Button 2
        </div>
      </div>
      <span className={style.imageContainer} onClick={contactUsSpeechBubble}>
        <img className={style.contactBubble} src={"/icons/comment-solid.svg"} />
      </span>
    </div>
  );
}
