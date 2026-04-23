Page({
  data: {
    webUrl: ''
  },

  onLoad(query) {
    const app = getApp();
    const defaultUrl = app.globalData.webAppBaseUrl;

    // 支持页面参数覆盖：pages/webview/index?url=https%3A%2F%2Fyour-domain.com%2F%23%2Fportfolio
    const decodedUrl = query?.url ? decodeURIComponent(query.url) : '';
    const finalUrl = decodedUrl || defaultUrl;

    this.setData({ webUrl: finalUrl });
  }
});
