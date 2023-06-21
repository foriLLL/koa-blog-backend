import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import Article from '@/types/Article'
import { getArticle } from '@/service/articleService'

const router = new Router()

router.get('/:cateName/:title', async ctx => {
  const { cateName, title } = ctx.params

  const article: Article | undefined = await getArticle(
    decodeURIComponent(cateName),
    decodeURIComponent(title),
  )
  if (article !== undefined) {
    const res: ResBody<Article> = {
      ifSuccessful: true,
      data: article,
    }
    ctx.body = res
  } else {
    const res: ResBody<undefined> = {
      ifSuccessful: false,
      data: undefined,
      message: '文章不存在',
    }
    ctx.body = res
  }
})

export default router
