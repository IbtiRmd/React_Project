import styles from './Banner.module.scss'

export default function Banner({children}) {
    return (
        <section className={styles.banner}>
            {children} 
        </section>
    )
}