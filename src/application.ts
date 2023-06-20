import Koa from 'koa'
import Router from 'koa-router'
import articleInfoRouter from './routes/articleInfoRouter'
import articleCateRouter from './routes/articleCateRouter'
import articleRouter from './routes/articleRouter'
import aboutRouter from './routes/aboutRouter'

const app = new Koa()
const port = 8080

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  )
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})

// 装载所有路由
const subRouter = new Router()
subRouter.use(
  '/articleInfo',
  articleInfoRouter.routes(),
  articleInfoRouter.allowedMethods(),
)

subRouter.use(
  '/articleCate',
  articleCateRouter.routes(),
  articleCateRouter.allowedMethods(),
)
subRouter.use(
  '/article',
  articleRouter.routes(),
  articleRouter.allowedMethods(),
)
subRouter.use('/about', aboutRouter.routes(), aboutRouter.allowedMethods())

// 挂载到 /api 路径下
const router = new Router()
router.use('/api', subRouter.routes(), subRouter.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)
console.log(`foril-blog backend is starting at port ${port}`)
