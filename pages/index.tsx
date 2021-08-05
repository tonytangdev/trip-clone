import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Top Things To Do Around The World | Trip.com</title>
        <meta name="description" content="Trip.com has been collecting latest worldwide travel guides, recommending popular destinations and tourist attraction all around the world for travel enthusiasts.It can be found in these real travel guides and independent travel notes about good places to visit, favorable landmark tickets, travel lines, and hotels and food near the scenic spots." />
        <link rel="icon" href="https://www.trip.com/trip.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
