// import { Link } from "react-router-dom";
import style from "./Hero1.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero1(props) {
  const init = {
    opacity: 0,
  };

  const whileInView = {
    opacity: 1,
  };

  return (
    <AnimatePresence>
      <div className={style.overall}>
        <div className={style.gridLeft}>
          <motion.h1
            className={style.title}
            initial={init}
            whileInView={whileInView}
            transition={{ delay: 0.1 }}
          >
            Header Title
          </motion.h1>
          <motion.p
            className={style.subText}
            initial={init}
            whileInView={whileInView}
            transition={{ delay: 0.15 }}
          >
            Sunt laboris labore adipisicing elit excepteur culpa aliqua pariatur
            nostrud. Adipisicing labore irure minim laborum amet ad nisi aliquip
            laborum minim laboris nisi. Consectetur voluptate sit enim cupidatat
            dolor. Tempor excepteur quis voluptate nisi Lorem proident proident
            irure aliqua.
          </motion.p>

          <motion.p
            className={style.link}
            initial={init}
            whileInView={whileInView}
            transition={{ delay: 0.2 }}
          >
            Learn More
          </motion.p>
        </div>
        <div className={style.gridRight}></div>
      </div>
    </AnimatePresence>
  );
}
