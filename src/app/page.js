
import Image from "next/image";
import styles from "./page.module.scss";
import { CiClock1 } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa6";
import PulseDott from "@/component/pulseDott/PulseDott";
import download from '../../public/download.png'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <div className={styles.imgBox}>
          <Image src="https://wpriverthemes.com/HTML/stag/assets/imgs/hero.jpg"
            alt="hero" fill className={styles.img} />
        </div>

        <div className={styles.hero}>

          <div className={styles.headerHero}>

            <div className={`${styles.tap} ${styles.freelance}`}>
              <PulseDott />
              Avalible for freelance work
            </div>

            <div className={`${styles.tap} ${styles.clockBox}`}>
              <CiClock1 className={styles.Clock} />
              Sunday,25Fabruary,2024
            </div>

            <div className={`${styles.tap} ${styles.contact}`}>
              <div className={styles.one}>
                contact me
                <FaArrowUp className={styles.arrow} />
              </div>
              <div className={styles.two}>
                contact me
                <FaArrowUp className={styles.arrow} />
              </div>
            </div>

          </div>

          <div className={styles.bodyHero}>

            <div className={styles.inform}>
              <p>A WEB DEVELOPER</p>
              <h1>David Henderson 👋🏽</h1>
              <p>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience and industries.</p>
              <div className={styles.sign}>
                <Image src='https://wpriverthemes.com/HTML/stag/assets/imgs/signeture.svg'
                  alt="signeture" width={100} height={60} />
              </div>
            </div>
            <div className={styles.myContact}>

              <div className={styles.headerContact}>
                <div className={styles.adress}>
                  44 Baker Street,sa
                </div>
                <div className={styles.place}>
                  Usa
                </div>
                <Image src={download} alt="download" width={500} height={500} className={styles.earth} />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectContainer}>
        <div className={styles.tapHeader}>

          <div className={styles.bunner}>
            <ul>
              <li>⌘ It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
              <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>
              <li>It is a long established fact that a reader will distracted by the readable content of a page when looking an its readable ⌘</li>

            </ul>
          </div>

          <div className={styles.tap}>

            <Link href="/projects" className={styles.btnProject}>
              <div className={styles.one}>
                Project
                <FaArrowUp className={styles.arrow} />
              </div>
              <div className={styles.two}>
                Project
                <FaArrowUp className={styles.arrow} />
              </div>
            </Link>

            <div className={styles.arrows}>
              <div className={styles.leftArrow}>
                <MdOutlineKeyboardArrowLeft className={styles.iconArrow} />
              </div>
              <div className={styles.rightArrow}>
                <MdOutlineKeyboardArrowRight className={styles.iconArrow} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
