import ArticleInfo from '@/types/ArticleInfo'
import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import { getAllArticleInfo } from '@/service/articleInfoService'

const router = new Router()

router.get('/', async ctx => {
  const res: ResBody<Array<ArticleInfo>> = {
    ifSuccessful: true,
    data: await getAllArticleInfo(''),
  }
  ctx.body = res
})

router.get('/:cateName', async ctx => {
  const { cateName } = ctx.params
  const res: ResBody<Array<ArticleInfo>> = {
    ifSuccessful: true,
    data: await getAllArticleInfo(cateName),
  }
  ctx.body = res
})

export default router
