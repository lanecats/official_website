/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:56:50
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-07-05 09:34:08
 * @FilePath: /official_website/src/pages/MessageBoard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import boardStyle from './index.module.less'
import React from "react";
import Renderer from "@/components/Renderer";

const Index: React.FC = () => {
    const codeBlock = `function Index() {
        return (
            <div>   
                123213
            </div>
        )
    }`
    return (
        <div className={boardStyle.board}>
            <Renderer codeBlock={codeBlock} />
        </div>
    )
}

export default Index