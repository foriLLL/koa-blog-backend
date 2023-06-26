import path from 'path'

// todo: 改为读取环境变量，便于之后使用docker     也可以固定读取一个文件夹，之后docker通过挂载的方式挂载到这个文件夹
const blogRepoAddr = '/Users/foril/blog-posts'
const blogAddr = path.join(blogRepoAddr, 'published')
const aboutAddr = path.join(blogRepoAddr, 'README.md')
const metaAddr = path.join(blogRepoAddr, 'meta/meta.json')

export { blogAddr, aboutAddr, metaAddr }
