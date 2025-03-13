import Link from 'next/link';
import Twitter from '../assets/twitter.svg';
import Linkedin from '../assets/linkedin.svg';
import styles from 'components/about.module.css';
import Mushroom from '../assets/2D/About-Page-Image.png';
import Image from 'next/image';

function About() {
    return (
        <>
            <main className={styles.container}>
                <h1 className={styles.header}>
                    [About]
                </h1>
                <h3 className={styles.fluff}>+  +  +</h3>
                <section className={styles.card}>
                    <div className={styles.content}>
                        <div>
                            <p className={styles.text}>
                            Ideas evolve when our perspectives shift and realign. Parallax is more than motion—it&rsquo;s discovery, a converging of viewpoints that reveals new possibilities. <br/><br/>At our 14th annual TEDxCMU conference, come join us for a night of speakers sharing their experiences and ideas. We will have 5 speakers this year, speaking on a range of topics from creating connection through coffee, to the untold stories in the media. Our board warmly welcomes you to our conference this year; we hope you can make it for a wonderful evening.
                            </p>
                        </div>
                        <div className={styles.links}>
                            <Link className={styles.button} href="https://www.tedxcmu.org">
                                TEDxCMU.ORG
                            </Link>
                            <Link className={styles.icon} href="https://twitter.com/tedxcmu">
                                <Twitter />
                            </Link>
                            <Link className={styles.icon} href="https://www.linkedin.com/company/tedxcmu">
                                <Linkedin />
                            </Link>
                        </div>
                    </div>
                    <div style={{borderRadius:"0 3rem 3rem 0", overflow:"hidden"}} className={styles.image}>
                        <Image
                            src={Mushroom.src}
                            alt="TEDxCMU Momentum Graphic"
                            styles={{objectFit: "contain"}}
                            width={0}
                            height={0}
                            sizes="50vw"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;