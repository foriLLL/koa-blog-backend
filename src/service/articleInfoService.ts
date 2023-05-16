import fs from 'fs'
import ArticleInfo from '@/types/ArticleInfo'
import { readFile } from '@/utils/file'
import { blogAddr } from '@/config'
import path from 'path'
import matter from 'gray-matter'

const getAllMarkdowns = (): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(blogAddr, (err, files) => {
      if (err) {
        reject(err)
      }
      const markdowns: string[] = files
        .filter(f => f.endsWith('.md'))
        .map(f => path.join(blogAddr, f))
      resolve(markdowns)
    })
  })
}

// todo: 读取所有文件，获取front matter，提取data并返回
const getAllArticleInfo: () => Promise<Array<ArticleInfo>> = async () => {
  try {
    const files = await getAllMarkdowns()

    // 读取并解析所有文件的front matter
    const dataPromises = files.map(async file => {
      const fileContent = await readFile(file)
      const { data } = matter(fileContent)
      return data
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
