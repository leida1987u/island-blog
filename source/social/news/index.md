---
title: 今日热榜
date: 2026-03-31 00:00:00
type: page
---

## 📰 今日热榜

实时热点，了解世界正在发生什么。

<div class="news-tabs">
  <button class="news-tab active" data-tab="60s">60秒看世界</button>
  <button class="news-tab" data-tab="weibo">微博热搜</button>
  <button class="news-tab" data-tab="zhihu">知乎热榜</button>
  <button class="news-tab" data-tab="bilibili">B站热门</button>
  <button class="news-tab" data-tab="douyin">抖音热点</button>
</div>

<div id="news-list" class="news-list">
  <div class="loading">🌊 正在加载...</div>
</div>

<style>
.news-tabs { display: flex; gap: 8px; margin: 20px 0; flex-wrap: wrap; justify-content: center; }
.news-tab { padding: 8px 18px; border: 1px solid #ddd; border-radius: 20px; background: #fff; cursor: pointer; font-size: 0.9em; transition: all 0.3s; }
.news-tab:hover, .news-tab.active { background: #ff6b6b; color: #fff; border-color: #ff6b6b; }
.news-list { max-width: 700px; margin: 0 auto; }
.news-item { display: flex; align-items: flex-start; padding: 12px 8px; border-bottom: 1px solid #f0f0f0; }
.news-item a { text-decoration: none; color: #333; flex: 1; display: flex; align-items: flex-start; }
.news-item a:hover { color: #ff6b6b; }
.news-rank { min-width: 28px; height: 24px; line-height: 24px; text-align: center; border-radius: 4px; font-size: 0.8em; font-weight: bold; margin-right: 10px; color: #999; }
.news-rank.top3 { background: #ff6b6b; color: #fff; }
.news-title { flex: 1; font-size: 0.95em; line-height: 1.5; }
.news-hot { font-size: 0.75em; color: #ccc; margin-left: 10px; white-space: nowrap; }
.loading { text-align: center; padding: 40px; color: #999; }
.loading.error { color: #ff6b6b; }
[data-theme="dark"] .news-tab { background: #2a2a2a; border-color: #444; color: #ccc; }
[data-theme="dark"] .news-tab:hover, [data-theme="dark"] .news-tab.active { background: #ff6b6b; color: #fff; border-color: #ff6b6b; }
[data-theme="dark"] .news-item { border-color: #333; }
[data-theme="dark"] .news-item a { color: #ddd; }
[data-theme="dark"] .news-item a:hover { color: #ff6b6b; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('news-list');
  var tabs = document.querySelectorAll('.news-tab');

  // API 配置 - 使用 60s.viki.moe (全部可用)
  var API_BASE = 'https://60s.viki.moe/v2';

  var API = {
    '60s': function() { return fetchJson(API_BASE + '/60s', '60s'); },
    'weibo': function() { return fetchJson(API_BASE + '/weibo', 'list'); },
    'zhihu': function() { return fetchJson(API_BASE + '/zhihu', 'list'); },
    'bilibili': function() { return fetchJson(API_BASE + '/bili', 'list'); },
    'douyin': function() { return fetchJson(API_BASE + '/douyin', 'list'); }
  };

  async function fetchJson(url, type) {
    var res = await fetch(url);
    var data = await res.json();
    if (data.code !== 200) throw new Error('API error: ' + data.code);
    var items = data.data;
    if (type === '60s') {
      // 60s 格式: { data: { news: [...] } }
      return items.news.map(function(item, i) {
        return { rank: i + 1, title: item, url: '#', hot: '' };
      });
    } else {
      // 列表格式: { data: [{ title, link, hot_value }] }
      if (!Array.isArray(items)) items = [];
      return items.map(function(item, i) {
        return {
          rank: i + 1,
          title: item.title || item.name || item.word || '',
          url: item.link || item.url || '#',
          hot: item.hot_value ? (item.hot_value / 10000).toFixed(1) + '万' : ''
        };
      });
    }
  }

  function renderNews(items) {
    if (!items || items.length === 0) {
      list.innerHTML = '<div class="loading error">暂无数据 😅</div>';
      return;
    }
    var html = '';
    items.forEach(function(item) {
      var rankClass = item.rank <= 3 ? 'news-rank top3' : 'news-rank';
      var hotHtml = item.hot ? '<span class="news-hot">' + item.hot + '</span>' : '';
      var href = item.url && item.url !== '#' ? item.url : '#';
      html += '<div class="news-item">' +
        '<a href="' + href + '" target="_blank" rel="noopener">' +
        '<span class="' + rankClass + '">' + item.rank + '</span>' +
        '<span class="news-title">' + item.title + '</span>' +
        hotHtml +
        '</a></div>';
    });
    list.innerHTML = html;
  }

  function showError() {
    list.innerHTML = '<div class="loading error">加载失败，请稍后重试 😥</div>';
  }

  function loadNews(type) {
    list.innerHTML = '<div class="loading">🌊 正在加载...</div>';
    if (API[type]) {
      API[type]().then(renderNews).catch(showError);
    }
  }

  // Tab 切换
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
      loadNews(this.dataset.tab);
    });
  });

  // 默认加载
  loadNews('60s');
});
</script>
