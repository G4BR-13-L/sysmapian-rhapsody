import React from 'react'
import Section from '../../../components/section/Section'
import styles from './chooseContinentSection.module.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import Image from 'next/image'
import Europa from '../../../assets/img/Europa.png'
import { CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/react'
export default function ChooseContinentSection() {
    return (
        <Section>
            <div className={styles.chooseContinentContainer}>

                <div className={styles.textContainer}>
                    <h2>Vamos nessa?</h2>
                    <h2>Então escolha seu continente</h2>

                </div>

                <div className={styles.carouselContainer}>
                    <CCarousel controls indicators>
                        <CCarouselItem>
                            <Image className="w-300" src={Europa} alt="slide 1" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>Europa</h5>
                                <p>O continente mais antigo</p>
                            </CCarouselCaption>
                        </CCarouselItem>


                        <CCarouselItem>
                            <Image className="w-300" src={Europa} alt="slide 2" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </CCarouselCaption>
                        </CCarouselItem>


                        <CCarouselItem>
                            <Image className="w-300" src={Europa} alt="slide 3" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </CCarouselCaption>
                        </CCarouselItem>


                        <CCarouselItem>
                            <Image className="w-300" src={Europa} alt="slide 4" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                    </CCarousel>
                </div>
            </div>
        </Section>
    )
}
