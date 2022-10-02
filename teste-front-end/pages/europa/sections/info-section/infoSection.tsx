import React from 'react'
import Section from '../../../../components/section/Section'
import styles from './infoSection.module.scss'

export default function InfoSection() {
    return (
        <Section>
            <div className={styles.infoSectionContainer}>
                <div className={styles.descriptionContainer}>
                    <p>
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                    </p>
                </div>
                <div className={styles.numberContainer}>
                    <ul>
                        <li>
                            <span>
                                50
                            </span>
                            <p>Países</p>
                        </li>
                        <li>
                            <span>
                                50
                            </span>
                            <p>Países</p>
                        </li>
                        <li>
                            <span>
                                50
                            </span>
                            <p>Países</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}
