import { metaAddr } from '@/config'
import { readFile } from '@/utils/file'

const getNickname: () => Promise<string> = async () => {
  try {
    const fileContent = (await readFile(metaAddr)).toString()
    const meta = JSON.parse(fileContent)
    return meta.nickname
  } catch (err) {
    console.error(err)
    return ''
  }
}

export { getNickname }
