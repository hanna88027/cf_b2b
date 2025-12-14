# 故障排除指南

## 问题 1: 产品详情页一直加载中

### 原因
`src/pages/product-detail.js:70` 中的 JavaScript 语法错误：
```javascript
const productId = ${productId};  // 错误：productId 没有被引号包裹
```

### 解决方案
已修复为：
```javascript
const productId = "${productId}";  // 正确：使用字符串
```

## 问题 2: 图片在前端产品页不显示

### 可能的原因和解决方案

#### 原因 1: R2 Bucket 尚未创建

**检查方法：**
```bash
wrangler r2 bucket list
```

**解决方案：**
```bash
# 创建 R2 bucket
wrangler r2 bucket create b2b-product-images

# 验证创建成功
wrangler r2 bucket list
```

#### 原因 2: 产品数据库中没有图片 URL

**检查方法：**
```bash
# 查看产品数据
wrangler d1 execute b2b_database --command "SELECT id, name, image_url FROM products LIMIT 5"
```

**解决方案：**
1. 登录管理后台：`http://localhost:8787/admin`
2. 进入产品管理
3. 编辑产品并上传图片
4. 或者手动插入测试数据：
```bash
wrangler d1 execute b2b_database --command "UPDATE products SET image_url = 'https://via.placeholder.com/400x300' WHERE id = 1"
```

#### 原因 3: 占位符图片路径错误

**临时解决方案：**

当前代码使用 `/images/placeholder.jpg` 作为占位符，但这个文件可能不存在。

**快速修复 - 使用在线占位符：**

编辑 `src/pages/products.js:84` 和 `src/pages/product-detail.js:98`，将：
```javascript
product.image_url || '/images/placeholder.jpg'
```

改为：
```javascript
product.image_url || 'https://via.placeholder.com/400x300?text=No+Image'
```

#### 原因 4: 本地开发环境问题

**Node.js 版本要求：**
```
当前版本：v18.20.8
要求版本：v20.0.0+
```

**升级 Node.js：**
```bash
# 使用 nvm
nvm install 20
nvm use 20

# 或使用 volta
volta install node@20
```

## 完整测试流程

### 1. 环境准备
```bash
# 1. 升级 Node.js（如果需要）
node --version  # 确认版本 >= 20

# 2. 安装依赖
npm install

# 3. 创建 R2 bucket
wrangler r2 bucket create b2b-product-images

# 4. 验证配置
cat wrangler.toml  # 确认 R2 配置正确
```

### 2. 初始化数据库（如果尚未初始化）
```bash
# 执行数据库 schema
wrangler d1 execute b2b_database --file=./schema/schema.sql
```

### 3. 添加测试产品（可选）
```bash
# 插入测试产品
wrangler d1 execute b2b_database --command "INSERT INTO products (name, description, category, image_url, is_active, is_featured) VALUES ('Test Product', 'This is a test product', 'Electronics', 'https://via.placeholder.com/400x300', 1, 1)"
```

### 4. 启动开发服务器
```bash
npm run dev
```

### 5. 测试功能

**前端测试：**
1. 访问 http://localhost:8787
2. 访问 http://localhost:8787/products - 检查产品列表和图片
3. 点击任意产品 - 检查产品详情页是否正常加载
4. 检查图片是否显示

**后台测试：**
1. 访问 http://localhost:8787/admin
2. 登录（admin/admin123）
3. 进入产品管理
4. 点击"Edit"编辑产品
5. 上传图片测试
6. 保存后到前台查看图片是否显示

## 调试技巧

### 1. 检查浏览器控制台
打开开发者工具（F12）查看：
- Console 标签：查看 JavaScript 错误
- Network 标签：查看 API 请求状态
- 检查图片请求是否返回 404

### 2. 检查 API 响应
```bash
# 测试产品 API
curl http://localhost:8787/api/products

# 测试单个产品
curl http://localhost:8787/api/products/1
```

### 3. 检查图片上传
1. 在管理后台上传图片
2. 查看控制台的上传响应
3. 记录返回的图片 URL
4. 直接在浏览器访问该 URL 测试

## 常见错误和解决方案

### 错误 1: "Product not found"
- 数据库中没有产品数据
- 解决：添加测试产品或检查数据库

### 错误 2: 图片 404
- 图片 URL 路径错误
- R2 bucket 不存在
- 解决：创建 R2 bucket 并重新上传图片

### 错误 3: "Unable to load products"
- API 请求失败
- 数据库连接问题
- 解决：检查 wrangler.toml 配置和数据库状态

### 错误 4: JavaScript 错误
- 打开浏览器控制台查看具体错误
- 检查是否有语法错误或未定义的变量

## 快速修复命令

```bash
# 完整重置和重启
wrangler r2 bucket create b2b-product-images
wrangler d1 execute b2b_database --file=./schema/schema.sql
npm run dev
```

## 联系支持

如果问题仍然存在：
1. 检查 wrangler.toml 配置
2. 查看开发服务器日志
3. 提供浏览器控制台的完整错误信息
