---
title: 岛屿成员
date: 2026-03-31 02:00:00
type: page
---

## 🏝️ 岛屿成员

我们来自同一个微信群，12个人，12个故事。

<div class="members-grid" id="members-grid"></div>

<style>
.members-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
.member-card { background: #fff; border-radius: 16px; padding: 24px 16px; text-align: center; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 2px 10px rgba(0,0,0,0.06); text-decoration: none; color: #333; display: block; }
.member-card:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(0,0,0,0.12); }
.member-avatar { width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 12px; object-fit: cover; border: 3px solid #f0f0f0; }
.member-name { font-size: 1.1em; font-weight: bold; margin-bottom: 6px; }
.member-sign { font-size: 0.85em; color: #888; line-height: 1.4; }
[data-theme="dark"] .member-card { background: #2a2a2a; color: #ddd; }
[data-theme="dark"] .member-avatar { border-color: #444; }
</style>

<script>
var members = [
  { id: 'piaoye', name: '痞爷', sign: '盼哥', avatar: '/island-blog/images/痞爷.jpg' },
  { id: 'chuanfu', name: '川赴', sign: '机车爱好者', avatar: '/island-blog/images/川赴.jpg' },
  { id: 'dida', name: '滴答', sign: '钓鱼佬', avatar: '/island-blog/images/滴答.jpg' },
  { id: 'xiangdi', name: '℡', sign: '小黄毛祥弟', avatar: '/island-blog/images/℡.jpg' },
  { id: 'huanggou', name: '🌏', sign: '黄🐶', avatar: '/island-blog/images/🌏.jpg' },
  { id: 'shityanliang', name: '世态炎凉', sign: '云南', avatar: '/island-blog/images/世态炎凉.jpg' },
  { id: 'liaoyuanye', name: '燎原一叶', sign: '天生我才必有用，千金散尽还复来。', avatar: '/island-blog/images/燎原一叶.jpg' },
  { id: 'leishao', name: '雷少', sign: '兄弟们今晚来干酒！', avatar: '/island-blog/images/雷少.jpg' },
  { id: 'apeng', name: '阿鹏', sign: '贵州第三深情', avatar: '/island-blog/images/阿鹏.jpg' },
  { id: 'cxa', name: 'cxa', sign: '哈哈哈四眼仔', avatar: '/island-blog/images/cxa.jpg' },
  { id: 'feixiaolei', name: '会飞的小雷', sign: '少妇杀手喜欢开坦克', avatar: '/island-blog/images/会飞的小雷.jpg' },
  { id: 'fengyun', name: 'FENGYUN', sign: '年轻有为', avatar: '/island-blog/images/FENGYUN.jpg' },
];
var defaultAvatar = 'https://api.dicebear.com/7.x/initials/svg?backgroundColor=ff6b6b,ffd93d,6bcb77,4d96ff,9b59b6&seed=';
var grid = document.getElementById('members-grid');
members.forEach(function(m) {
  var avatar = m.avatar || defaultAvatar + encodeURIComponent(m.name);
  grid.innerHTML += '<a class="member-card" href="/island-blog/members/' + m.id + '.html">' +
    '<img class="member-avatar" src="' + avatar + '" alt="' + m.name + '" onerror="this.src='' + defaultAvatar + encodeURIComponent(m.name) + ''">' +
    '<div class="member-name">' + m.name + '</div>' +
    '<div class="member-sign">' + m.sign + '</div>' +
    '</a>';
});
</script>
