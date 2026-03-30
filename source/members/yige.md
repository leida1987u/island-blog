---
title: 毅哥的主页
date: 2026-03-31 01:00:00
type: page
---

<!-- 个人主页 - 朋友圈风格 -->
<div class="profile-page">

  <!-- 封面区域 -->
  <div class="profile-cover" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>

  <!-- 个人信息卡片 -->
  <div class="profile-card">
    <img class="profile-avatar" src="https://api.dicebear.com/7.x/initials/svg?backgroundColor=667eea&seed=毅哥" alt="毅哥">
    <div class="profile-info">
      <h1 class="profile-name">毅哥</h1>
      <p class="profile-sign">生命在于折腾 🦞</p>
    </div>
  </div>

  <!-- 个人简介 -->
  <div class="profile-section">
    <h3>📋 个人简介</h3>
    <div class="profile-bio">
      <div class="bio-item"><span class="bio-label">职业</span><span class="bio-value">技术爱好者</span></div>
      <div class="bio-item"><span class="bio-label">爱好</span><span class="bio-value">捣鼓各种好玩的东西</span></div>
      <div class="bio-item"><span class="bio-label">座右铭</span><span class="bio-value">生命在于折腾</span></div>
      <div class="bio-item"><span class="bio-label">来自</span><span class="bio-value">岛屿来信</span></div>
    </div>
  </div>

  <!-- 个人标签 -->
  <div class="profile-section">
    <h3>🏷️ 标签</h3>
    <div class="profile-tags">
      <span class="tag">🔧 技术宅</span>
      <span class="tag">💡 创意达人</span>
      <span class="tag">🎸 音乐</span>
      <span class="tag">🎮 游戏</span>
      <span class="tag">📖 阅读</span>
    </div>
  </div>

  <!-- 朋友圈动态 -->
  <div class="profile-section">
    <h3>📱 朋友圈动态</h3>

    <div class="timeline">
      <!-- 动态1 -->
      <div class="timeline-item">
        <div class="timeline-date">2026-03-30</div>
        <div class="timeline-content">
          <p>今天搞定了岛屿来信的 Hexo 博客，以后再也不用写 PHP 了！🎉</p>
          <div class="timeline-images">
            <img src="https://picsum.photos/200/200?random=1" alt="">
            <img src="https://picsum.photos/200/200?random=2" alt="">
            <img src="https://picsum.photos/200/200?random=3" alt="">
          </div>
          <div class="timeline-meta">
            <span>❤️ 12</span>
            <span>💬 5</span>
          </div>
        </div>
      </div>

      <!-- 动态2 -->
      <div class="timeline-item">
        <div class="timeline-date">2026-03-28</div>
        <div class="timeline-content">
          <p>周末探店发现一家超棒的咖啡馆，拿铁绝了 ☕</p>
          <div class="timeline-images single">
            <img src="https://picsum.photos/400/300?random=4" alt="">
          </div>
          <div class="timeline-meta">
            <span>❤️ 8</span>
            <span>💬 3</span>
          </div>
        </div>
      </div>

      <!-- 动态3 -->
      <div class="timeline-item">
        <div class="timeline-date">2026-03-25</div>
        <div class="timeline-content">
          <p>读完了《百年孤独》，马尔克斯的魔幻现实主义真的太迷人了。推荐给所有人 📚</p>
          <div class="timeline-meta">
            <span>❤️ 15</span>
            <span>💬 7</span>
          </div>
        </div>
      </div>

      <!-- 动态4 -->
      <div class="timeline-item">
        <div class="timeline-date">2026-03-20</div>
        <div class="timeline-content">
          <p>春天来了，周末去爬山 🌸</p>
          <div class="timeline-images">
            <img src="https://picsum.photos/200/200?random=5" alt="">
            <img src="https://picsum.photos/200/200?random=6" alt="">
          </div>
          <div class="timeline-meta">
            <span>❤️ 20</span>
            <span>💬 9</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 相册九宫格 -->
  <div class="profile-section">
    <h3>📷 相册</h3>
    <div class="photo-grid-9">
      <img src="https://picsum.photos/200/200?random=10" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=11" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=12" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=13" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=14" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=15" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=16" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=17" alt="" loading="lazy">
      <img src="https://picsum.photos/200/200?random=18" alt="" loading="lazy">
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
/* 朋友圈时间线 */
.timeline { }
.timeline-item { margin-bottom: 20px; }
.timeline-date { font-size: 0.8em; color: #aaa; margin-bottom: 8px; padding-left: 4px; }
.timeline-content { background: #fff; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.timeline-content p { margin: 0 0 12px; line-height: 1.6; }
.timeline-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; border-radius: 8px; overflow: hidden; margin-bottom: 10px; }
.timeline-images.single { grid-template-columns: 1fr; max-width: 300px; }
.timeline-images img { width: 100%; aspect-ratio: 1; object-fit: cover; cursor: pointer; }
.timeline-images.single img { aspect-ratio: auto; }
.timeline-meta { display: flex; gap: 20px; color: #aaa; font-size: 0.85em; padding-top: 10px; border-top: 1px solid #f0f0f0; }
/* 九宫格 */
.photo-grid-9 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; border-radius: 12px; overflow: hidden; }
.photo-grid-9 img { width: 100%; aspect-ratio: 1; object-fit: cover; cursor: pointer; transition: opacity 0.2s; }
.photo-grid-9 img:hover { opacity: 0.85; }
/* 暗色模式 */
[data-theme="dark"] .profile-section h3 { color: #ddd; }
[data-theme="dark"] .profile-bio { background: #2a2a2a; }
[data-theme="dark"] .bio-item { border-color: #333; }
[data-theme="dark"] .bio-label { color: #888; }
[data-theme="dark"] .tag { background: #333; color: #ccc; }
[data-theme="dark"] .timeline-content { background: #2a2a2a; box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
[data-theme="dark"] .timeline-meta { border-color: #333; }
</style>
