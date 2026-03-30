---
title: 在线音乐
date: 2026-03-31 00:00:00
type: page
---

## 🎵 在线音乐

用音乐愉悦心情。

<div id="aplayer" style="margin:20px 0;"></div>

<div class="playlist-section">
  <h2>🎶 推荐歌单</h2>
  <div class="playlist-grid">
    <div class="playlist-card" onclick="loadPlaylist('638949385')">
      <div class="playlist-cover" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"><span>🎹</span></div>
      <div class="playlist-info"><h3>华语经典</h3><p>那些年我们听过的歌</p></div>
    </div>
    <div class="playlist-card" onclick="loadPlaylist('5008994272')">
      <div class="playlist-cover" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"><span>🎸</span></div>
      <div class="playlist-info"><h3>流行热歌</h3><p>2026最火歌曲</p></div>
    </div>
    <div class="playlist-card" onclick="loadPlaylist('7325478158')">
      <div class="playlist-cover" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"><span>🎷</span></div>
      <div class="playlist-info"><h3>轻松爵士</h3><p>慵懒午后时光</p></div>
    </div>
    <div class="playlist-card" onclick="loadPlaylist('2829883282')">
      <div class="playlist-cover" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"><span>🎵</span></div>
      <div class="playlist-info"><h3>轻音乐</h3><p>放松身心</p></div>
    </div>
  </div>
</div>

<div class="music-search">
  <input type="text" id="music-search-input" placeholder="🔍 搜索歌曲名或歌手..." />
  <button onclick="searchMusic()">搜索</button>
</div>
<div id="search-results" class="search-results"></div>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>

<style>
.playlist-section { margin: 30px 0; }
.playlist-section h2 { font-size: 1.3em; margin-bottom: 15px; }
.playlist-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
.playlist-card { display: flex; gap: 12px; padding: 12px; border-radius: 12px; background: #f8f8f8; cursor: pointer; transition: transform 0.2s; }
.playlist-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.playlist-cover { width: 60px; height: 60px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.5em; color: #fff; flex-shrink: 0; }
.playlist-info h3 { font-size: 0.95em; margin-bottom: 4px; }
.playlist-info p { font-size: 0.8em; color: #888; margin: 0; }
.music-search { display: flex; gap: 10px; margin: 20px 0; }
.music-search input { flex: 1; padding: 10px 15px; border: 1px solid #ddd; border-radius: 25px; outline: none; font-size: 0.95em; }
.music-search button { padding: 10px 20px; border: none; border-radius: 25px; background: #ff6b6b; color: #fff; cursor: pointer; font-size: 0.95em; }
.search-item { display: flex; align-items: center; padding: 10px; border-bottom: 1px solid #f0f0f0; cursor: pointer; }
.search-item:hover { background: #f8f8f8; }
.search-item-name { font-size: 0.95em; }
.search-item-artist { font-size: 0.8em; color: #888; }
</style>

<script>
var ap = null;
document.addEventListener('DOMContentLoaded', function() {
  ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: [
      { name: '晴天', artist: '周杰伦', url: 'https://music.163.com/song/media/outer/url?id=185809.mp3', cover: 'https://p1.music.126.net/3O5bE3nPIhC3F5C3bI5J_Q==/109951163350929741.jpg' },
      { name: '起风了', artist: '买辣椒也用券', url: 'https://music.163.com/song/media/outer/url?id=133998.mp3', cover: 'https://p1.music.126.net/51sMmjgU4b0eC1Mj0FZiPg==/18780754459196659.jpg' },
      { name: '孤勇者', artist: '陈奕迅', url: 'https://music.163.com/song/media/outer/url?id=1901371647.mp3', cover: 'https://p1.music.126.net/Qx2VjMaIbMX3GVuOFHCCcg==/109951166844283491.jpg' }
    ]
  });
});
async function loadPlaylist(id) {
  try {
    var res = await fetch('https://api.vvhan.com/api/music/netease/playlist?id=' + id);
    var data = await res.json();
    if (data.success && data.data) {
      var songs = data.data.map(function(s) { return { name: s.name, artist: s.artist, url: s.url, cover: s.pic||s.cover||'' }; }).filter(function(s) { return s.url; });
      if (songs.length > 0) { ap.list.clear(); ap.list.add(songs); ap.play(); }
    }
  } catch(e) { console.error(e); }
}
async function searchMusic() {
  var query = document.getElementById('music-search-input').value.trim();
  if (!query) return;
  var results = document.getElementById('search-results');
  results.innerHTML = '<div style="padding:20px;text-align:center;color:#999">🔍 搜索中...</div>';
  try {
    var res = await fetch('https://api.vvhan.com/api/music/netease/search?keywords=' + encodeURIComponent(query));
    var data = await res.json();
    if (data.success && data.data) {
      results.innerHTML = data.data.map(function(s) {
        return '<div class="search-item" onclick="playSong(\'' + (s.url||'') + '\',\'' + s.name + '\',\'' + (s.artist||'') + '\',\'' + (s.pic||'') + '\')"><div><div class="search-item-name">' + s.name + '</div><div class="search-item-artist">' + (s.artist||'') + '</div></div><span>▶</span></div>';
      }).join('');
    } else { results.innerHTML = '<div style="padding:20px;text-align:center;color:#999">没有找到结果</div>'; }
  } catch(e) { results.innerHTML = '<div style="padding:20px;text-align:center;color:#999">搜索失败</div>'; }
}
function playSong(url, name, artist, cover) {
  if (!url) return;
  ap.list.add([{ name: name, artist: artist, url: url, cover: cover }]);
  ap.list.switch(ap.list.audios.length - 1);
  ap.play();
}
</script>
