import React from 'react'
import s from './TableExtraServices.module.css'
import type { IPriceContent } from '../../Price/Price.content'
import type { IGeneralContent, TLang } from '../../../data/Interfaces/IGeneral'

type TTitleCell = {
    tableName: string,
    servName: string,
    cost: string,
    time: string,
    includes: string
}

const TABLE_HEADING: IGeneralContent<TTitleCell> = {
    ru: {
        tableName: 'Дополнительные услуги',
        servName: 'Услуга',
        cost: 'Стоимость руб.',
        time: 'Время выполнения',
        includes: 'Включает'
    },
    en:
    {
        tableName: 'Additional services',
        servName: 'Sevrice',
        cost: 'Cost (ruble)',
        time: 'Lead time',
        includes: 'Includes'
    }
}

export const TabelExtraServices: React.FC<{ listEstra: IPriceContent[], lang: TLang }> = ({ listEstra, lang }) => {
    const headingTable = TABLE_HEADING[lang]
    return (
        <div className={s.table_container}>
            <table className={s.table_wrapper}>
                <thead>
                    <tr>
                        <th className={s.table_header} colSpan={4}>{headingTable.tableName}</th>
                    </tr>
                    <tr>
                        <th>{headingTable.servName}</th>
                        <th>{headingTable.cost}</th>
                        <th>{headingTable.time}</th>
                        <th>{headingTable.includes}</th>
                    </tr>
                </thead>
                <tbody className={s.table_body}>
                    {listEstra.map((service, index) => (
                        <tr key={index}>
                            <td>{service.name}</td>
                            <td>от {service.priceMin}</td>
                            <td>{service.time}</td>
                            <td>
                                <ul>
                                    {service.include.map((item, idx) => (
                                        <li key={`${index}-${idx}`}>{item}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
