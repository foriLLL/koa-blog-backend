import path from 'path'

// todo: 改为读取环境变量，便于之后使用docker
const blogRepoAddr = '/Users/foril/blog-posts'
const blogAddr = path.join(blogRepoAddr, 'published')
const aboutAddr = path.join(blogRepoAddr, 'README.md')

export { blogAddr, aboutAddr }
