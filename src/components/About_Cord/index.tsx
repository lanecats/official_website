/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-26 16:43:02
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-05 10:15:40
 * @FilePath: /official_website/src/components/About_Cord/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import aboutStyle from './index.module.less';
import { Popover } from 'antd';
import portrait from '@/assets/image/wallhaven-l8wm6l.jpg'
import { Iconfont } from '@/common/icons'
import qqImage from '@/assets/image/qq.png'
import weiXin from '@/assets/image/Wechat.png'
import { useMemo, useState } from 'react'


const AboutCord: React.FC = () => {

    const content = (
        <img width={100} height={100} src={qqImage} />
    );

    const wxContent = (
        <img width={100} height={100} src={weiXin} />
    );

    const [showArrow, setShowArrow] = useState(true);
    const [arrowAtCenter, setArrowAtCenter] = useState(false);

    const mergedArrow = useMemo(() => {
        if (arrowAtCenter) return { pointAtCenter: true };
        return showArrow;
    }, [showArrow, arrowAtCenter]);


    return (
        <div className={aboutStyle.about_cord}>
            <div className={aboutStyle.cord_image}>
                <img
                    src={portrait}
                />
            </div>
            <div className={aboutStyle.title}>L<span>eacats</span></div>
            <div className={aboutStyle.icons}>
                <Popover placement="top" content={content} arrow={mergedArrow}>
                    <Iconfont type="icon-QQ" />
                </Popover>
                <Popover placement="top" content={wxContent} arrow={mergedArrow}>
                    <Iconfont type="icon-weixin" />
                </Popover>
                <a href="https://github.com/lanecats/official_website" target="_blank">
                    <Iconfont type="icon-GitHub" />
                </a>
            </div>
        </div>
    )
}

export default AboutCord;