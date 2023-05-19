/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:56:50
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-08 16:55:24
 * @FilePath: /official_website/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import homeStyle from './index.module.less'
import Cord from './components/Cord'
import React, {useEffect, useState} from 'react'
import {Iconfont} from '@/common/icons'
import AboutCord from '@/components/About_Cord'
// import Loading from "@/components/Loading ";
import Music_Player from "@/components/Music_Player";
import Recent_Posts from "@/components/Recent_Posts";

const poemText = '沾衣欲湿杏花雨，吹面不寒杨柳风。';
const Index: React.FC = () => {

    const [cordList, setCordList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const height = window.innerHeight
    const [chars, setChars] = useState<string[]>([]);
    const [isReversing, setIsReversing] = useState(false);
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isReversing) {
                setChars((prevChars) => prevChars.slice(0, -1));
                if (chars.length === 0) {
                    setIsReversing(false);
                }
            } else {
                const nextChar = poemText[chars.length];
                setChars((prevChars) => [...prevChars, nextChar]);
                if (chars.length === poemText.length) {
                    setIsBlinking(true);
                    setIsReversing(true);
                }
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [chars, isReversing]);

    useEffect(() => {
        if (isBlinking) {
            const intervalId = setInterval(() => {
                setIsBlinking(false);
            }, 500);

            return () => clearInterval(intervalId);
        }
    }, [isBlinking]);

    // 点击跳转到文章页面
    const formArticle = () => {
        console.log('formArticle')
        window.scrollTo({
            top: height,
            behavior: 'smooth'
        });
        setCordList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        // setLoading(false)
    }

    return (
        <div className={homeStyle.home}>
            <div className={homeStyle.demonstrate}>
                <div className={homeStyle.demonstrate_title}>Leancats</div>
                <div className={homeStyle.demonstrate_text}>
                    {chars.map((char, index) => (
                        <span key={index}>{char}</span>
                    ))}
                    {isBlinking ? <span className={homeStyle.flagstaff}>|</span> : <span>|</span>}
                </div>
                <div
                    className={homeStyle.demonstrate_icon}
                    onClick={formArticle}
                >
                    <Iconfont type='icon-diquxialajiantou'/>
                </div>
            </div>
            <div className={homeStyle.center}>
                <div className={homeStyle.cord_item}>
                    {
                        cordList?.map((_, index: any) => {
                            return (
                                <Cord key={index}/>
                            )
                        })
                    }
                </div>
                <div className={homeStyle.right}>
                    <AboutCord/>
                    <Music_Player/>
                    <Recent_Posts/>
                </div>
            </div>
        </div>
    )
}

export default Index