'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Project.module.scss'
import axios from 'axios';
import Link from 'next/link';


export default function Project() {
    const [post, setPost] = useState([])
    const [error, setError] = useState(null)

    async function getAllPosts() {
        try {
            const { data } = await axios.get("https://dummyjson.com/products");
            setPost(data.products)
        } catch (error) {
            setError(error.message)
        }
    }
    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.projects}>
                {error == null ? (post.map((item) => {
                    return (
                        <Link href={`/projects/${item.id}`}>
                            <div className={styles.card}>
                                <div>
                                    <Image
                                        src={item.thumbnail}
                                        alt="Picture of the author"
                                        width={270}
                                        height={220}
                                        className='img'
                                    />
                                </div>
                                <div className={styles.bodyCard}>
                                    <h5>brand : {item.brand}  </h5>
                                    <h5>price : {item.price} $ </h5>
                                </div>
                            </div>
                        </Link>
                    )
                })) : (<h1>Request failed with status code 404 </h1>)}
            </div>
        </div>
    )
};
