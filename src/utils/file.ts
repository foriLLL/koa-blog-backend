import fs from 'fs'
import path from 'path'
import util from 'util'

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)

const getAllMarkdowns = async (parentDir: string): Promise<string[]> => {
  let markdowns: string[] = []
  try {
    const entries = await readdir(parentDir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(parentDir, entry.name)
      if (entry.isDirectory()) {
        markdowns = markdowns.concat(await getAllMarkdowns(fullPath))
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        markdowns.push(fullPath)
      }
    }
    return markdowns
  } catch (err) {
    console.error(err)
    return []
  }
}

export { readdir, readFile, getAllMarkdowns }
