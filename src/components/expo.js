import { useState, useEffect } from "react";
import { getInnovators } from "utils/content";
import styles from "components/expo.module.css";
import InnovatorCard from "components/InnovatorCard";

function Expo() {
    const [data, setData] = useState(
        [
            {
              "name": "CMU Hacker Fab",
              "image": { "url": "/imgs/hacker.png" },
              "description": "The goal of the Hacker Fab is to lower the barrier to entry to chip fabrication, allowing those with little experience or limited funding to learn about the basics of device fabrication. There are other chapters of the Hacker Fab in development at UWaterloo, MIT, and more."

            },
            {
              "name": "CMU Robotics Club",
              "image": { "url": "/imgs/robo.png" },
              "description": "A student-run organization that has cultivated a friendly makerspace for robotics enthusiasts of any background, both undergraduate and graduate. The club has a number of interesting robotics team projects for students to join, as well as smaller individual projects that students can receive funding for."
            },
            {
                "name": "Howie Choset",
                "image": { "url": "/imgs/howie.png" },
                "description": "Sharing his students' ideas and robot demos with our community."
            },
            {
                "name": "CMU T&E",
                "image": { "url": "/imgs/T&E.png" },
                "description": "One of the main ethos of CMU Tech & Entrepreneurship's (CMU T&E) mission is to elevate CMU's brand of entrepreneurship by providing an infrastructure for community building (online and in-person), resources, and an opportunity to give back to your fellow Tartans. We want to make sure that students are aware of CMU T&E so they can be involved early on and connect with other alumni across the tech and entrepreneurship spectrum."
            },
            {
                "name": "TEDxCMU Innovation",
                "image": { "url": "/imgs/TEDxCMU.png" },
                "description": "The TEDxCMU Innovation team is presenting I Know A Place, an interactive map that highlights how a single location can hold countless unique stories and experiences for different people."
            },

          ]
    );

    return (
        <div className={styles.page}>
            <div>
                <div className={styles.pageName}>Innovation Expo</div>
                <h3 className={styles.fluff}>+  +  +</h3>
                <div className={styles.grid}>
                    {(
                        data?.map((item, id) => (
                            <InnovatorCard key={id} idx={id} innovator={item} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Expo;