// Add public demo videos to the project's videos array.
// File, embed, and external-link examples are documented in ../VIDEO_GUIDE.md.
export const projects = [
{
  "id": "robot-manipulation-demos",
  "category": "ROBOTICS / REAL-WORLD DEMOS",
  "title": "机器人操作演示",
  "subtitle": "真实场景中的交互与操作",
  "description": "五段机器人操作视频，记录不同机械臂平台在桌面场景中与易拉罐、玩具、纸杯等物体的交互过程。",
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
    id: 'xarm7-quest-teleop',
    category: 'ROBOTICS / TELEOPERATION',
    title: 'Quest × xArm7',
    subtitle: '机器人遥操作与数据采集',
    description: '基于 Meta Quest 控制器的 xArm7 与 G2 夹爪遥操作系统，将示教操作、双相机采集和数据质量管理整合到同一工作流。',
    tags: ['Meta Quest', 'xArm7', 'LeRobot'],
    highlights: [
      { title: '遥操作', text: '六维相对控制与夹爪交互' },
      { title: '数据采集', text: '双相机、机器人状态与动作记录' },
      { title: '质量管理', text: '轨迹检查、回放与训练格式导出' }
    ],
    source: 'https://github.com/wanghaofeng123/xarm7-quest-teleop',
    videos: []
  }
];
