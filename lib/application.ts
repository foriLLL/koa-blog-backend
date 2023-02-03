import Koa from 'koa'
const app = new Koa()

app.use( async ( ctx ) => {
    let url = ctx.request.url
    ctx.body = url
  })

app.listen(8080)
console.log('[demo] start-quick is starting at port 3000')