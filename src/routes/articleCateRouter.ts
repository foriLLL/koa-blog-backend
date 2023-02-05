import ArticleInfo from "../types/ArticleInfo";
import ResBody from "../types/ResBody";
import Router from "koa-router"
import ArticleCate from "../types/ArticleCate";

const router = new Router()

router.get('/articleInfo', async ( ctx )=>{
  const res: ResBody<Array<ArticleInfo>> = {
    ifSuccessful: true,
    data: []
  }
  ctx.body = res
})

router.get('/',async (ctx) => {
    const res: ResBody<Array<ArticleCate>> = {
        ifSuccessful: true,
        data: []
    }
    ctx.body = res
})

export default router;
