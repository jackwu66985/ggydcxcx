Page({
  data: {
    projects: [
      {
        id: 1,
        name: '智能城市交互系统',
        tag: 'INTERACTION DESIGN',
        desc: '基于数据可视化的未来城市管理终端设计。'
      },
      {
        id: 2,
        name: '极简音频播放器',
        tag: 'MOBILE APP',
        desc: '探索纯粹声音体验的移动端应用原型。'
      },
      {
        id: 3,
        name: '数字艺术生成器',
        tag: 'GENERATIVE ART',
        desc: '利用算法生成的无限动态视觉艺术作品。'
      }
    ],
    skills: ['Figma', 'React', 'TypeScript', 'WeChat Dev', 'UI/UX', 'Three.js'],
    email: '1473397820@qq.com'
  },

  onLoad() {
    console.log('原生作品集已加载 - 微信小程序环境就绪');
  },

  copyEmail() {
    wx.setClipboardData({
      data: this.data.email,
      success: () => {
        wx.showToast({
          title: '邮箱已复制',
          icon: 'success'
        });
      },
      fail: () => {
        wx.showToast({
          title: '复制失败，请手动复制',
          icon: 'none'
        });
      }
    });
  },

  onShareAppMessage() {
    return {
      title: '王睿熙 | 交互设计师作品集',
      path: '/pages/index/index'
    };
  }
});
