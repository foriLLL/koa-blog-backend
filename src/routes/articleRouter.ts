import ArticleInfo from "@/types/ArticleInfo";
import ResBody from "@/types/ResBody";
import Router from "koa-router"
import Article from "@/types/Article";

const router = new Router()

router.get('/:articleId',async (ctx) => {
    const res: ResBody<Article> = {
        ifSuccessful: true,
        data: {
            articleId: 1,
            title: 'this is title',
            time: '2022-02-04',
            cateId: 1,
            content: 'this is content',
            views: 111,
            description: 'this is description',
            userId: 1,
            coverImg: ''
        }
    }
    ctx.body = res
})

export default router;

