/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-25 11:41:42
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-04-26 16:58:30
 * @FilePath: /official_website/src/components/Header/components/search/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {Input, Modal} from "antd";
import {Iconfont} from "@/common/icons";
import './index.module.less'
import searchStyle from './index.module.less';
import React, {useState} from 'react'

interface SearchProps {
    handleOk?: () => void;
    handleCancel?: () => void;
    isModalOpen?: boolean;
    onSearch?: (value: any) => void;
}

const AllSearch: React.FC<SearchProps> = ({ handleOk, handleCancel, isModalOpen, onSearch }) => {

    const [searchValue, setSearchValue] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

    const titleClick = (val: number) => {
        console.log('点击了标题', val);
        setSearchValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    }

    return (
        <Modal
            title="搜索文章"
            open={isModalOpen}
            onOk={handleOk}
            footer={false}
            destroyOnClose
            onCancel={handleCancel}
        >
            <Input.Search
                allowClear
                placeholder="请输入文章标题(输入完成后按回车键搜索))"
                onSearch={onSearch}
                prefix={<Iconfont type='icon-sousuo-copy' />}
            />

            {
                searchValue?.length > 0 ?
                    <div className={searchStyle.search_article}>
                        {
                            searchValue.map((item: number) => {
                                return (
                                    <div onClick={()=>titleClick(item)} className={searchStyle.article_title}>热门搜索</div>
                                )
                            })
                        }
                    </div>
                    : null
            }
        </Modal>
    )
}

export default AllSearch