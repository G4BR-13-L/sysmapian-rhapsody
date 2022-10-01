import React from 'react'
import Section from '../../../components/section/Section'
import styles from './travelTypes.module.scss'
import Beach from '../../../assets/icons/Beach.png'
import Classic from '../../../assets/icons/Classic.png'
import Modern from '../../../assets/icons/Modern.png'
import More from '../../../assets/icons/More.png'
import Nightlife from '../../../assets/icons/Nightlife.png'
import Image from 'next/image'


export default function TravelTypesSection() {
  return (
    <Section>
        <div className={styles.travelTypesContainer}>
            <Image src={Beach}/>
            <Image src={Classic}/>
            <Image src={Modern}/>
            <Image src={More}/>
            <Image src={Nightlife}/>
        </div>
    </Section>
  )
}
