---
title: 今日热榜
date: 2026-03-31 00:00:00
type: page
---

## 📰 今日热榜

实时更新的热点新闻，了解世界正在发生什么。

<div class="news-tabs">
  <button class="news-tab active" data-tab="weibo">微博热搜</button>
  <button class="news-tab" data-tab="zhihu">知乎热榜</button>
  <button class="news-tab" data-tab="github">GitHub趋势</button>
  <button class="news-tab" data-tab="bilibili">B站热门</button>
</div>

<div id="news-list" class="news-list">
  <div class="loading">🌊 正在加载...</div>
</div>

<style>
.news-tabs { display: flex; gap: 10px; margin: 20px 0; flex-wrap: wrap; justify-content: center; }
.news-tab { padding: 8px 20px; border: 1px solid #ddd; border-radius: 20px; background: #fff; cursor: pointer; font-size: 0.9em; transition: all 0.3s; }
.news-tab:hover, .news-tab.active { background: #ff6b6b; color: #fff; border-color: #ff6b6b; }
.news-item { display: flex; align-items: flex-start; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
.news-item a { text-decoration: none; color: #333; flex: 1; }
.news-item a:hover { color: #ff6b6b; }
.news-rank { width: 30px; font-size: 1.2em; font-weight: bold; color: #ccc; text-align: center; margin-right: 12px; }
.news-rank.top1 { color: #ff4444; }
.news-rank.top2 { color: #ff7744; }
.news-rank.top3 { color: #ffaa44; }
.news-hot { font-size: 0.75em; color: #ff6b6b; margin-left: 8px; }
.loading { text-align: center; padding: 40px; color: #999; }
</style>

<script>
document.addEventListener('DOMContentLoaded', async function() {
  var list = document.getElementById('news-list');
  var tabs = document.querySelectorAll('.news-tab');
  var API = {
    weibo: 'https://api.vvhan.com/api/hotlist/wbHot',
    zhihu: 'https://api.vvhan.com/api/hotlist/zhihuHot',
    github: 'https://api.vvhan.com/api/hotlist/githubTrending',
    bilibili: 'https://api.vvhan.com/api/hotlist/biliHot'
  };
  async function loadNews(type) {
    list.innerHTML = '<div class="loading">🌊 正在加载...</div>';
    try {
      var res = await fetch(API[type]);
      var data = await res.json();
      var items = data.data || [];
      list.innerHTML = items.map(function(item, i) {
        var rank = i < 3 ? ' top' + (i+1) : '';
        var hot = item.hot ? '<span class="news-hot">' + item.hot + '</span>' : '';
        return '<div class="news-item"><span class="news-rank' + rank + '">' + (i+1) + '</span><a href="' + (item.url||'#') + '" target="_blank" rel="noopener"><span class="news-title">' + item.title + hot + '</span></a></div>';
      }).join('');
    } catch(e) { list.innerHTML = '<div class="loading">😢 加载失败，换个源试试</div>'; }
  }
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
      loadNews(this.dataset.tab);
    });
  });
  loadNews('weibo');
});
</script>
