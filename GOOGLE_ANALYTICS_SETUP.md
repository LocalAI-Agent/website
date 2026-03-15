# LocalAI Agent — Google Analytics 配置指南

## 📊 什么是 Google Analytics？

**Google Analytics（谷歌分析）** 是 Google 提供的免费网站分析服务，可以帮助你：

- 📈 **跟踪网站流量** - 了解访客数量、来源和行为
- 👥 **用户分析** - 了解用户地理位置、设备、浏览器等
- 📱 **行为追踪** - 查看用户访问了哪些页面、停留时间
- 🎯 **转化跟踪** - 跟踪用户是否完成特定目标（如注册、购买）
- 🔍 **流量来源** - 了解用户来自搜索引擎、社交媒体还是直接访问

---

## 🚀 配置步骤

### 1️⃣ 创建 Google Analytics 账户

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 点击 **"开始测量"** 或 **"Create Account"**
3. 使用 Google 账户登录（没有则注册一个）

### 2️⃣ 设置媒体资源

1. **账户名称**: LocalAI Agent
2. **媒体资源名称**: LocalAI Agent Web
3. **报告时区**: 选择你的时区（如：United States）
4. **货币**: 选择你的货币（如：USD）

### 3️⃣ 选择数据流类型

选择 **"Web"**（网站）

### 4️⃣ 配置数据流

1. **网站网址**: `https://localaiagent.tech`
2. **流名称**: LocalAI Agent
3. 点击 **"创建流"**

### 5️⃣ 获取测量 ID

创建后，你会看到：
- **测量 ID**: 格式为 `G-XXXXXXXXXX`（10 位字符）
- **数据流 ID**: 数字格式

**复制测量 ID**（例如：`G-1234567890`）

---

## ⚙️ 在项目中配置

### 方法 1：使用配置文件（推荐）

编辑 `src/config.yaml`：

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: 'G-XXXXXXXXXX'  # 替换为你的测量 ID
      partytown: false
```

### 方法 2：使用环境变量（更安全）

1. 在项目根目录创建 `.env` 文件：

```bash
PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

2. 更新 `src/config.yaml`：

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: ${PUBLIC_GOOGLE_ANALYTICS_ID}
      partytown: false
```

### 方法 3：使用 Vercel 环境变量（生产环境）

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 进入 **Settings** → **Environment Variables**
4. 添加新变量：
   - **Name**: `PUBLIC_GOOGLE_ANALYTICS_ID`
   - **Value**: `G-XXXXXXXXXX`
   - **Environment**: Production（勾选）
5. 点击 **Save**
6. 重新部署项目

---

## ✅ 验证安装

### 方法 1：实时查看

1. 打开 [Google Analytics Realtime](https://analytics.google.com/analytics/web/)
2. 访问你的网站 `https://localaiagent.tech`
3. 在 Realtime 报告中应该能看到你的访问

### 方法 2：使用浏览器开发者工具

1. 打开网站
2. 按 `F12` 打开开发者工具
3. 进入 **Network** 标签
4. 刷新页面
5. 搜索 `google-analytics` 或 `collect`
6. 如果看到请求发送，说明安装成功

### 方法 3：使用 Google Tag Assistant

1. 安装 [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk) Chrome 扩展
2. 访问你的网站
3. 点击扩展图标
4. 查看是否检测到 Google Analytics

---

## 📊 查看数据

### 基本报告

登录 [Google Analytics](https://analytics.google.com/) 后，可以看到：

#### 1. **实时报告**
- 当前在线用户数
- 正在查看的页面
- 用户来源

#### 2. **获取报告**
- 流量来源（有机搜索、直接访问、社交媒体等）
- 关键词
- 引荐网站

#### 3. **参与度报告**
- 平均停留时间
- 跳出率
- 访问页数

#### 4. **变现报告**（如果设置）
- 转化目标
- 收入跟踪

#### 5. **人口统计报告**
- 用户地理位置
- 年龄
- 性别
- 设备类型

---

## 🔒 隐私和合规

### GDPR 合规（欧盟）

如果你的网站面向欧盟用户，需要：

1. **Cookie 同意横幅** - 在加载 Analytics 前获得用户同意
2. **隐私政策** - 说明使用 Google Analytics
3. **数据保留设置** - 在 GA 中设置数据保留期限

### 配置建议

```yaml
analytics:
  vendors:
    googleAnalytics:
      id: 'G-XXXXXXXXXX'
      partytown: false  # 设为 true 可提升性能，但可能影响数据准确性
```

### 匿名化 IP（可选）

在 `src/components/common/Analytics.astro` 中添加：

```astro
<GoogleAnalytics
  id={String(ANALYTICS.vendors.googleAnalytics.id)}
  partytown={ANALYTICS?.vendors?.googleAnalytics?.partytown}
  gaOptions={{ anonymizeIp: true }}
/>
```

---

## 🎯 进阶配置

### 跟踪事件

```javascript
// 在组件中发送事件
window.gtag('event', 'click', {
  event_category: 'button',
  event_label: 'Join Waitlist',
});
```

### 设置转化目标

1. 进入 **Admin** → **Goals**
2. 点击 **"New Goal"**
3. 选择目标类型（如：页面访问、停留时间）
4. 设置目标详情

### 连接 Google Search Console

1. 在 GA 中进入 **Admin** → **Property Settings**
2. 点击 **"Adjust Search Console"**
3. 选择你的网站
4. 可以在 GA 中查看搜索查询数据

---

## 📈 常用指标解释

| 指标 | 含义 |
|------|------|
| **Users** | 独立访客数量 |
| **Sessions** | 访问会话数 |
| **Pageviews** | 页面浏览量 |
| **Bounce Rate** | 跳出率（只访问一页就离开的比例） |
| **Avg. Session Duration** | 平均会话时长 |
| **Traffic Source** | 流量来源 |
| **Conversion Rate** | 转化率 |

---

## 🛠️ 故障排除

### 数据不显示

**问题**: 配置后看不到数据

**解决方案**:
1. 检查测量 ID 是否正确
2. 清除浏览器缓存
3. 重新部署网站
4. 等待 24-48 小时（数据延迟）

### 实时报告有数据，但其他报告没有

**问题**: 只能看到实时数据

**解决方案**:
- 正常现象，标准报告需要 24 小时更新
- 继续等待即可

### 过滤内部流量

**问题**: 自己的访问也被统计

**解决方案**:
1. 进入 **Admin** → **Filters**
2. 创建新过滤器
3. 选择 **"Exclude"**
4. 选择 **"Traffic from the IP addresses"**
5. 输入你的 IP 地址

---

## 📚 相关资源

- [Google Analytics 官方文档](https://support.google.com/analytics)
- [Google Analytics Demo Account](https://support.google.com/analytics/answer/6367342)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)

---

*最后更新：2026-03-15*
