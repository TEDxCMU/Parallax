import style from "./section3.module.css";
import Section4 from "./section4";
import cn from "classnames";

function Section3() {
  return (
  <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.text}>
          <div className={style.blurbStart}>[Parallax]</div>
          <div className={style.blurbText}>The TEDx Board is incredibly excited to introduce the theme for our 2024 conference - Ignite.<br></br><br></br>Every idea has the power to not only challenge the established but to illuminate new pathways of thought. By sharing these stories, you become the key to unlocking a cascade of ideas in others. </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Section3;
