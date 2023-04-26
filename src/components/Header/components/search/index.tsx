/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-25 11:41:42
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-04-25 14:30:16
 * @FilePath: /official_website/src/components/Header/components/search/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Modal, Input } from "antd";
import { Iconfont } from "@/common/icons";
import './index.module.less'

interface SearchProps {
    handleOk: () => void;
    handleCancel: () => void;
    isModalOpen: boolean;
    onSearch: (value: any) => void;
}

const AllSearch: React.FC<SearchProps> = ({ handleOk, handleCancel, isModalOpen, onSearch }) => {

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

            <div className="search_article">
                <div className='article_title'>热门搜索</div>
            </div>
        </Modal>
    )
}

export default AllSearch