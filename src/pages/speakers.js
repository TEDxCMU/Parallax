import { useState, useEffect } from "react";
import { getSpeakers } from "utils/content";
import SpeakerCard from "components/SpeakerCard";

import styles from "./speakers.module.css";
import { Layout } from "components/layouts";

function Speakers() {
  const [data, setData] = useState([
    {
      "name": "Moyo Ifafore",
      "title": "BFA Acting major at Carnegie Mellon",
      "image":{
        "url": "/imgs/MI.jpg"
      },
      "description": "Moyo Ifafore (she/her) is a an actor and writer from DC and NY. A proud Nigerian American, Moyo uses her heritage as a source of inspiration for her written works, hoping to bring forth the many colors of the diaspora to the stage. She is currently attending Carnegie Mellon University for Acting, and is an American Theatre Wing University Scholarship Recipient.",
    },
    {
      "name": "Yuvanshu Agarwal",
      "title": "Carnegie Mellon Undergrad IS + AI",
      "image":{
        "url": "/imgs/YA.jpg"
      },
      "description": "Yuvanshu Agarwal, known as Yuvi to friends and family, is a nationally ranked chess player with nearly 15 years of competitive experience. He has represented the Carnegie Mellon Chess Team in collegiate tournaments and enjoys teaching chess to children at his local library in his free time. Beyond chess, Yuvi is passionate about salsa dancing, riding motorcycles with friends, and improving his bouldering skills.",
    },
    {
      "name": "Saurin Nanavati",
      "title": "PHD candidate - Transition Design CMU",
      "image":{
        "url": "/imgs/SN.jpeg"
      },
      "description": "Saurin Nanavati has dedicated over 20 years to advancing sustainability in the global coffee sector, working alongside coffee cooperatives that steward some of the world’s most vital and biodiverse landscapes. His work focuses on increasing the agency of small-scale farming families through appropriate technologies, strategic partnerships, and direct access to funding and markets. Now pursuing a doctorate in Transition Design at Carnegie Mellon University, Saurin’s research explores how universities can act as catalysts for global change by connecting students, faculty, and coffee-growing communities to cultivate the next generation of sustainability leaders. His systems-driven approach integrates sustainable education, pluriversal design, and myth-making to reimagine the future of coffee.",
    },
    {
      "name": "Anna Sene",
      "title": "First Year Student/Heinz College Master of Public Policy and Management- Data Analytics Track",
      "image":{
        "url": "/imgs/AS.JPG"
      },
      "description": "Anna Diagne Sène is an international student from Dakar, Senegal. Her diverse educational experiences across Norway, Jordan, and the U.S. have shaped her commitment to bringing people together and advocating for peace. Grounded in her Islamic faith, Anna’s passion for unity and understanding transcends borders and cultures. Throughout her life, scholarships have enabled Anna to pursue the highest levels of education. She is determined to use this privilege to make quality learning more accessible to all. Anna loves learning languages, meeting new people, and sharing stories about her home country, Senegal. When she is not working towards her peacebuilding career, you will likely find Anna imagining an alternate future as a sports commentator for the Olympics.",
    },
    {
      "name": "Danny Bracken",
      "title": "Director of Exhibitions, Mattress Factory",
      "image":{
        "url": "/imgs/DB.jpg"
      },
      "description": "Danny Bracken is an artist, musician, and creative producer, currently working as Director of Exhibitions at the Mattress Factory, an artist-founded and artist-centered museum, international residency program and renowned producer of art in Pittsburgh, US. He has performed extensively throughout the world, composed music for Sundance Film Festival projects, and exhibited throughout Europe and the US. Recently, his work has shifted into the curatorial field, with a focus on site-specific installation, multidisciplinary practices, and artistic exchange.",
    }
  ]);

  return (
    <div className={styles.page}>
      <h2 className={styles.pageName}>[Speakers]</h2>
      <h3 className={styles.fluff}>+  +  +</h3>
      <div className={styles.grid}>
        {
          data.map((item, id) => <SpeakerCard key={id} speaker={item} />)
        }
      </div>
    </div>
  );
}

export default Speakers;
