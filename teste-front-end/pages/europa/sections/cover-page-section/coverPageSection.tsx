import React from 'react'
import Section from '../../../../components/section/Section'
import styles from '../cover-page-section/coverPageSection.module.scss'
import London from '../../../../assets/img/londres.png'
import Image from 'next/image'

export default function CoverPageSection() {
    return (
        <Section>
            <div className={styles.coverContainer}>

                <div className={styles.imageContainer}>
                    <img src={London.src} className={styles.image} />
                </div>
                <div className={styles.captionContainer}>
                    <h2>
                        Europa
                    </h2>
                </div>
            </div>
        </Section>
    )
}
