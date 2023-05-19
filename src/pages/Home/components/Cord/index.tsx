/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-26 17:01:43
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-04-27 17:10:03
 * @FilePath: /official_website/src/pages/Home/components/Cord/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import cordStyle from './index.module.less'
import bgImageUrl from '@/assets/image/headerImage.jpg'
import {Iconfont} from '@/common/icons';
import {randomBrightColor} from '@/common/randomColor'
import React from "react";

interface CordProps {
    title?: string;
    data?: string;
    time?: string;
    imageUrl?: string;
    message?: number;
    views?: number;
    tabs?: string[];
}


const Cord: React.FC<CordProps> = ({ title, data, time, imageUrl, message, views, tabs }) => {

    return (
        <div className={cordStyle.cord}>
            <div className={cordStyle.cord_top}>
                <div className={cordStyle.cord_image}>
                    <div className={cordStyle.fulminate} style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div className={cordStyle.fulminate_cover} />
                    </div>
                    <div className={cordStyle.collimate} style={{ backgroundImage: `url(${imageUrl})` }} />
                </div>
                <div className={cordStyle.cord_title}>
                    <div className={cordStyle.title_text}><span>{title}</span></div>
                    <div className={cordStyle.title_time}>
                        <div className={cordStyle.time_text}>{time}</div>
                        <div className={cordStyle.time_icon}>
                            <span className={cordStyle.information}>
                                <Iconfont type='icon-xiaoxi1' />
                                {message}
                            </span>
                            <span>
                                <Iconfont type='icon-huo' />
                                {views}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cordStyle.article}>
                {data}
            </div>
            <div className={cordStyle.tabs}>
                {
                    tabs?.map((item: string, index: number) => {
                        return (
                            <div key={index} className={cordStyle.tab_item} >
                                <span style={{ color: randomBrightColor() }}>#</span> {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Cord.defaultProps = {
    imageUrl: bgImageUrl,
    title: 'Far far away, behind the word mountains',
    time: '2021-04-27 10:38:13',
    message: 10,
    views: 20,
    data: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden',
    tabs: ['TypeScript', 'React']
}

export default Cord