import ArticleInfo from '@/types/ArticleInfo'
import { getAllMarkdowns, readFile } from '@/utils/file'
import { blogAddr } from '@/config'
import path from 'path'
import matter from 'gray-matter'

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
        time: data.time ? data.time.toString() : '未知',
        heroImage: data.heroImage || '',
        description: data.description || '暂无介绍',
      }

      return articleInfo
    })

    // 等待所有的front matter数据都被解析并返回
    const allArticleInfos = await Promise.all(dataPromises)
    allArticleInfos.sort((a, b) => {
      if (a.time === '未知' || b.time === '未知') {
        if (a.time === '未知' && b.time === '未知') {
          return 0
        }
        return a.time === '未知' ? 1 : -1
      }
      return new Date(a.time) > new Date(b.time) ? -1 : 1
    })

    return allArticleInfos
  } catch (err) {
    console.error(err)
    return []
  }
}

export { getAllArticleInfo }
