import ArticleInfo from '@/types/ArticleInfo'
import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import { getAllArticleInfo } from '@/service/articleInfoService'

const router = new Router()

router.get('/', async ctx => {
  const res: ResBody<Array<ArticleInfo>> = {
    ifSuccessful: true,
    data: await getAllArticleInfo(),
  }
  ctx.body = res
})

router.get('/cateId/:cadeId', async ctx => {
  // console.log(ctx.params);    // { cadeId: '2' }
  const res: ResBody<Array<ArticleInfo>> = {
    ifSuccessful: true,
    data: [],
  }
  ctx.body = res
})

export default router
