import style from "./section1.module.css";

function Section1() {

  return (
    <>
      <div className={style.containerTop}>
        <p className={style.callout}>[TEDxCMU 2025 PRESENTS]</p>
        <h1 className={style.name}>Parallax</h1>
        <p className={style.text}>[Shifting Perspectives]</p>
      </div>
      <div className={style.middle}>
        <div className={style.left}>
          <p className={style.callout}>[FRIDAY, March 21, 5:15-8:30PM]</p>
        </div>
        <div className={style.right}>
          <p className={style.callout}>[MCCONOMY AUDITORIUM]</p>
        </div>
      </div>
      <div className={style.containerBottom}>
        <div className={style.rotatedBackground}></div>
        <div className={style.textContainer}>
          <p style={{width:"45%"}} className={style.text}>The TEDx Board is incredibly excited to introduce Parallax as the theme for of this year&rsquo;s conference.</p>
        </div>
      </div>
    </>
  );
}

export default Section1;
