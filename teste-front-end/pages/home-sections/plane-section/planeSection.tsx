import React from 'react'
import Section from '../../../components/section/Section'
import styles from  './planeSection.module.scss'
import Airplane from '../../../assets/img/Airplane.png'
import Image from 'next/image'

export default function PlaneSection() {
  return (
    <Section >
        <div className={styles.backgroundContainer}>
            <div className={styles.titleTextContainer}>   
                <h1>
                5 Continentes, infinitas possibilidades.
                </h1>
                <h4>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </h4>
            </div>

            <div className={styles.imageContainer}>
                <Image src={Airplane}/>
            </div>
        </div>
    </Section>
  )
}
