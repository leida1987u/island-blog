---
title: 岛屿投票
date: 2026-03-31 02:00:00
type: page
---

## 📊 岛屿投票

一起来投票吧！

<div id="vote-container"></div>

<div style="text-align:center;margin-top:30px;">
  <button class="create-vote-btn" onclick="showCreateForm()">➕ 发起投票</button>
</div>

<div id="create-form" style="display:none;max-width:500px;margin:20px auto;">
  <div class="create-card">
    <h3>创建新投票</h3>
    <input type="text" id="vote-question" placeholder="投票问题，如：周末去哪里玩？" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;margin-bottom:10px;">
    <div id="vote-options">
      <input type="text" placeholder="选项1" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:8px;margin-bottom:6px;">
      <input type="text" placeholder="选项2" style="width:100%;padding:8px;border:1px solid #ddd;border-radius:8px;margin-bottom:6px;">
    </div>
    <button onclick="addOption()" style="background:none;border:1px dashed #ddd;padding:6px 15px;border-radius:8px;cursor:pointer;margin-bottom:10px;color:#888">+ 添加选项</button><br>
    <button onclick="createVote()" style="background:#ff6b6b;color:#fff;border:none;padding:10px 25px;border-radius:20px;cursor:pointer;">发起投票</button>
  </div>
</div>

<style>
.vote-card { background: #fff; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 3px 15px rgba(0,0,0,0.08); max-width: 500px; margin-left: auto; margin-right: auto; }
.vote-card h3 { margin: 0 0 15px; font-size: 1.1em; }
.vote-option { display: flex; align-items: center; padding: 10px 14px; margin-bottom: 8px; background: #f8f8f8; border-radius: 10px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
.vote-option:hover { background: #f0f0f0; }
.vote-option.voted { background: #fff3f3; }
.vote-bar { position: absolute; left: 0; top: 0; bottom: 0; background: rgba(255,107,107,0.15); transition: width 0.5s; }
.vote-label { flex: 1; z-index: 1; }
.vote-pct { z-index: 1; font-weight: bold; color: #ff6b6b; min-width: 40px; text-align: right; }
.vote-meta { text-align: center; color: #aaa; font-size: 0.85em; margin-top: 10px; }
.create-vote-btn { padding: 10px 25px; border: 2px dashed #ddd; border-radius: 25px; background: transparent; color: #888; cursor: pointer; }
.create-vote-btn:hover { border-color: #ff6b6b; color: #ff6b6b; }
.create-card { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 3px 15px rgba(0,0,0,0.08); }
.create-card h3 { margin-top: 0; }
[data-theme="dark"] .vote-card, [data-theme="dark"] .create-card { background: #2a2a2a; box-shadow: 0 3px 15px rgba(0,0,0,0.3); }
[data-theme="dark"] .vote-option { background: #333; }
[data-theme="dark"] .vote-option.voted { background: #3a2a2a; }
</style>

<script>
var votes = JSON.parse(localStorage.getItem('island_votes') || '[]');

// Default votes if none exist
if (votes.length === 0) {
  votes = [
    { id: 1, question: '周末去哪里玩？', options: [
      { text: '爬山', votes: 5 },
      { text: '看电影', votes: 3 },
      { text: '聚餐', votes: 8 },
      { text: '宅家', votes: 2 }
    ], total: 18, creator: '毅哥', date: '2026-03-30' },
    { id: 2, question: '最想去哪个城市旅行？', options: [
      { text: '成都', votes: 4 },
      { text: '厦门', votes: 6 },
      { text: '大理', votes: 7 },
      { text: '新疆', votes: 3 }
    ], total: 20, creator: '成员03', date: '2026-03-28' }
  ];
}

function renderVotes() {
  var container = document.getElementById('vote-container');
  container.innerHTML = votes.map(function(v) {
    var total = v.options.reduce(function(s, o) { return s + o.votes; }, 0);
    return '<div class="vote-card"><h3>' + v.question + '</h3>' +
      v.options.map(function(o) {
        var pct = total > 0 ? Math.round(o.votes / total * 100) : 0;
        return '<div class="vote-option" onclick="vote(' + v.id + ',\'' + o.text + '\')"><div class="vote-bar" style="width:' + pct + '%"></div><span class="vote-label">' + o.text + '</span><span class="vote-pct">' + pct + '%</span></div>';
      }).join('') +
      '<div class="vote-meta">共 ' + total + ' 票 · 由 ' + v.creator + ' 发起 · ' + v.date + '</div></div>';
  }).join('');
}

function vote(id, text) {
  var v = votes.find(function(x) { return x.id === id; });
  if (v) {
    var o = v.options.find(function(x) { return x.text === text; });
    if (o) o.votes++;
    localStorage.setItem('island_votes', JSON.stringify(votes));
    renderVotes();
  }
}

function showCreateForm() {
  document.getElementById('create-form').style.display = 'block';
}

function addOption() {
  var div = document.getElementById('vote-options');
  var count = div.querySelectorAll('input').length + 1;
  var input = document.createElement('input');
  input.type = 'text';
  input.placeholder = '选项' + count;
  input.style = 'width:100%;padding:8px;border:1px solid #ddd;border-radius:8px;margin-bottom:6px;';
  div.appendChild(input);
}

function createVote() {
  var question = document.getElementById('vote-question').value.trim();
  if (!question) return alert('请输入投票问题');
  var inputs = document.getElementById('vote-options').querySelectorAll('input');
  var options = [];
  inputs.forEach(function(i) { if (i.value.trim()) options.push({ text: i.value.trim(), votes: 0 }); });
  if (options.length < 2) return alert('至少需要2个选项');
  var newVote = { id: Date.now(), question: question, options: options, creator: '岛民', date: new Date().toISOString().slice(0, 10) };
  votes.unshift(newVote);
  localStorage.setItem('island_votes', JSON.stringify(votes));
  document.getElementById('create-form').style.display = 'none';
  document.getElementById('vote-question').value = '';
  renderVotes();
}

renderVotes();
</script>
