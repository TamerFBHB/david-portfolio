'use client'
import styles from './SideBar.module.scss';
import Image from 'next/image';
import Clock from 'react-live-clock';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { IoHome, IoFingerPrint, IoCamera, IoLogoDribbble, IoLogoYoutube } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { HiPaperClip } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { BsFillFolderFill, BsInstagram, BsTwitterX } from "react-icons/bs";
import MenuToClose from '../MenuToClose/MenuToClose';
import { useState } from 'react';




const SideBar = () => {

    //to build the side bar
    const CustomLink = ({ href, title, icon, className }) => {
        const router = usePathname()
        return (
            <Link href={href} onClick={toggleSideBar}
                className={`${styles.link}  ${router === href ? styles.active : ''}`} >
                {icon}
                <span className={styles.title}>{title}</span>
            </Link>
        )
    }
    //to show sideBar
    const [show,setShow] =  useState(false)
    const toggleSideBar = () => {
        return setShow(prev => (prev ? false : true))
    }

    return (
        <div className={`${styles.sideBar} ${show ? styles.open : styles.close}`}>

            <div className={styles.header}>
                <div className={styles.logoContainer}>
                    <Image src='https://wpriverthemes.com/HTML/stag/assets/imgs/logo.svg' width={60} height={60} alt="logo" className={styles.logo} />
                    <h2>STAG</h2>
                </div>
                <Clock
                    format={'h:mm A'}
                    ticking={true}
                    // timezone={'EEST'}
                    className={styles.clock} />
                    <MenuToClose toggleSideBar={toggleSideBar} show={show}/>
            </div>

            <div className={styles.titleContainer}>
                <div className={styles.avatar}>
                    <Image src='/me.png' alt='' fill />
                </div>
                <div className={styles.titleName}>
                    <h2>David Henderson</h2>
                    <p>Back End Developer</p>
                    <div className={styles.city}>
                        <LuMapPin className={styles.pin} />
                        <p>San francisco</p>
                    </div>
                </div>
            </div>

            <ul className={styles.links}>
                <CustomLink href="/" title="Home" icon={<IoHome className={styles.icon} />} />
                <CustomLink href="/projects" title="Projects" icon={<GrProjects className={styles.icon} />} />
                <CustomLink href="/about" title="About" icon={<IoFingerPrint className={styles.icon} />} />
                <CustomLink href="/gallery" title="Gallery" icon={<IoCamera className={styles.icon} />} />
                <CustomLink href="/contact" title="Contact" icon={<HiPaperClip className={styles.icon} />} />
                <CustomLink href="/blog" title="Blog" icon={<BsFillFolderFill className={styles.icon} />} />
            </ul>

            <div className={styles.footer}>
                <div className={styles.social}>
                    <IoLogoDribbble className={styles.iconSocial} />
                    <BsInstagram className={styles.iconSocial} />
                    <BsTwitterX className={styles.iconSocial} />
                    <IoLogoYoutube className={styles.iconSocial} />
                </div>
                <div className={styles.year}>
                    <p>© 2024</p>
                </div>
            </div>
        </div>
    )
};
export default SideBar