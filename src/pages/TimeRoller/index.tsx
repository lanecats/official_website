/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:56:50
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-07-05 10:10:57
 * @FilePath: /official_website/src/pages/Home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import homeStyle from './index.module.less'
import WithLineNumbers from '@/components/Renderer'

const Index: React.FC = () => {
    return (
        <div className={homeStyle.timeRoller}>
            TimeRoller
            <WithLineNumbers codeBlock={''} />
        </div>
    )
}

export default Index