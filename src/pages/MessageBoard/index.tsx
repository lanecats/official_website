/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:56:50
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-10 15:53:07
 * @FilePath: /official_website/src/pages/MessageBoard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import boardStyle from './index.module.less'
import {Highlight, themes} from "prism-react-renderer"
import React from "react";

const codeBlock = `
    function Index() {
        return (
            <div className={boardStyle.board}>
                
            </div>
        )
    }
`
const Index: React.FC = () => {
    return (
        <div className={boardStyle.board}>
            <Highlight
                theme={themes.shadesOfPurple}
                code={codeBlock}
                language="tsx"
            >
                {({style, tokens, getLineProps, getTokenProps}) => (
                    <pre style={style}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({line})}>
                                <span>{i + 1}</span>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({token})} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    )
}

export default Index