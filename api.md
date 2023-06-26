# API 文档


1. 挂载至`/api`
2. 响应
    * `ifSuccessful`：是否成功
    * `data`：返回数据
    * `message`：错误信息

## About

路由： `/about`

### 获取关于信息

|API 属性|值|
|---|---|
|功能|获取关于信息|
|子路由|`/`|
|请求方法|`GET`|
|请求参数|无|
|返回类型|`string`|

## ArticleInfo
路由： `/articleInfo`

### 获取所有文章信息

|API 属性|值|
|---|---|
|功能|获取所有文章的文章信息|
|子路由|`/`|
|请求方法|`GET`|
|请求参数|无|
|返回类型|`ArticleInfo[]`|

### 获取指定类别文章信息

|API 属性|值|
|---|---|
|功能|获取指定类别文章的文章信息|
|子路由|`/:cateName`|
|请求方法|`GET`|
|路由参数|`cateName`：类别名称|
|返回类型|`ArticleInfo[]`|

## ArticleCate

路由： `/articleCate`

### 获取所有文章类别

|API 属性|值|
|---|---|
|功能|获取所有文章类别|
|子路由|`/`|

## Article

路由： `/article`

### 获取指定文章

|API 属性|值|
|---|---|
|功能|获取指定文章|
|子路由|`/:cateName/:title`|
|请求方法|`GET`|
|路由参数|`cateName`：分类名称|
||`title`：文章标题|
|返回类型|`Article`|


## Meta

路由： `/meta`

### 获取用户昵称

|API 属性|值|
|---|---|
|功能|获取用户昵称|
|子路由|`/nickname`|
|请求方法|`GET`|
|请求参数|无|
|返回类型|`string`|
