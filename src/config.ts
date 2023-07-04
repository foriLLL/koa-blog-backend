import path from 'path'

const port = process.env.PORT || 8080
const blogRepoAddr = process.env.BLOG_REPO_ADDR || '/blog-posts'
const blogAddr = path.join(blogRepoAddr, 'published')
const aboutAddr = path.join(blogRepoAddr, 'README.md')
const metaAddr = path.join(blogRepoAddr, 'meta/meta.json')
const staticAddr = path.join(blogRepoAddr, 'static')

export { blogAddr, aboutAddr, metaAddr, staticAddr, port }
