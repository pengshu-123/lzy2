# 五子棋对战 | Gomoku Game

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

一个简洁美观的网页版五子棋对战游戏，支持双人对战、悔棋、自动判胜负等功能。

[在线试玩](https://your-username.github.io/gomoku-game/) | [English README](./README_EN.md)

![游戏截图](./screenshot.png)

## ✨ 功能特性

- 🎮 **双人对战模式** - 黑方与白方轮流落子
- ✅ **自动判胜负** - 五子连珠自动检测并高亮显示获胜连线
- ↩️ **悔棋功能** - 支持撤销上一步操作
- 🔄 **重新开始** - 一键重置游戏
- 🎯 **最后落子标记** - 红点标记最新落子位置
- 📱 **响应式设计** - 支持桌面端和移动端
- 🎨 **精美UI** - 仿真实木质棋盘，棋子有立体感

## 🚀 快速开始

### 方式一：直接打开

1. 下载或克隆本仓库
2. 双击 `index.html` 文件即可在浏览器中运行

### 方式二：本地服务器

```bash
# 克隆仓库
git clone https://github.com/your-username/gomoku-game.git

# 进入目录
cd gomoku-game

# 启动本地服务器（可选）
# Python 3
python -m http.server 8000
# 或 Node.js
npx serve

# 浏览器访问 http://localhost:8000
```

## 📁 项目结构

```
gomoku-game/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   └── game.js         # 游戏逻辑
├── README.md           # 项目说明（中文）
├── README_EN.md        # 项目说明（英文）
├── LICENSE             # 开源许可证
└── screenshot.png      # 游戏截图
```

## 🎮 游戏规则

1. 黑方先行，双方轮流在棋盘交叉点落子
2. 先将五枚己方棋子连成一条直线（横、竖、斜）者获胜
3. 支持悔棋功能，可撤销上一步操作

## 🛠️ 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式与动画
- **JavaScript (ES6+)** - 游戏逻辑

## 📱 浏览器兼容性

- Chrome / Edge / Firefox / Safari 最新版本
- iOS Safari 12+
- Android Chrome 80+

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目基于 [MIT 许可证](./LICENSE) 开源。

## 🙏 致谢

- 棋盘设计灵感来自传统中国五子棋
- 棋子样式参考专业围棋棋盘

---

Made with ❤️ by [Your Name](https://github.com/your-username)
