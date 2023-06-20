import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import Article from '@/types/Article'
import { getArticle } from '@/service/articleService'

const router = new Router()

router.get('/:cateName/:title', async ctx => {
  const { cateName, title } = ctx.params

  const article: Article | undefined = await getArticle(cateName, title)
  if (article !== undefined) {
    const res: ResBody<Article> = {
      ifSuccessful: true,
      data: article,
    }
    ctx.body = res
  } else {
    ctx.status = 404
    ctx.body = '文章不存在'
  }
})

export default router
