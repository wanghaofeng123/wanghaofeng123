// Add public demo videos to the project's videos array.
// File, embed, and external-link examples are documented in ../VIDEO_GUIDE.md.
export const projects = [
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
