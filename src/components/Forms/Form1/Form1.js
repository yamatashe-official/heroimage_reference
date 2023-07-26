import style from "./Form1.module.css";

export default function Form1(props) {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className={style.formHolder}>
      <h3 className={style.title}>Sign up now</h3>
      <div className={style.selectors}>
        <div className={style.radioHolder}>
          <input
            type="radio"
            name="itemSelection"
            value="itemSelection1"
            id="item1"
          />
          <label className={style.radioLabel} htmlFor="item1">
            Item 1
          </label>
        </div>
        <div className={style.radioHolder}>
          <input
            type="radio"
            name="itemSelection"
            value="itemSelection2"
            id="item2"
          />
          <label className={style.radioLabel} htmlFor="item2">
            Item 2
          </label>
        </div>
      </div>
      <div className={style.textInputs}>
        <div className={style.name}>
          <input
            className={style.inputText}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            className={style.inputText}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <input
          className={style.inputText}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          className={style.inputText}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          className={style.inputText}
          type="tel"
          name="phonenum"
          placeholder="Phone number"
        />
      </div>
      <div className={style.precautions}>
        <p className={style.precaution}>
          Aliqua ex aute mollit reprehenderit ea aliquip est occaecat mollit sit
          cupidatat.
        </p>
        <p className={style.precaution}>
          Aliqua ex aute mollit reprehenderit ea aliquip est occaecat mollit sit
          cupidatat. Et ut sint et velit sint et id sunt ut ut ea nisi.
          Consectetur proident in labore anim esse ipsum aliqua sunt nostrud
          minim tempor nulla tempor. Magna enim irure excepteur exercitation
          velit id. Elit officia incididunt et aliquip nisi do reprehenderit
          commodo. Dolor cupidatat laboris fugiat aliquip deserunt laborum
          cupidatat cillum tempor in dolore ex magna. Officia pariatur enim
          exercitation officia.
        </p>
      </div>
      <input
        className={style.submit}
        type="submit"
        value="Submit"
        onClick={submitHandler}
      />
    </form>
  );
}
