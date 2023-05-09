/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-24 10:04:08
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-09 09:51:51
 * @FilePath: /official_website/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.module.less'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
