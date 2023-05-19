import React from 'react';
import musicStyle from './index.module.less';
import {Iconfont} from "@/common/icons.ts";

type Props = {
    autoplay?: boolean;
    loop?: boolean;
    volume?: number;
};
const AudioPlayer: React.FC<Props> = () => {
    return (
        <div className={musicStyle.music_player}>
            <div className={musicStyle.music_title}>
                <Iconfont type="icon-gonggao" />
                公告消息</div>
            <div className={musicStyle.notice}>春风得意马蹄疾，一日看尽长安花。</div>
        </div>
    );
};
export default AudioPlayer;