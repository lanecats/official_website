/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:56:50
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-04 15:25:52
 * @FilePath: /official_website/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import homeStyle from './index.module.less'
import Cord from './components/Cord'
import { useState } from 'react'
import { Iconfont } from '@/common/icons'
import AboutCord from '@/components/About_Cord'

const Index: React.FC = () => {

    const [cordList, setCordList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const height = window.innerHeight

    // 点击跳转到文章页面
    const formArticle = () => {
        console.log('formArticle')
        window.scrollTo({
            top: height === 1013 ? 1000 : height === 1266 ? 1250 : 800,
            behavior: 'smooth'
        });
    }

    return (
        <div className={homeStyle.home}>
            <div className={homeStyle.demonstrate}>
                <div className={homeStyle.demonstrate_title}>Leacats</div>
                <div className={homeStyle.demonstrate_text}>沾衣欲湿杏花雨，吹面不寒杨柳风。</div>
                <div
                    className={homeStyle.demonstrate_icon}
                    onClick={formArticle}
                >
                    <Iconfont type='icon-diquxialajiantou' />
                </div>
            </div>
            <div className={homeStyle.center}>
                <div className={homeStyle.cord_item}>
                    {
                        cordList?.map((item: any, index: any) => {
                            return (
                                <Cord key={index} />
                            )
                        })
                    }
                </div>
                <div className={homeStyle.right}>
                    <AboutCord />
                </div>
            </div>
        </div>
    )
}

export default Index