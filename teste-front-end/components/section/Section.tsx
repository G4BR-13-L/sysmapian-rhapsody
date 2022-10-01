import React from 'react';
import styles from  './Section.module.scss'

interface sectionProps{
  id:string
}
export default function Section({ children }) {
  return (
    <section className={styles.section} >
        { children }
    </section>
  )
}
