import React from 'react'
import Section from '../../../components/section/Section'
import styles from './chooseContinentSection.module.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import Image from 'next/image'
import Europa from '../../../assets/img/Europa.png'
import Asia from '../../../assets/img/Asia.png'
import AmericaNorte from '../../../assets/img/America do norte.png'
import AmericaSul from '../../../assets/img/America do sul.png'
import Africa from '../../../assets/img/Africa.png'






import { CCarousel, CCarouselItem, CCarouselCaption } from '@coreui/react'
import Link from 'next/link'
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
                                
                            <Link href='../../europa/'>
                                    <Image className="w-300" src={Europa} alt="slide 1" />
                            </Link>
                                    <CCarouselCaption className="d-none d-md-block">
                                        <h5>Europa</h5>
                                        <p>O continente mais antigo</p>
                                    </CCarouselCaption>
                                
                        </CCarouselItem>


                        <CCarouselItem>
                            <Image className="w-300" src={Asia} alt="slide 2" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>Asia</h5>
                            </CCarouselCaption>
                        </CCarouselItem>


                        <CCarouselItem>
                            <Image className="w-300" src={AmericaNorte} alt="slide 3" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>America do Norte</h5>
                            </CCarouselCaption>
                        </CCarouselItem>


                        <CCarouselItem>
                            <Image className="w-300" src={Africa} alt="slide 4" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>África</h5>
                            </CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Image className="w-300" src={AmericaSul} alt="slide 4" />
                            <CCarouselCaption className="d-none d-md-block">
                                <h5>América do Sul</h5>
                            </CCarouselCaption>
                        </CCarouselItem>

                    </CCarousel>
                </div>
            </div>
        </Section>
    )
}
