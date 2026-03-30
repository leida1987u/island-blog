---
title: ℡的主页
date: 2026-03-31 02:00:00
type: page
---

<div class="profile-page">

  <div class="profile-cover" style="background: linear-gradient(135deg, #f093fb 0%, #f093fb88 100%);"></div>

  <div class="profile-card">
    <img class="profile-avatar" src="/island-blog/images/℡.jpg" alt="℡" onerror="this.src='https://api.dicebear.com/7.x/initials/svg?backgroundColor=f093fb&seed=℡'">
    <div class="profile-info">
      <h1 class="profile-name">℡</h1>
      <p class="profile-sign">小黄毛祥弟</p>
    </div>
  </div>

  <div class="profile-section">
    <h3>📋 个人简介</h3>
    <div class="profile-bio">
      <div class="bio-item"><span class="bio-label">昵称</span><span class="bio-value">℡</span></div>
      <div class="bio-item"><span class="bio-label">职业</span><span class="bio-value">潮流青年</span></div>
      <div class="bio-item"><span class="bio-label">爱好</span><span class="bio-value">时尚、音乐、游戏</span></div>
      <div class="bio-item"><span class="bio-label">座右铭</span><span class="bio-value">年轻人就要有年轻人的样子</span></div>
    </div>
  </div>

  <div class="profile-section">
    <h3>🏷️ 标签</h3>
    <div class="profile-tags">
      <span class="tag">✨ 时尚</span><span class="tag">✨ 音乐</span><span class="tag">✨ 游戏</span>
    </div>
  </div>

  <div class="profile-section">
    <h3>📱 朋友圈动态</h3>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2026-03-30</div>
        <div class="timeline-content">
          <p>小黄毛祥弟 😎</p>
          <div class="timeline-meta">
            <span>❤️ 17</span>
            <span>💬 4</span>
          </div>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2026-03-25</div>
        <div class="timeline-content">
          <p>周末日常，舒服 🍻</p>
          <div class="timeline-images single">
            <img src="https://picsum.photos/400/300?random=308" alt="">
          </div>
          <div class="timeline-meta">
            <span>❤️ 10</span>
            <span>💬 5</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="profile-section">
    <h3>📷 相册</h3>
    <div class="photo-grid-9">
      <img src="https://picsum.photos/200/200?random=408" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=409" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=410" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=411" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=412" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=413" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=414" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=415" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=416" alt="" loading="lazy">
    </div>
  </div>

</div>

<style>
.profile-page { max-width: 600px; margin: 0 auto; }
.profile-cover { height: 200px; border-radius: 0 0 20px 20px; }
.profile-card { display: flex; align-items: flex-end; gap: 16px; padding: 0 20px; margin-top: -40px; position: relative; z-index: 1; }
.profile-avatar { width: 90px; height: 90px; border-radius: 50%; border: 4px solid #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.15); object-fit: cover; }
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
.timeline-images { display: grid; gap: 4px; border-radius: 8px; overflow: hidden; margin-bottom: 10px; }
.timeline-images.single { max-width: 300px; }
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
