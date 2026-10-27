# 添加项目演示视频

展示页源码位于 `docs/`，项目与视频信息集中在 `docs/projects.js`。GitHub Pages 发布 `main` 分支的 `/docs` 目录。

## 上传本地视频

1. 将适合公开的 MP4 或 WebM 视频放入 `docs/media/`，建议文件名使用英文和连字符。
2. 在对应项目的 `videos` 数组中加入视频信息：

```js
videos: [
  {
    title: '遥操作演示',
    kind: 'file',
    src: './media/teleoperation-demo.mp4',
    caption: '填写该段视频实际展示的任务与条件。'
  }
]
```

可选字段：`poster` 为封面图片路径；`duration` 为实际时长，例如 `01:25`。它们不会自动计算。播放器使用浏览器原生控件，支持全屏与播放进度调整。

## 使用在线视频

对于 Bilibili 或 YouTube，使用平台提供的嵌入地址：

```js
{
  title: '项目演示',
  kind: 'embed',
  src: 'https://player.bilibili.com/player.html?bvid=实际BV号&autoplay=0',
  caption: '填写视频说明。'
}
```

YouTube 地址形式为 `https://www.youtube-nocookie.com/embed/实际视频ID`。普通分享链接可设置为 `kind: 'link'`，在新页面打开视频，不需要使用嵌入播放器。

## 添加新项目

复制 `projects` 数组中的项目对象，修改 `id`、标题、介绍和源码地址，并加入对应视频。`id` 使用唯一的英文标识。项目没有公开源码时可省略 `source`。

将更新提交并推送到 `main` 后，GitHub Pages 会重新部署。原始简历、个人联系方式和未授权公开的材料不要放入此目录或仓库。
