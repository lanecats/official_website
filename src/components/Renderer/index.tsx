// import boardStyle from './index.module.less'
import {Highlight, themes} from "prism-react-renderer"
import React from "react";

interface IndexProps {
    codeBlock: string;
}

const Index: React.FC<IndexProps> = ({codeBlock}) => {

  return (
      <>
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