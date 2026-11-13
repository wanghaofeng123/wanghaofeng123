// Add public demo videos to the project's videos array.
// File, embed, and external-link examples are documented in ../VIDEO_GUIDE.md.
export const projects = [
{
  "id": "robot-manipulation-demos",
  "category": "ROBOTICS / REAL-WORLD DEMOS",
  "title": "机器人操作演示",
  "subtitle": "真实场景中的交互与操作",
  "description": "从单个面包到多个面包，再到收银场景。选择片段，查看这些实验和此前的桌面操作记录。",
  "tags": [
    "机器人操作",
    "真实场景",
    "实验记录"
  ],
  "highlights": [
    {
      "title": "多种场景",
      "text": "桌面物体与日常用品的操作记录"
    },
    {
      "title": "在线视频",
      "text": "切换片段、拖动进度与全屏观看"
    }
  ],
  "videos": [
    { "title": "单面包操作", "kind": "file", "src": "./media/single-bread.mp4", "poster": "./media/single-bread.jpg", "duration": "00:34" },
    { "title": "多面包泛化", "kind": "file", "src": "./media/multi-bread.mp4", "poster": "./media/multi-bread.jpg", "duration": "00:33" },
    { "title": "收银场景", "kind": "file", "src": "./media/checkout.mp4", "poster": "./media/checkout.jpg", "duration": "01:06" },
    {
      "title": "桌面易拉罐操作",
      "kind": "file",
      "src": "./media/robot-demo-01.mp4",
      "poster": "./media/robot-demo-01.jpg",
      "duration": "00:41",
      "caption": "桌面易拉罐操作｜真实实验场景记录"
    },
    {
      "title": "桌面玩具操作",
      "kind": "file",
      "src": "./media/robot-demo-02.mp4",
      "poster": "./media/robot-demo-02.jpg",
      "duration": "01:53",
      "caption": "桌面玩具操作｜真实实验场景记录"
    },
    {
      "title": "机械臂与纸杯 · 场景一",
      "kind": "file",
      "src": "./media/robot-demo-03.mp4",
      "poster": "./media/robot-demo-03.jpg",
      "duration": "00:32",
      "caption": "机械臂与纸杯 · 场景一｜真实实验场景记录"
    },
    {
      "title": "机械臂与纸杯 · 场景二",
      "kind": "file",
      "src": "./media/robot-demo-04.mp4",
      "poster": "./media/robot-demo-04.jpg",
      "duration": "00:43",
      "caption": "机械臂与纸杯 · 场景二｜真实实验场景记录"
    },
    {
      "title": "桌面物体操作",
      "kind": "file",
      "src": "./media/robot-demo-05.mp4",
      "poster": "./media/robot-demo-05.jpg",
      "duration": "00:29",
      "caption": "桌面物体操作｜真实实验场景记录"
    }
  ]
},
{
  "id": "wrist-heatmap",
  "category": "π0.5 / SPATIAL SUPERVISION",
  "title": "腕部热力图空间辅助头",
  "subtitle": "π0.5 目标定位",
  "description": "辅助头从腕部相机的视觉特征预测目标位置。在训练集以外的 7 条演示、21 个标注帧上，预测峰值与弱标签中心平均相距 6.12 像素（输入为 224 × 224）。",
  "figure": "./media/wrist-comparison.jpg",
  "figureCaption": "每组三列从左到右为腕部相机原图、弱标签热力图、模型预测热力图。点击查看原图。",
  "source": "https://github.com/wanghaofeng123/pi05-wrist-heatmap",
  "tags": ["π0.5", "腕部视觉", "空间监督"]
}
];
