/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:24:40
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-04-25 14:26:56
 * @FilePath: /official_website/src/components/Header/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import style from './index.module.less';
import { useNavigate } from 'react-router';
import { Iconfont } from '@/common/icons';
import { useState } from 'react';
import Search from './components/search';

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [searchType, setSearchType] = useState(false);

    const handleOk = () => {
        setSearchType(false);
    };

    const handleCancel = () => {
        setSearchType(false);
    };

    // 搜索
    const onSearch = (value: any) => {
        console.log(value);
    }


    return (
        <div className={style.header}>
            <div
                className={style.logo}
                onClick={() => navigate('/')}
            >
                <span>L</span>
                eacats
            </div>
            <div className={style.nav}>
                <div
                    className={style.nav_item}
                    onClick={() => navigate('/')}
                >首页</div>
                <div
                    className={style.nav_item}
                    onClick={() => navigate('/messageBoard')}
                >留言板</div>
                <div
                    className={style.nav_item}
                    onClick={() => navigate('/timeRoller')}
                >时光轴</div>
                <div
                    className={style.nav_item}
                    onClick={() => navigate('/gossip')}
                >闲言碎语</div>
                <div
                    className={style.nav_item}
                    onClick={() => navigate('/logroll')}
                >友情链接</div>
                <div
                    className={style.nav_item}
                    onClick={() => navigate('/about')}
                >关于</div>
                <div className={style.nav_item}>分类</div>
                <div
                    className={style.search}
                    onClick={() => setSearchType(!searchType)}
                >
                    <Iconfont type='icon-sousuo' />
                </div>

                {
                    searchType ?
                        <Search
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                            isModalOpen={searchType}
                            onSearch={onSearch}
                        />
                        : null
                }
            </div>
        </div>
    );
};

export default Header;
