import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/img/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <Link href="/">
                <div className={styles.logoContainer}>
                    <Image src={logo} className={styles.image} />
                </div>
            </Link>
        </div>
    )
}
