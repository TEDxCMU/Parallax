import style from "./section3.module.css";
import Section4 from "./section4";
import cn from "classnames";

function Section3() {
  return (
  <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.text}>
          <div className={style.blurbStart}>[Parallax]</div>
          <div className={style.blurbText}>The TEDx Board is incredibly excited to introduce the theme for our 2025 conference - Parallax.<br></br><br></br> Ideas evolve when our perspectives shift and realign. Parallax is more than motion—it&rsquo;s discovery, a converging of viewpoints that reveals new possibilities. </div>
        
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Section3;
