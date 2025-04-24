import path from 'path'

const port = process.env.PORT || 8081
const blogRepoAddr = '/blog-posts'
const blogAddr = path.join(blogRepoAddr, 'published')
const aboutAddr = path.join(blogRepoAddr, 'README.md')
const metaAddr = path.join(blogRepoAddr, 'meta/meta.json')
const staticAddr = path.join(blogRepoAddr, 'static')

export { blogAddr, aboutAddr, metaAddr, staticAddr, port }
