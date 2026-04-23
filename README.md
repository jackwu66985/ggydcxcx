<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8cc75246-61ac-4a71-a34e-8ed9cd48469f

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## 微信小程序 WebView 兼容说明

本项目已做以下兼容优化，适合以 **微信小程序 `web-view`** 方式接入：

- 路由由 `BrowserRouter` 调整为 `HashRouter`，避免小程序容器下刷新/回退导致 404。
- 移除 Google Fonts 远程依赖，改为系统字体栈，降低小程序 WebView 网络拦截导致的字体加载失败风险。
- 简历页“打印/导出 PDF”增加能力检测：若容器不支持 `window.print`，会给出友好提示。

### 小程序接入建议

1. 在微信小程序后台将你的站点域名加入业务域名白名单（`https`）。
2. 使用 `web-view` 打开 H5 链接，例如：
   - `https://your-domain.com/#/`
   - `https://your-domain.com/#/portfolio`
3. 建议全站使用 HTTPS，并配置缓存与图片 CDN。

> 说明：本项目仍是 React H5 应用，并非原生小程序代码；推荐通过 `web-view` 承载以获得最佳兼容性。


### 小程序工程文件（已补齐）

仓库根目录已新增微信小程序必需入口文件，避免开发者工具报错“未找到 `app.json`”：

- `app.json`
- `app.js`
- `app.wxss`
- `sitemap.json`
- `pages/webview/index.*`

打开小程序后会默认进入 `pages/webview/index`，并加载 `app.js` 中的 `webAppBaseUrl`。请将其替换为你自己的线上 HTTPS 地址（且已加入微信后台业务域名白名单）。
