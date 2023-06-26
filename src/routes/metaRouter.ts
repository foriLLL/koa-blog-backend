import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import { getNickname } from '@/service/meteService'

const router = new Router()

router.get('/nickname', async ctx => {
  const nickname = await getNickname()

  const res: ResBody<string> = {
    ifSuccessful: nickname !== undefined,
    data: nickname,
  }
  ctx.body = res
})

export default router
