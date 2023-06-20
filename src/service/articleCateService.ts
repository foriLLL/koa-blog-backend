import { blogAddr } from '@/config'
import ArticleCate from '@/types/ArticleCate'
import { readdir } from '@/utils/file'

const getAllArticleCates: () => Promise<ArticleCate[]> = async () => {
  const entries = await readdir(blogAddr, { withFileTypes: true })
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => ({
      cateName: entry.name,
    }))
}

export { getAllArticleCates }
