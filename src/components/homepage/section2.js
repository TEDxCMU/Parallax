import { useEffect, useRef } from "react";
import style from "./section2.module.css";
import { animate } from "motion";

function Section2() {

  const blurbRef = useRef(null)

  useEffect(() => {
    if (!blurbRef.current) return;

    animate(
      `.blurb`,
      { x: [-blurbRef.current.offsetWidth-50, 0] },
      {
        duration: 5,
        repeat: Infinity,
        easing: 'linear'
      }
    );
  }, [blurbRef]);

  return (
    <div className={style.container}>
      <div className={`blurb ${style.blurb}`} ref={blurbRef}>IDEAS IN MOTION <img style={{marginLeft:"8px"}} height={"56px"} width={"61px"} src="/Arrow.png"/></div>
      <div className={`blurb ${style.blurb}`}>IDEAS IN MOTION <img style={{marginLeft:"8px"}} height={"56px"} width={"61px"} src="/Arrow.png"/></div>
      <div className={`blurb ${style.blurb}`}>IDEAS IN MOTION <img style={{marginLeft:"8px"}} height={"56px"} width={"61px"} src="/Arrow.png"/></div>
      <div className={`blurb ${style.blurb}`}>IDEAS IN MOTION <img style={{marginLeft:"8px"}} height={"56px"} width={"61px"} src="/Arrow.png"/></div>
    </div>
  );
}

export default Section2;
