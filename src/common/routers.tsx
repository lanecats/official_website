/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 11:06:33
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-04-24 18:28:39
 * @FilePath: /official_website/src/common/routers.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Home from '@/pages/Home'
import About from '@/pages/About'
import MessageBoard from '@/pages/MessageBoard'
import TimeRoller from '@/pages/TimeRoller'
import Gossip from '@/pages/Gossip'
import Logroll from '@/pages/Logroll'

export const routers = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/messageBoard',
        element: <MessageBoard />,
    },
    {
        path: '/timeRoller',
        element: <TimeRoller />,
    },
    {
        path: '/gossip',
        element: <Gossip />,
    },
    {
        path: '/logroll',
        element: <Logroll />,
    },
]