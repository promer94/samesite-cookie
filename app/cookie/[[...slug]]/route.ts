import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { setCookie } from 'hono/cookie'
import { handle } from 'hono/vercel'

const app = new Hono()

app.use('*',(c, next) => {
  const hostname = c.req.header('Origin')
  return cors({
    origin: hostname || '',
    credentials: true,
    allowMethods: ['GET', 'POST','OPTIONS'],
  })(c, next)
})

app.all('/cookie/test1/lax', (c) => {
  setCookie(c, 'test1_lax_cookie', 'test1_lax', {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: 'Lax',
    secure: true,
      domain: 'yixuanxu.com'
  })
  return c.text('test')
})

app.all('/cookie/test1/strict', (c) => {
    setCookie(c, 'test1_strict_cookie', 'test1_strict', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'Lax',
        secure: true,
        domain: 'yixuanxu.com'
    })
    return c.text('test')
})

app.all('/cookie/test1/none', (c) => {
    setCookie(c, 'test1_none_cookie', 'test1_none', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'None',
        secure: true,
        domain: 'yixuanxu.com'
    })
    return c.text('test')
})

app.all('/cookie/test2/lax', (c) => {
    setCookie(c, 'test2_lax_cookie', 'test', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'Lax',
        secure: true,
        domain: 'test2.yixuanxu.com'
    })
    return c.text('test')
})

app.all('/cookie/test2/none', (c) => {
    setCookie(c, 'test2_non_cookie', 'test', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'None',
        secure: true,
        domain: 'test2.yixuanxu.com'
    })
    return c.text('test')
})

app.all('/cookie/test2/strict', (c) => {
    setCookie(c, 'test2_strict_cookie', 'test', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'Strict',
        secure: true,
        domain: 'test2.yixuanxu.com'
    })
    return c.text('test')
})


app.all('/cookie/lax', (c) => {
    setCookie(c, 'lax_cookie', 'test', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'Lax',
        secure: true,
        domain: 'yixuanxu.com'
    })
    return c.text('test')
})

app.all('/cookie/none', (c) => {
    setCookie(c, 'none_cookie', 'test', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'None',
        secure: true,
        domain: 'yixuanxu.com'
    })
    return c.text('test')
})

app.all('/cookie/strict', (c) => {
    setCookie(c, 'strict_cookie', 'test', {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'Strict',
        secure: true,
        domain: 'yixuanxu.com'
    })
    return c.text('test')
})

export const GET = handle(app)
export const POST = handle(app)
export const OPTIONS = handle(app)


export const runtime = 'edge'