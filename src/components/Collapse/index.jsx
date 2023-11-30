import { useRef, useState } from 'react'
import vectorOpen from '../../assets/Vector_open.png'
import vectorClosed from '../../assets/Vector_closed.png'
import styles from './Collapse.module.css'

export default function Collapse({titre, description}) {
    const [vector, setVector] = useState(false);
    const buttonRef = useRef(null);
    

    function handleVectorClick(){

        setVector(!vector);
        buttonRef.current.blur();
    }

    return (
        <div className={styles.collapse}>
            <div tabIndex={0} className={styles.banniereCollapse} onClick={() => handleVectorClick()} ref={buttonRef}>
                {titre}
                {vector ? <img src={vectorClosed} alt='icone fleche fermee' className={styles.img}/> : <img src={vectorOpen} alt='icone fleche ouverte' className={styles.img} />}
            </div>
            {vector && (<div>{description}</div>)}
        </div>
    )
}

