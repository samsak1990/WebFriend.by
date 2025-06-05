import React, { useState } from 'react'
import type { TLang } from '../../data/Interfaces/IGeneral'
import s from './Price.module.css'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import { PRICE_MAIN_SERVICES, PRICE_EXTRA_SERVICES } from './Price.content'
import { PRICE_HEADING as head } from './Price.content'
import { SiteCard } from '../UI/SiteCard/SiteCArd'
import { Carousel } from '../UI/Carousel/Carousel'
import { TabelExtraServices } from '../UI/TableExtraServices/TableExtraServices'

export const Price: React.FC<{ lang: TLang }> = ({ lang }) => {
    const listSites = PRICE_MAIN_SERVICES[lang]
    const listEstra = PRICE_EXTRA_SERVICES[lang]


    return (
        <>
            <ArticleTitle text={head[lang]} />
            <Carousel listData={listSites} cardWidth={320} renderCard={(item) => <SiteCard key={item.name} content={item} />} />
            <section className={s.tablelExtra}>
                <TabelExtraServices listEstra={listEstra} />
            </section>
        </>

    )
}
