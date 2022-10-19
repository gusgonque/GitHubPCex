import { useRouter } from 'next/router'
<<<<<<< HEAD
import { UserForm } from './index.js'

const Post = () => {
    const router = useRouter()
    const {username} = router.query

    //todo: card

    return <>
                <p>Post: {username}</p>
                <UserForm></UserForm>
            </>


=======
import {fetchUser} from "./api/gitApi";
import styles from "../styles/Home.module.css"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Head from "next/head";

export default function Card() {
    const router = useRouter()
    const {username} = router.query

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!username) return;
        setLoading(true);
        fetchUser(username).then((data) => {
            setData(data);
            setLoading(false);
        });
    }, [router]);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    if (data.message === "Not Found") return <p>User not found</p>;


    return (
        <div className={styles.container}>
            <Head>
                <title>Github Profile Card</title>
                <meta name="description" content="Traact Internship Project" />
                <link rel="icon" href="/home/labiot/WebstormProjects/GitHubPCex/public/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <img src={data.avatar_url} width="300" className={styles.avatar} />
                <h1 className={styles.title}>
                    <Link href={data.html_url} target="_blank">
                        {data.name}
                    </Link>
                </h1>
                <h2 className={styles.description}>{data.bio}</h2>
            </main>

        </div>
    )
>>>>>>> 7689708 (commit)
}

export default Post
