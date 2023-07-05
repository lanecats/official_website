/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-05-09 10:50:58
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-07-05 10:11:20
 * @FilePath: /official_website/src/components/Renderer/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import boardStyle from './index.module.less'
import { Highlight, themes } from "prism-react-renderer"
import React from "react";

interface IndexProps {
    codeBlock: string;
}

const Index: React.FC<IndexProps> = ({ codeBlock }) => {

    return (
        <>
            <Highlight
                theme={themes.shadesOfPurple}
                code={codeBlock}
                language="tsx"
            >
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre style={style}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                <span>{i + 1}</span>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </>
    );
}

Index.defaultProps = {
    codeBlock: `function Index() {
        return (
            <div>
                123213
            </div>
        )
    }`
}

export default Index