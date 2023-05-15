import React from "react";
import loadStyle from "./index.module.less";

interface LoadingProps {
    loading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({loading}) => {
    return (
        <>
            loading ?
            <div className={loadStyle.loading} style={{display: loading ? 'block' : ''}}>
                <span className={loadStyle.back}></span>
                <span className={loadStyle.back}></span>
            </div> : null
        </>
    )
}

Loading.defaultProps = {
    loading: true
}

export default Loading