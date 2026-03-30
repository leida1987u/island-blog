---
title: 成员12的主页
date: 2026-03-31 01:00:00
type: page
---

<div class="profile-page">

  <div class="profile-cover" style="background: linear-gradient(135deg, #fbc2eb 0%, #fbc2eb88 100%);"></div>

  <div class="profile-card">
    <img class="profile-avatar" src="https://api.dicebear.com/7.x/initials/svg?backgroundColor=fbc2eb&seed=成员12" alt="成员12">
    <div class="profile-info">
      <h1 class="profile-name">成员12</h1>
      <p class="profile-sign">每天进步一点点</p>
    </div>
  </div>

  <div class="profile-section">
    <h3>📋 个人简介</h3>
    <div class="profile-bio">
      <div class="bio-item"><span class="bio-label">职业</span><span class="bio-value">产品经理</span></div>
      <div class="bio-item"><span class="bio-label">爱好</span><span class="bio-value">产品、阅读、思考</span></div>
      <div class="bio-item"><span class="bio-label">座右铭</span><span class="bio-value">Less is more</span></div>
    </div>
  </div>

  <div class="profile-section">
    <h3>🏷️ 标签</h3>
    <div class="profile-tags">
      <span class="tag">✨ 产品</span><span class="tag">✨ 阅读</span><span class="tag">✨ 思考</span>
    </div>
  </div>

  <div class="profile-section">
    <h3>📱 朋友圈动态</h3>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2026-03-30</div>
        <div class="timeline-content">
          <p>今天天气真好，心情也跟着好起来了 ☀️</p>
          <div class="timeline-meta">
            <span>❤️ 6</span>
            <span>💬 2</span>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-03-27</div>
        <div class="timeline-content">
          <p>周末在家做了一顿丰盛的午餐 🍜</p>
          <div class="timeline-images single">
            <img src="https://picsum.photos/400/300?random=144" alt="">
          </div>
          <div class="timeline-meta">
            <span>❤️ 10</span>
            <span>💬 4</span>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-03-22</div>
        <div class="timeline-content">
          <p>最近在读《月亮与六便士》，推荐给大家 📚</p>
          <div class="timeline-meta">
            <span>❤️ 8</span>
            <span>💬 3</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="profile-section">
    <h3>📷 相册</h3>
    <div class="photo-grid-9">
      <img src="https://picsum.photos/200/200?random=144" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=145" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=146" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=147" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=148" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=149" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=150" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=151" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=152" alt="" loading="lazy">
    </div>
  </div>

</div>

<style>
.profile-page { max-width: 600px; margin: 0 auto; }
.profile-cover { height: 200px; border-radius: 0 0 20px 20px; }
.profile-card { display: flex; align-items: flex-end; gap: 16px; padding: 0 20px; margin-top: -40px; position: relative; z-index: 1; }
.profile-avatar { width: 90px; height: 90px; border-radius: 50%; border: 4px solid #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }
.profile-info { flex: 1; padding-bottom: 5px; }
.profile-name { font-size: 1.4em; margin: 0; }
.profile-sign { color: #888; font-size: 0.9em; margin: 4px 0 0; }
.profile-section { margin: 20px; }
.profile-section h3 { font-size: 1.1em; margin-bottom: 12px; color: #333; }
.profile-bio { background: #f8f8f8; border-radius: 12px; padding: 16px; }
.bio-item { display: flex; padding: 8px 0; border-bottom: 1px solid #eee; }
.bio-item:last-child { border-bottom: none; }
.bio-label { width: 60px; color: #888; font-size: 0.9em; }
.bio-value { flex: 1; font-size: 0.95em; }
.profile-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag { background: #f0f0f0; padding: 6px 14px; border-radius: 20px; font-size: 0.85em; }
.timeline-item { margin-bottom: 20px; }
.timeline-date { font-size: 0.8em; color: #aaa; margin-bottom: 8px; }
.timeline-content { background: #fff; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.timeline-content p { margin: 0 0 12px; line-height: 1.6; }
.timeline-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; border-radius: 8px; overflow: hidden; margin-bottom: 10px; }
.timeline-images.single { grid-template-columns: 1fr; max-width: 300px; }
.timeline-images img { width: 100%; aspect-ratio: 1; object-fit: cover; }
.timeline-meta { display: flex; gap: 20px; color: #aaa; font-size: 0.85em; padding-top: 10px; border-top: 1px solid #f0f0f0; }
.photo-grid-9 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; border-radius: 12px; overflow: hidden; }
.photo-grid-9 img { width: 100%; aspect-ratio: 1; object-fit: cover; cursor: pointer; }
[data-theme="dark"] .profile-section h3 { color: #ddd; }
[data-theme="dark"] .profile-bio { background: #2a2a2a; }
[data-theme="dark"] .bio-item { border-color: #333; }
[data-theme="dark"] .tag { background: #333; color: #ccc; }
[data-theme="dark"] .timeline-content { background: #2a2a2a; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
[data-theme="dark"] .timeline-meta { border-color: #333; }
</style>
