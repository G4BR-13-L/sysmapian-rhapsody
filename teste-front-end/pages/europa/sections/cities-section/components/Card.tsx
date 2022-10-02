import React from 'react'
import styles from './Card.module.scss'



interface cardProps{
    cover:string,
    country: string,
    city: string,
    flag: string,
}
export default function Card(props:cardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardCover}>
                <img src={props.cover} alt="" />
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.textInfo}>
                    <h3>
                        { props.city }
                    </h3>
                    <p>
                      { props.country }  
                    </p>
                </div>
                <div className={styles.flagContainer}>
                    <img src={props.flag} alt="" />
                </div>
            </div>
        </div>
    )
}