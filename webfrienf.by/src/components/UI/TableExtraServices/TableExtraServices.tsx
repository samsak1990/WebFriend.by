import React from 'react'
import s from './TableExtraServices.module.css'
import type { IPriceContent } from '../../Price/Price.content'


export const TabelExtraServices: React.FC<{ listEstra: IPriceContent[] }> = ({ listEstra }) => {
    return (
        <div className={s.table_container}>
            <table className={s.table_wrapper}>
                <thead>
                    <tr>
                        <th className={s.table_header} colSpan="4">Дополнительные услуги</th>
                    </tr>
                    <tr>
                        <th>Услуга</th>
                        <th>Стоимость руб.</th>
                        <th>Время выполнения</th>
                        <th>Включает</th>
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
