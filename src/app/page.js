'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import { CiClock1 } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa6";
import PulseDott from "@/component/pulseDott/PulseDott";
import download from '../../public/download.png'
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.scss'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper/modules';


export default function Home() {

  // to git data
  const [post, setPost] = useState([])
  const [error, setError] = useState(null)

  async function getAllPosts() {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setPost(data.products.slice(0, 8))
    } catch (error) {
      setError(error.message)
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);

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

        </div>

        <div className={styles.tapBody}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            grid={{
              rows: 2,
            }}
            modules={[Grid, Pagination, Navigation]}
            navigation={true} pagination={true}

            className="mySwiper"
          >

            {error == null ? (post.map((item) => {
              return (
                <SwiperSlide >
                  <Link href={`/projects/${item.id}`}
                    className={styles.Card}>
                    <div className='imgCard'>
                      <Image
                        src={item.thumbnail}
                        alt="Picture of the author"
                        fill
                        className='img'
                      />
                    </div>
                    <div className="bodyCard">
                      <div className="brands">
                        <h5>brand : {item.brand}  </h5>
                        <h5>price : {item.price} $ </h5>
                      </div>

                      <div className="boxArrow">
                      <div className="arrowBtn">
                        <div className="one">
                          <FaArrowUp className="arrowBtnIcon" />
                        </div>
                        <div className="two">
                          <FaArrowUp className="arrowBtnIcon"/>
                        </div>
                      </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })) : (<h1>Request failed with status code 404 </h1>)}

          </Swiper>
        </div>
      </div>
    </main>
  );
}
