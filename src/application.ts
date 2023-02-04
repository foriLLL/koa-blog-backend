import Koa from 'koa'
import Router from 'koa-router'
import articleInfoRouter from './api/articleInfoApi'

const app = new Koa()

// 装载所有子路由
let router = new Router()
router.use('/api', articleInfoRouter.routes(), articleInfoRouter.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(8080)
console.log('[demo] start-quick is starting at port 8080')