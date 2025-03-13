import { useState, useEffect } from 'react';
import { getSchedule } from 'utils/content'; 
import styles from './schedule.module.css'
import Image from 'next/image';
import cn from 'classnames';

function sortByTime(a, b) {
    console.log(new Date(b.start_time) - new Date(a.start_time));
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.start_time) - new Date(b.start_time);
}

function DetailCard(props){

    const startTime = new Date(props.startTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });

    const endTime = new Date(props.endTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });

    return(
        <div>
            <div className={styles.time}><p>{`${startTime} - ${endTime}`}</p></div>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.titleFirst}>
                        <h1 className={styles.titleText}>{props.title}</h1>
                    </div>
                </div>
            </div>
        </div> 
    )

}

function ScheduleCard(props){

    const startTime = new Date(props.startTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });

    const endTime = new Date(props.endTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });

    return(
        <div>
            <div className={styles.time}><p>{`${startTime} - ${endTime}`}</p></div>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.title}>
                        <h1 className={styles.titleText}>{props.title}</h1>
                    </div>
                    <div>
                        <div className={styles.intro}>
                            <div className={styles.introLeft}><Image width={50} height={50} style={{objectFit: "cover", borderRadius: "50px"}} src={props.personImg} alt="speaker image"/></div>
                            <div className={styles.introRight}> 
                                <div><p className={cn(styles.text, styles.personName)}>{props.personName}</p></div>
                                <div><p className={styles.text}>{props.personPos}</p></div>
                            </div>
                        </div>
                        <div className = {styles.des}>
                            <div className={styles.personDes}><p className={styles.text}>{props.personDes}</p></div>
                        </div>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <Image width={200} height={200} style={{objectFit: "cover"}} src={props.icon} alt="event icon"/>
                </div>
            </div>
        </div> 
    )
}

function Schedule() {
    const [data, setData] = useState(
            [
                {
                    "start_time": "2025-03-21T16:30:00",
                    "end_time": "2025-03-21T17:15:00",
                    "title": "CHECK IN BEGINS"
                },
                {
                    "start_time": "2025-03-21T17:15:00",
                    "end_time": "2025-03-21T17:30:00",
                    "title": "INTRODUCTIONS"
                },
                {
                  "start_time": "2025-03-12T17:30:00",
                  "end_time": "2025-03-12T17:45:00",
                  "title": "Violence, Social Media and Numbness: Restoring Community and Care in 2025",
                  "description": "This talk is a reflection on art’s ability to provoke intense emotional responses and stimulate discussions about violence and censorship. Modern media, particularly social platforms and smartphone footage, expose us to graphic content that limits our ability to connect with one another with empathy. How do both creators and audience members engage with art in a much more intentional way? How do we foster genuine human connections beyond our virtual realities?",
                  "speaker": {
                    "data": {
                      "name": "Moyo Ifafore",
                      "title": "BFA Acting major at Carnegie Mellon",
                      "image":{
                        "url": "/imgs/MI.jpg"
                      } 
                    }
                  },
                  "image": {
                    "url": "/imgs/IC1.png"
                  }
                },
                {
                    "start_time": "2025-03-12T17:45:00",
                    "end_time": "2025-03-12T18:00:00",
                    "title": "The Art of Chess Hustling | Lessons From the Streets",
                    "description": "This TEDx talk explores the unconventional brilliance of chess hustlers and the invaluable life lessons they offer. Chess hustlers thrive on confidence, adaptability, and creativity, challenging the rigid conventions of formal play. Beyond the board, these lessons apply to life, urging us to seek wisdom in unexpected places and step outside our comfort zones. This talk is a reminder that sometimes, the greatest insights come from the most unassuming teachers.",
                    "speaker": {
                      "data": {
                        "name": "Yuvanshu Agarwal",
                        "title": "Carnegie Mellon Undergrad IS + AI",
                        "image":{
                          "url": "/imgs/YA.jpg"
                        } 
                      }
                    },
                    "image": {
                      "url": "/imgs/IC2.png"
                    }
                },
                {
                    "start_time": "2025-03-12T18:00:00",
                    "end_time": "2025-03-12T18:15:00",
                    "title": "Saurin Nanavati Talk",
                    "description": "",
                    "speaker": {
                      "data": {
                        "name": "Saurin Nanavati",
                        "title": "PHD candidate - Transition Design CMU",
                        "image":{
                          "url": "/imgs/SN.jpeg"
                        } 
                      }
                    },
                    "image": {
                      "url": "/imgs/IC3.png"
                    }
                },
                {
                    "start_time": "2025-03-12T18:15:00",
                    "end_time": "2025-03-12T19:00:00",
                    "title": "INTERMISSION"
                },
                {
                    "start_time": "2025-03-12T19:00:00",
                    "end_time": "2025-03-12T19:15:00",
                    "title": "Whose Story Gets Told",
                    "description": "“Whose Story Gets Told” takes a deep dive into the world of media and how news make it to our feed. Using interviews from conflict journalists, surveys of journalism students, and findings from academic research, this talk will challenge you to think more critically about which stories are news and which are the ones that don’t get told.",
                    "speaker": {
                      "data": {
                        "name": "Anna Sene",
                        "title": "First Year Student/Heinz College Master of Public Policy and Management- Data Analytics Track",
                        "image":{
                          "url": "/imgs/AS.JPG"
                        } 
                      }
                    },
                    "image": {
                      "url": "/imgs/IC4.png"
                    }
                },
                {
                    "start_time": "2025-03-12T19:15:00",
                    "end_time": "2025-03-12T19:30:00",
                    "title": "Danny Bracken Talk",
                    "description": "",
                    "speaker": {
                      "data": {
                        "name": "Danny Bracken",
                        "title": "Director of Exhibitions, Mattress Factory",
                        "image":{
                          "url": "/imgs/DB.jpg"
                        } 
                      }
                    },
                    "image": {
                      "url": "/imgs/IC5.png"
                    }
                },
                {
                    "start_time": "2025-03-12T19:45:00",
                    "end_time": "2025-03-12T20:30:00",
                    "title": "DINNER"
                }
              ])     


    return (
        <div className={styles.page}>
            <div className={styles.cardWrap}>
                {data && data.map((card, idx) => {
                    console.log(card); 
                    if (card.description != null)
                    {
                        return <ScheduleCard 
                            key = {idx}
                            startTime = {card.start_time}
                            endTime = {card.end_time}
                            title = {card.title}
                            personDes = {card.description}
                            personImg = {card.speaker.data.image.url}
                            personName = {card.speaker.data.name}
                            personPos = {card.speaker.data.title}
                            icon = {card.image.url}
                        />
                    }
                    else
                    {
                        return <DetailCard
                            key = {idx}
                            title = {card.title}
                            startTime = {card.start_time}
                            endTime = {card.end_time}
                        />
                    }
                    }            
                )}
            </div>
        </div>
    );
}

export default Schedule;
