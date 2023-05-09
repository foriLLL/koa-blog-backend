import ResBody from "@/types/ResBody";
import Router from "koa-router"
import Article from "@/types/Article";
import About from "@/types/About";
import { getAboutString } from "@/service/aboutService";

const router = new Router()

router.get('/',async (ctx) => {
    const res: ResBody<About> = {
        ifSuccessful: true,
        data: {
            'content': await getAboutString()
        }
    }
    ctx.body = res
})

export default router;

