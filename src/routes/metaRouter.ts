import ResBody from '@/types/ResBody'
import Router from 'koa-router'
import { getIconLinks, getNickname } from '@/service/metaService'
import IconLink from '@/types/IconLink'

const router = new Router()

router.get('/nickname', async ctx => {
  const nickname = await getNickname()

  const res: ResBody<string> = {
    ifSuccessful: nickname !== '',
    data: nickname,
  }
  ctx.body = res
})

router.get('/iconlink', async ctx => {
  const iconLinks = await getIconLinks()

  const res: ResBody<IconLink[]> = {
    // ifSuccessful: iconLinks.length !== 0,
    ifSuccessful: true,
    data: iconLinks,
  }
  ctx.body = res
})

export default router
