---
title: 旅行足迹
date: 2026-03-31 02:00:00
type: page
---

## 🗺️ 旅行足迹

岛民们走过的城市。

<div class="travel-map">
  <div class="travel-stats">
    <div class="stat-item"><div class="stat-num">12</div><div class="stat-label">城市</div></div>
    <div class="stat-item"><div class="stat-num">8</div><div class="stat-label">省份</div></div>
    <div class="stat-item"><div class="stat-num">15</div><div class="stat-label">岛民</div></div>
  </div>

  <div class="city-grid">
    <div class="city-card">
      <div class="city-icon">🏔️</div>
      <div class="city-name">北京</div>
      <div class="city-visitors">毅哥、成员02、成员06</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🌃</div>
      <div class="city-name">上海</div>
      <div class="city-visitors">毅哥、成员03、成员05</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🐼</div>
      <div class="city-name">成都</div>
      <div class="city-visitors">成员04、成员07</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🏖️</div>
      <div class="city-name">厦门</div>
      <div class="city-visitors">成员03、成员08</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🌸</div>
      <div class="city-name">大理</div>
      <div class="city-visitors">成员09、成员11</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🏔️</div>
      <div class="city-name">新疆</div>
      <div class="city-visitors">成员10、成员14</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🌊</div>
      <div class="city-name">三亚</div>
      <div class="city-visitors">成员05、成员12</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🏯</div>
      <div class="city-name">西安</div>
      <div class="city-visitors">成员02、成员06</div>
    </div>
    <div class="city-card">
      <div class="city-icon">⛩️</div>
      <div class="city-name">重庆</div>
      <div class="city-visitors">成员04、成员07、成员13</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🌲</div>
      <div class="city-name">杭州</div>
      <div class="city-visitors">毅哥、成员03、成员15</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🌸</div>
      <div class="city-name">武汉</div>
      <div class="city-visitors">成员08、成员11</div>
    </div>
    <div class="city-card">
      <div class="city-icon">🍜</div>
      <div class="city-name">长沙</div>
      <div class="city-visitors">成员05、成员09</div>
    </div>
  </div>
</div>

<div style="text-align:center;margin-top:30px;">
  <button class="add-travel-btn" onclick="alert('联系毅哥添加你去过的城市！')">📍 添加我的足迹</button>
</div>

<style>
.travel-stats { display: flex; justify-content: center; gap: 40px; margin: 20px 0 30px; }
.stat-item { text-align: center; }
.stat-num { font-size: 2em; font-weight: bold; color: #ff6b6b; }
.stat-label { font-size: 0.9em; color: #888; }
.city-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
.city-card { background: #fff; border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.06); transition: transform 0.3s; }
.city-card:hover { transform: translateY(-3px); }
.city-icon { font-size: 2em; margin-bottom: 8px; }
.city-name { font-size: 1.1em; font-weight: bold; margin-bottom: 6px; }
.city-visitors { font-size: 0.8em; color: #888; }
.add-travel-btn { padding: 10px 25px; border: 2px dashed #ddd; border-radius: 25px; background: transparent; color: #888; cursor: pointer; }
.add-travel-btn:hover { border-color: #ff6b6b; color: #ff6b6b; }
[data-theme="dark"] .city-card { background: #2a2a2a; box-shadow: 0 2px 10px rgba(0,0,0,0.2); }
</style>
