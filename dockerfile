# --- 构建阶段 (Builder Stage) ---
# 使用 Node.js LTS Alpine 镜像作为基础
FROM node:20-alpine AS builder

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json
COPY package.json package-lock.json ./

# 安装所有依赖（包括 devDependencies，因为构建需要 typescript, tsc-alias 等）
RUN npm ci

# 复制包括 tsconfig.json 在内的所有源代码
# 确保 tsconfig.json 已修正 (例如：移除 noEmit: true, 添加 "outDir": "./dist")
COPY . .

# 执行 package.json 中定义的 build 脚本
# 假设编译结果输出到 ./dist 目录
RUN npm run build


# --- 生产阶段 (Production Stage) ---
# 使用一个干净的 Node.js 镜像
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 以便安装生产依赖
COPY package.json package-lock.json ./

# 只安装生产环境依赖
RUN npm ci --only=production

# 从构建阶段复制编译后的代码 (假设输出到 dist 目录)
COPY --from=builder /usr/src/app/dist ./dist

# 设置环境变量为生产环境
ENV NODE_ENV=production

# 运行编译后的 JavaScript 应用
# 入口文件路径
CMD [ "node", "dist/application.js" ]
