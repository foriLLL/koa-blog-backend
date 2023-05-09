import fs from 'fs'

// 使用 Promise 封装 fs.readFile
const readFile = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      resolve(data.toString())
    })
  })
}

export { readFile }
