---
title: 岛屿大事记
date: 2026-03-31 02:00:00
type: page
---

## 📅 岛屿大事记

记录我们一起走过的日子。

<div class="timeline-container">

  <div class="timeline-event right">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">2026-03-31</div>
      <h3>🏝️ 岛屿来信 v2.0 上线</h3>
      <p>从单页面升级为 Hexo 博客系统，新增热榜、音乐、每日图、成员主页等功能。</p>
    </div>
  </div>

  <div class="timeline-event left">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">2026-03-17</div>
      <h3>🎉 岛屿来信诞生</h3>
      <p>岛屿来信项目正式启动，社交社区雏形诞生。</p>
    </div>
  </div>

  <div class="timeline-event right">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">2026-01-01</div>
      <h3>🎊 新年快乐</h3>
      <p>2026年，新的一年，新的开始。愿我们的友谊地久天长！</p>
    </div>
  </div>

  <div class="timeline-event left">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">2025-12-25</div>
      <h3>🎄 圣诞聚会</h3>
      <p>群里一起庆祝圣诞，分享了各自的照片和祝福。</p>
    </div>
  </div>

  <div class="timeline-event right">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <div class="timeline-date">2025-06-15</div>
      <h3>🌊 建群纪念日</h3>
      <p>15个人的微信群正式成立，从此岛屿来信的故事开始了。</p>
    </div>
  </div>

</div>

<!-- 添加新事件按钮 -->
<div style="text-align:center;margin-top:30px;">
  <button class="add-event-btn" onclick="alert('联系毅哥添加大事记！')">➕ 添加事件</button>
</div>

<style>
.timeline-container { position: relative; max-width: 700px; margin: 0 auto; padding: 20px 0; }
.timeline-container::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 3px; background: linear-gradient(to bottom, #ff6b6b, #ffd93d, #6bcb77, #4d96ff); transform: translateX(-50%); border-radius: 2px; }
.timeline-event { position: relative; width: 50%; padding: 15px; }
.timeline-event.left { left: 0; text-align: right; padding-right: 40px; }
.timeline-event.right { left: 50%; text-align: left; padding-left: 40px; }
.timeline-dot { position: absolute; top: 20px; width: 14px; height: 14px; background: #ff6b6b; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 0 0 3px #ff6b6b; z-index: 1; }
.timeline-event.left .timeline-dot { right: -7px; }
.timeline-event.right .timeline-dot { left: -7px; }
.timeline-card { background: #fff; border-radius: 12px; padding: 16px 20px; box-shadow: 0 3px 15px rgba(0,0,0,0.08); }
.timeline-date { font-size: 0.8em; color: #ff6b6b; font-weight: bold; margin-bottom: 6px; }
.timeline-card h3 { font-size: 1em; margin: 0 0 8px; }
.timeline-card p { font-size: 0.9em; color: #666; margin: 0; line-height: 1.5; }
.add-event-btn { padding: 10px 25px; border: 2px dashed #ddd; border-radius: 25px; background: transparent; color: #888; cursor: pointer; font-size: 0.95em; }
.add-event-btn:hover { border-color: #ff6b6b; color: #ff6b6b; }
@media(max-width:600px) {
  .timeline-container::before { left: 20px; }
  .timeline-event { width: 100%; left: 0 !important; text-align: left !important; padding-left: 50px !important; padding-right: 15px !important; }
  .timeline-dot { left: 13px !important; right: auto !important; }
}
[data-theme="dark"] .timeline-card { background: #2a2a2a; box-shadow: 0 3px 15px rgba(0,0,0,0.3); }
[data-theme="dark"] .timeline-card p { color: #aaa; }
</style>
