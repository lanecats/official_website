import React from "react";
import recentStyles from './index.module.less';
import {Iconfont} from "@/common/icons";

interface PostProps {
    title: string;
    url?: string;
    id: string
}

interface RecentPostsProps {
    veggies: PostProps[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({veggies}) => {

    const handleClick = (id: string) => {
        console.log(id)
    }
    return (
        <div className={recentStyles.recent_posts}>
            <div className={recentStyles.title}>
                <Iconfont type='icon-huo'/>
                最近文章
            </div>
            <div className={recentStyles.recent_center}>
                {veggies?.map(({title, id}, index) => (
                    <div key={index} className={recentStyles.recent_item} onClick={() => handleClick(id)}>
                        <span className={recentStyles.recent_text}>{title}</span>
                        <span className={recentStyles.recent_icon}><Iconfont type='icon-lianjie'/></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentPosts;
