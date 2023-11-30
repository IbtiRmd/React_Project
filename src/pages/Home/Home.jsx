import styles from './Home.module.scss'
import Banner from '../../components/Banner/Banner'
import imageBanner from '../../assets/banner4.jpg'
import Card from '../../components/Card/Card'


export default function Home() {
    return (
        <section className={styles.home}>
            <Banner>
                <img src={imageBanner} alt='banner' className={styles.img} />
                <h1 className={styles.h1}>Chez vous, partout et ailleurs</h1>
            </Banner>
            <Card />
        </section>
    )
}