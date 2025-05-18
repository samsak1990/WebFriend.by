import React, { useContext } from 'react'
import { WrapperUnderlay } from '../../components/UI/WrapperUnderlay/WrapperUnderlay'
import { WrapperContent } from '../../components/UI/WrapperContent/WrapperContent'
import { LanguageContext } from '../../data/Context/ContextLang'
import { SOCIAL_LIST } from '../../data/Socials/Socials'
import { GENERAL_CONTENT as content, type TGeneralContent } from './Genetal.content'
import styles from './General.module.css'
import Toy from '../../assets/toy.png'
import { Social } from '../../components/UI/Socials/Social'


export const General: React.FC = () => {
    const context = useContext(LanguageContext)
    if (!context) return null;
    const { lang } = context;

    const { h1, h2, span, button_portfolio }: TGeneralContent = lang === 'ru' ? content.en : content.ru

    return (
        <WrapperUnderlay>
            <WrapperContent>
                <section className={styles.general}>
                    <div className={styles.general__leftBox}>
                        <div className={styles.leftBox__socials}>
                            {SOCIAL_LIST.map((social, index) => (
                                <Social data={social} key={index} />
                            ))}
                        </div>
                        <h1 className={styles.typingAnimation}>{h1}<span className={styles.select}>{span}</span>.</h1>
                        <h2 className={styles.descriptionText}>{h2}</h2>
                        <div className={styles.buttons_group}>
                            <button className={styles.leftBox__toPortfolio}>{button_portfolio}</button>
                            <button className={styles.leftBox__toYoutube} title='YouTube'></button>
                        </div>

                    </div>
                    <div className={styles.general__rightBox}>
                        <figure>
                            <img src={Toy} alt="My photo" />
                        </figure>
                    </div>
                </section>

            </WrapperContent>
        </WrapperUnderlay>
    )
}
