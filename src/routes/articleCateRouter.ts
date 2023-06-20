import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import ArticleCate from '@/types/ArticleCate'
import { getAllArticleCates } from '@/service/articleCateService'

const router = new Router()

router.get('/', async ctx => {
  const res: ResBody<ArticleCate[]> = {
    ifSuccessful: true,
    data: await getAllArticleCates(),
  }
  ctx.body = res
})

export default router
