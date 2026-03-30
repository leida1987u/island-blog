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
.news-rank { width: 28px; font-size: 1.1em; font-weight: bold; color: #ccc; text-align: center; margin-right: 12px; flex-shrink: 0; }
.news-rank.top1 { color: #ff4444; }
.news-rank.top2 { color: #ff7744; }
.news-rank.top3 { color: #ffaa44; }
.news-hot { font-size: 0.75em; color: #ff6b6b; margin-left: 8px; white-space: nowrap; }
.loading { text-align: center; padding: 40px; color: #999; }
[data-theme="dark"] .news-tab { background: #2a2a2a; border-color: #444; color: #ccc; }
[data-theme="dark"] .news-tab:hover, [data-theme="dark"] .news-tab.active { background: #ff6b6b; color: #fff; }
[data-theme="dark"] .news-item a { color: #ddd; }
[data-theme="dark"] .news-item { border-color: #333; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var list = document.getElementById('news-list');
  var tabs = document.querySelectorAll('.news-tab');

  // Stable news sources
  var API = {
    '60s': function() { return fetch60sNews(); },
    'weibo': function() { return fetchFromProxy('weibo'); },
    'zhihu': function() { return fetchFromProxy('zhihu'); },
    'bilibili': function() { return fetchFromProxy('bilibili'); },
    'douyin': function() { return fetchFromProxy('douyin'); }
  };

  // 60秒看世界 - 非常稳定的API
  async function fetch60sNews() {
    var res = await fetch('https://60s.viki.moe/?v2=1');
    var data = await res.json();
    if (data.code === 200 && data.data) {
      return data.data.news.map(function(item, i) {
        return { rank: i + 1, title: item, url: '#', hot: '' };
      });
    }
    throw new Error('API error');
  }

  // Try multiple proxy sources
  async function fetchFromProxy(type) {
    var urls = {
      weibo: [
        'https://api.vvhan.com/api/hotlist/wbHot',
        'https://api.gumengya.com/Api/HotList?type=weibo',
        'https://api.03c3.cn/api/zb?type=json'
      ],
      zhihu: [
        'https://api.vvhan.com/api/hotlist/zhihuHot',
        'https://api.gumengya.com/Api/HotList?type=zhihu'
      ],
      bilibili: [
        'https://api.vvhan.com/api/hotlist/biliHot',
        'https://api.gumengya.com/Api/HotList?type=bilibili'
      ],
      douyin: [
        'https://api.vvhan.com/api/hotlist/douyinHot',
        'https://api.gumengya.com/Api/HotList?type=douyin'
      ]
    };

    var urlList = urls[type] || [];
    for (var i = 0; i < urlList.length; i++) {
      try {
        var res = await fetch(urlList[i]);
        var data = await res.json();

        // Handle different API formats
        if (data.success && data.data) {
          return data.data.map(function(item, idx) {
            return { rank: idx + 1, title: item.title || item.name || item, url: item.url || item.link || '#', hot: item.hot || item.num || '' };
          });
        }
        if (data.code === 200 && data.data) {
          return data.data.map(function(item, idx) {
            return { rank: idx + 1, title: item.title || item.name || item, url: item.url || item.link || '#', hot: item.hot || item.num || '' };
          });
        }
        if (Array.isArray(data)) {
          return data.map(function(item, idx) {
            return { rank: idx + 1, title: item.title || item.name || item, url: item.url || item.link || '#', hot: item.hot || '' };
          });
        }
      } catch(e) { continue; }
    }
    throw new Error('All sources failed');
  }

  async function loadNews(type) {
    list.innerHTML = '<div class="loading">🌊 正在加载...</div>';
    try {
      var items = await API[type]();
      list.innerHTML = items.map(function(item) {
        var rank = item.rank <= 3 ? ' top' + item.rank : '';
        var hot = item.hot ? '<span class="news-hot">' + item.hot + '</span>' : '';
        if (item.url && item.url !== '#') {
          return '<div class="news-item"><span class="news-rank' + rank + '">' + item.rank + '</span><a href="' + item.url + '" target="_blank" rel="noopener"><span class="news-title">' + item.title + hot + '</span></a></div>';
        }
        return '<div class="news-item"><span class="news-rank' + rank + '">' + item.rank + '</span><a href="javascript:void(0)"><span class="news-title">' + item.title + hot + '</span></a></div>';
      }).join('');
    } catch(e) {
      list.innerHTML = '<div class="loading">😢 加载失败，换个源试试</div>';
      console.error('News load error:', e);
    }
  }

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
      loadNews(this.dataset.tab);
    });
  });

  loadNews('60s');
});
</script>
