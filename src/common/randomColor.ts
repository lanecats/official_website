/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-04-27 16:10:05
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-04-27 16:10:11
 * @FilePath: /official_website/src/common/color.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function getBrightness(color: string): number {
    const hex = color.substring(1);
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
}

export function randomBrightColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    let brightness = 0;
    while (brightness < 128) {
        color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        brightness = getBrightness(color);
    }
    return color;
}
