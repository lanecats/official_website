import React from "react";
import recentStyles from './index.module.less'
import {Iconfont} from "@/common/icons";

const RecentPosts: React.FC = () => {

    return (
        <div className={recentStyles.recent_posts}>
            <div className={recentStyles.title}>
                <Iconfont type='icon-huo'/>
                最近文章
            </div>
            <div className={recentStyles.recent_center}>
                <div className={recentStyles.recent_item}>
                    <span className={recentStyles.recent_text}>Nginx Access Log日志统计分析常用命令</span>
                    <span className={recentStyles.recent_icon}><Iconfont type='icon-lianjie'/></span>
                </div>
                <div className={recentStyles.recent_item}>
                    <span className={recentStyles.recent_text}>Nginx Access Log日志统计分析常用命令1221</span>
                    <span className={recentStyles.recent_icon}><Iconfont type='icon-lianjie'/></span>
                </div>
                <div className={recentStyles.recent_item}>
                    <span className={recentStyles.recent_text}> Nginx Access Log日志</span>
                    <span className={recentStyles.recent_icon}><Iconfont type='icon-lianjie'/></span>
                </div>
            </div>
        </div>
    )
}

export default RecentPosts;