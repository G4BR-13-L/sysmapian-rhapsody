import React from 'react'
import Section from '../../../../components/section/Section';
import styles from './citiesSection.module.scss';
import Card from './components/Card';


const cidades = [
    {
        cover:'https://vemvoar.voeazul.com.br/wp-content/uploads/2018/06/Lisboa.jpg',
        country:'Portugal',
        city:'Lisboa',
        flag:'https://cdn.countryflags.com/thumbs/portugal/flag-round-250.png',
    },
    {
        cover:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tBoVYpy-2TZ6L50USR71GAHaDt%26pid%3DApi&f=1&ipt=d1a710dcd3457acb0c9c183908933256a8c90c6a937ec950b6588186c972c486&ipo=images',
        country:'França',
        city:'Paris',
        flag:'https://img1.gratispng.com/20180524/rrh/kisspng-flag-of-france-flag-of-france-french-seat-arona-fr-national-dish-5b072005a8c087.3538517615271936056912.jpg',
    },
    {
        cover:'https://londonso.com/wp-content/uploads/2015/10/london-skyline.jpg',
        country:'Inglaterra',
        city:'Londres',
        flag:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png',
    },
    {
        cover:'https://www.conexaoamsterdam.com.br/wp-content/uploads/2021/01/amsterdam-image-getty.jpg',
        country:'Holanda',
        city:'Amsterdam',
        flag:'https://cdn-icons-png.flaticon.com/512/323/323275.png',
    },
    {
        cover:'https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63244989_3xl.jpg?impolicy=Card',
        country:'Alemanha',
        city:'Berlin',
        flag:'https://cdn.countryflags.com/thumbs/germany/flag-round-250.png',
    },
    {
        cover:'http://img.emg-services.net/htmlpages/htmlpage17358/untitled-design-2021-08-19t104428.272.jpg',
        country:'Espanha',
        city:'Madrid',
        flag:'https://www.clipartmax.com/png/middle/166-1668235_big-image-spanish-flag-round-png.png',
    }

]

export default function CitiesSection() {
    return (
        <Section>
            <div className={styles.citiesContainer}>
                <div className={styles.citiesTitle}>
                    <h1>Cidades</h1>
                </div>
                <div className={styles.citiesCardGrid}>
                    {
                        cidades.map((item, key) => 
                            <Card cover={item.cover} country={item.country} city={item.city} flag={item.flag} key={key}/>
                        )
                    }
                </div>
            </div>
        </Section>
    )
}

