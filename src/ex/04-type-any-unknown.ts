/**
 * unknown 和 any 很像
 * unknown 是比較安全的 any
 * ts 用太多 any 不如直接就寫 js
 */


let name1: unknown = 'hank'
name1 = 123

// 斷言 Assertions ?
// 使用 as 關鍵字來指定型別
let name2: unknown = 'hank2'
let name3 = name2 as string

// 斷言 as 的應用
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const data = await res.json() // ts 會將 data 設定為 any 
  console.log(data)
}

getData()

// any 與 unknown