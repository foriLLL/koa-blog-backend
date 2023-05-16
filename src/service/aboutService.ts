import fs from 'fs'
import { aboutAddr } from '@/config'

const getAboutString: () => Promise<string> = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile(aboutAddr, (err, data) => {
      if (err) reject(err)
      resolve(data.toString())
    })
  })
}

export { getAboutString }
