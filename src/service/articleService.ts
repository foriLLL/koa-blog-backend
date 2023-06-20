import Article from '@/types/Article'
import path from 'path'
import fs from 'fs'
import { blogAddr } from '@/config'
import { readFile } from '@/utils/file'
import matter from 'gray-matter'

const getArticle: (
  cateName: string,
  title: string,
) => Promise<Article | undefined> = async (cateName, title) => {
  const articlePath = path.join(blogAddr, cateName, title + '.md')
  console.log(articlePath)
  if (fs.existsSync(articlePath)) {
    const fileContent = (await readFile(articlePath)).toString()
    const { content, data } = matter(fileContent)

    const article: Article = {
      title,
      cateName,
      content,
      time: data.time,
      heroImage: data.heroImage,
      description: data.description,
    }
    return article
  }
}

export { getArticle }
