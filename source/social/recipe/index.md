---
title: 食谱分享
date: 2026-03-31 02:00:00
type: page
---

## 🍳 食谱分享

岛民们的拿手菜谱。

<div class="recipe-grid">

  <div class="recipe-card">
    <div class="recipe-img" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
      <span>🍲</span>
    </div>
    <div class="recipe-info">
      <h3>番茄炖牛腩</h3>
      <p class="recipe-author">by 毅哥</p>
      <p class="recipe-desc">番茄的酸甜和牛腩的鲜香完美融合，冬天来一碗暖到心里。</p>
      <div class="recipe-meta">
        <span>⏱️ 90分钟</span>
        <span>👨‍👩‍👧‍👦 4人份</span>
        <span>⭐ 家常</span>
      </div>
    </div>
  </div>

  <div class="recipe-card">
    <div class="recipe-img" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
      <span>🍜</span>
    </div>
    <div class="recipe-info">
      <h3>阳春面</h3>
      <p class="recipe-author">by 成员04</p>
      <p class="recipe-desc">简单却充满灵魂的一碗面，猪油葱花是关键。</p>
      <div class="recipe-meta">
        <span>⏱️ 15分钟</span>
        <span>👨‍👩‍👧‍👦 1人份</span>
        <span>⭐ 快手</span>
      </div>
    </div>
  </div>

  <div class="recipe-card">
    <div class="recipe-img" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
      <span>🥗</span>
    </div>
    <div class="recipe-info">
      <h3>凯撒沙拉</h3>
      <p class="recipe-author">by 成员05</p>
      <p class="recipe-desc">健康轻食首选，自制凯撒酱比外面买的好吃十倍。</p>
      <div class="recipe-meta">
        <span>⏱️ 20分钟</span>
        <span>👨‍👩‍👧‍👦 2人份</span>
        <span>⭐ 轻食</span>
      </div>
    </div>
  </div>

  <div class="recipe-card">
    <div class="recipe-img" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
      <span>🍰</span>
    </div>
    <div class="recipe-info">
      <h3>巴斯克芝士蛋糕</h3>
      <p class="recipe-author">by 成员07</p>
      <p class="recipe-desc">外焦里嫩，奶香浓郁，零失败的网红甜品。</p>
      <div class="recipe-meta">
        <span>⏱️ 60分钟</span>
        <span>👨‍👩‍👧‍👦 6人份</span>
        <span>⭐ 甜品</span>
      </div>
    </div>
  </div>

</div>

<div style="text-align:center;margin-top:30px;">
  <button class="share-recipe-btn" onclick="alert('联系毅哥分享你的食谱！')">🍳 分享我的食谱</button>
</div>

<style>
.recipe-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.recipe-card { background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 3px 15px rgba(0,0,0,0.08); transition: transform 0.3s; }
.recipe-card:hover { transform: translateY(-3px); }
.recipe-img { height: 160px; display: flex; align-items: center; justify-content: center; font-size: 4em; }
.recipe-info { padding: 16px; }
.recipe-info h3 { margin: 0 0 6px; font-size: 1.1em; }
.recipe-author { color: #888; font-size: 0.85em; margin: 0 0 8px; }
.recipe-desc { color: #666; font-size: 0.9em; line-height: 1.5; margin: 0 0 12px; }
.recipe-meta { display: flex; gap: 12px; font-size: 0.8em; color: #aaa; }
.share-recipe-btn { padding: 10px 25px; border: 2px dashed #ddd; border-radius: 25px; background: transparent; color: #888; cursor: pointer; }
.share-recipe-btn:hover { border-color: #ff6b6b; color: #ff6b6b; }
[data-theme="dark"] .recipe-card { background: #2a2a2a; box-shadow: 0 3px 15px rgba(0,0,0,0.3); }
[data-theme="dark"] .recipe-desc { color: #aaa; }
</style>
