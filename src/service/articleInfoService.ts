import ArticleInfo from '@/types/ArticleInfo'
import { getAllMarkdowns, readFile } from '@/utils/file'
import { blogAddr } from '@/config'
import path from 'path'
import matter from 'gray-matter'

// todo: 读取所有文件，获取front matter，提取data并返回
const getAllArticleInfo: (
  subdir: string,
) => Promise<Array<ArticleInfo>> = async (subdir: string) => {
  try {
    const files = await getAllMarkdowns(path.join(blogAddr, subdir))

    // 读取并解析所有文件的front matter
    const dataPromises = files.map(async file => {
      const fileContent = await readFile(file)
      const { data } = matter(fileContent)
      const title = path.basename(file).replace(/\.md$/, '')

      // 创建一个新的ArticleInfo对象
      const articleInfo: ArticleInfo = {
        title,
        cateName: path.basename(path.dirname(file)),
        time: data.time || '未知',
        heroImage: data.heroImage || '',
        description: data.description || '暂无介绍',
      }

      return articleInfo
    })

    // 等待所有的front matter数据都被解析并返回
    const allArticleInfos = await Promise.all(dataPromises)
    return allArticleInfos
  } catch (err) {
    console.error(err)
    return []
  }
}

export { getAllArticleInfo }
