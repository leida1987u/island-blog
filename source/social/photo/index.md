---
title: 每日一图
date: 2026-03-31 00:00:00
type: page
---

## 📸 每日一图

今天的光影留给你。

<div id="daily-photo" style="margin:20px 0;">
  <div style="text-align:center;padding:40px;color:#999">📷 正在加载今日图片...</div>
</div>

<div class="photo-gallery">
  <h2>🖼️ 精选图库</h2>
  <div id="photo-grid" class="photo-grid"></div>
</div>

<button class="load-more-btn" onclick="loadMorePhotos()">加载更多 📷</button>

<style>
.daily-photo { position: relative; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
.daily-photo img { width: 100%; display: block; }
.daily-photo-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(transparent, rgba(0,0,0,0.7)); color: #fff; }
.daily-photo-title { font-size: 1.2em; font-weight: bold; margin-bottom: 5px; }
.photo-gallery h2 { font-size: 1.3em; margin: 30px 0 15px; }
.photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.photo-grid-item { border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.3s; aspect-ratio: 1; }
.photo-grid-item:hover { transform: scale(1.03); }
.photo-grid-item img { width: 100%; height: 100%; object-fit: cover; }
.load-more-btn { display: block; margin: 20px auto; padding: 12px 30px; border: none; border-radius: 25px; background: #ff6b6b; color: #fff; cursor: pointer; font-size: 1em; }
@media(max-width:600px) { .photo-grid { grid-template-columns: repeat(2, 1fr); } }
</style>

<script>
var photoPage = 1;
document.addEventListener('DOMContentLoaded', function() {
  loadDailyPhoto();
  loadPhotoGrid();
});
async function loadDailyPhoto() {
  var container = document.getElementById('daily-photo');
  try {
    var today = new Date();
    var day = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    var idx = day % 8;
    var res = await fetch('https://api.vvhan.com/api/bing?type=json&idx=' + idx);
    var data = await res.json();
    if (data.url) {
      container.innerHTML = '<div class="daily-photo"><img src="' + data.url + '" alt="' + (data.title||'今日图片') + '" loading="lazy"><div class="daily-photo-overlay"><div class="daily-photo-title">' + (data.title||'今日图片') + '</div></div></div>';
    }
  } catch(e) {
    container.innerHTML = '<div class="daily-photo"><img src="https://picsum.photos/1200/600?random=1" alt="随机图片" loading="lazy"></div>';
  }
}
function loadPhotoGrid() {
  var grid = document.getElementById('photo-grid');
  for (var i = 0; i < 6; i++) {
    grid.innerHTML += '<div class="photo-grid-item"><img src="https://picsum.photos/400/400?random=' + (photoPage*6+i) + '" alt="精选图片" loading="lazy"></div>';
  }
  photoPage++;
}
function loadMorePhotos() { loadPhotoGrid(); }
</script>
