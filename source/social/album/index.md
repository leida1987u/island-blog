---
title: 岛屿相册
date: 2026-03-31 02:00:00
type: page
---

## 📸 岛屿相册

我们的集体回忆墙。

<div class="album-section">
  <h3>🌴 2026 春季</h3>
  <div class="album-grid">
    <div class="album-item"><img src="https://picsum.photos/400/400?random=201" loading="lazy"><div class="album-caption">春天的午后 ☀️</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=202" loading="lazy"><div class="album-caption">一起喝咖啡</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=203" loading="lazy"><div class="album-caption">周末聚会 🎉</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=204" loading="lazy"><div class="album-caption">春游踏青 🌸</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=205" loading="lazy"><div class="album-caption">美食之夜</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=206" loading="lazy"><div class="album-caption">合影留念 📷</div></div>
  </div>
</div>

<div class="album-section">
  <h3>🎄 2025 冬季</h3>
  <div class="album-grid">
    <div class="album-item"><img src="https://picsum.photos/400/400?random=211" loading="lazy"><div class="album-caption">圣诞聚会</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=212" loading="lazy"><div class="album-caption">跨年倒计时 🎆</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=213" loading="lazy"><div class="album-caption">火锅之夜 🍲</div></div>
    <div class="album-item"><img src="https://picsum.photos/400/400?random=214" loading="lazy"><div class="album-caption">围炉煮茶</div></div>
  </div>
</div>

<button class="load-more-btn" onclick="this.parentElement.innerHTML+='<p style=text-align:center;color:#888;padding:20px>更多相册敬请期待 📷</p>';this.style.display='none'">加载更多相册 📸</button>

<style>
.album-section { margin: 30px 0; }
.album-section h3 { font-size: 1.2em; margin-bottom: 15px; }
.album-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.album-item { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; }
.album-item img { width: 100%; aspect-ratio: 1; object-fit: cover; transition: transform 0.3s; }
.album-item:hover img { transform: scale(1.05); }
.album-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 8px 12px; background: linear-gradient(transparent, rgba(0,0,0,0.7)); color: #fff; font-size: 0.8em; }
.load-more-btn { display: block; margin: 20px auto; padding: 12px 30px; border: none; border-radius: 25px; background: #ff6b6b; color: #fff; cursor: pointer; }
@media(max-width:500px) { .album-grid { grid-template-columns: repeat(2, 1fr); } }
</style>
