/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:04:08
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-05 14:04:22
 * @FilePath: /official_website/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routers } from './common/routers'
import Header from './components/Header'

function App() {

  return (

    <BrowserRouter>
      <Header />
      <div
        style={{
          margin: 'auto', width: '80%',
        }}
      >
        <Routes>
          {
            routers?.map((item: any, index: any) => {
              return (
                <Route key={index} path={item.path} element={item.element} />
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App
