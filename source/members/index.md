---
title: 岛屿成员
date: 2026-03-31 01:00:00
type: page
---

## 🏝️ 岛屿成员

我们来自同一个微信群，15个人，15个故事。

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
  { id: 'yige', name: '毅哥', sign: '生命在于折腾', avatar: '/island-blog/images/avatars/yige.jpg' },
  { id: 'member02', name: '成员02', sign: '一句话签名', avatar: '' },
  { id: 'member03', name: '成员03', sign: '一句话签名', avatar: '' },
  { id: 'member04', name: '成员04', sign: '一句话签名', avatar: '' },
  { id: 'member05', name: '成员05', sign: '一句话签名', avatar: '' },
  { id: 'member06', name: '成员06', sign: '一句话签名', avatar: '' },
  { id: 'member07', name: '成员07', sign: '一句话签名', avatar: '' },
  { id: 'member08', name: '成员08', sign: '一句话签名', avatar: '' },
  { id: 'member09', name: '成员09', sign: '一句话签名', avatar: '' },
  { id: 'member10', name: '成员10', sign: '一句话签名', avatar: '' },
  { id: 'member11', name: '成员11', sign: '一句话签名', avatar: '' },
  { id: 'member12', name: '成员12', sign: '一句话签名', avatar: '' },
  { id: 'member13', name: '成员13', sign: '一句话签名', avatar: '' },
  { id: 'member14', name: '成员14', sign: '一句话签名', avatar: '' },
  { id: 'member15', name: '成员15', sign: '一句话签名', avatar: '' }
];

var defaultAvatar = 'https://api.dicebear.com/7.x/initials/svg?backgroundColor=ff6b6b,ffd93d,6bcb77,4d96ff,9b59b6&seed=';

var grid = document.getElementById('members-grid');
members.forEach(function(m) {
  var avatar = m.avatar || defaultAvatar + encodeURIComponent(m.name);
  grid.innerHTML += '<a class="member-card" href="/island-blog/members/' + m.id + '/">' +
    '<img class="member-avatar" src="' + avatar + '" alt="' + m.name + '" onerror="this.src=\'' + defaultAvatar + encodeURIComponent(m.name) + '\'">' +
    '<div class="member-name">' + m.name + '</div>' +
    '<div class="member-sign">' + m.sign + '</div>' +
    '</a>';
});
</script>
