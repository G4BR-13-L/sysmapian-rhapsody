import React from 'react'
import Header from '../../components/header/Header'
import CitiesSection from './sections/cities-section/citiesSection'
import CoverPageSection from './sections/cover-page-section/coverPageSection'
import InfoSection from './sections/info-section/infoSection'

export default function index() {
  return (
    <>
    <Header/>

    
    <main>
        <CoverPageSection/>
        <InfoSection/>
        <CitiesSection/>
    </main>
    </>
  )
}
