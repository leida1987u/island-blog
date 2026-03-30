/* 岛屿来信 - 首页自定义脚本 */
document.addEventListener('DOMContentLoaded', function () {

  /* ====== 底部导航 + 弹窗样式（优先加载） ====== */
  try {
    var navStyle = document.createElement('style');
    navStyle.textContent = [
      '.mobile-bottom-nav{display:none;position:fixed;bottom:0;left:0;right:0;height:60px;background:#fff;',
      'box-shadow:0 -2px 10px rgba(0,0,0,.08);z-index:1000;justify-content:space-around;align-items:center;',
      'padding:0 10px;padding-bottom:env(safe-area-inset-bottom)}',
      '@media(max-width:768px){.mobile-bottom-nav{display:flex}body{padding-bottom:70px}}',
      '.nb-item{display:flex;flex-direction:column;align-items:center;text-decoration:none;color:#888;',
      'font-size:.7em;padding:8px 12px}',
      '.nb-item i{font-size:1.4em;margin-bottom:2px}',
      '.nb-item.active{color:#ff6b6b}',
      '.nb-center{position:relative}',
      '.nb-btn{width:48px;height:48px;border-radius:50%;border:none;',
      'background:linear-gradient(135deg,#ff6b6b,#ff8e53);color:#fff;font-size:1.4em;cursor:pointer;',
      'box-shadow:0 4px 15px rgba(255,107,107,.4);margin-top:-20px;',
      'display:flex;align-items:center;justify-content:center}',
      '#postModal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:2000;justify-content:center;align-items:center}',
      '.pm-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5)}',
      '.pm-dialog{position:fixed;bottom:0;left:0;right:0;max-width:500px;margin:0 auto;background:#fff;',
      'border-radius:20px 20px 0 0;padding:20px;z-index:2001}',
      '.pm-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}',
      '.pm-header h3{margin:0}',
      '.pm-close{background:none;border:none;font-size:1.2em;cursor:pointer}',
      '#postInput{width:100%;border:1px solid #eee;border-radius:12px;padding:12px;outline:none;box-sizing:border-box}',
      '.pm-footer{display:flex;justify-content:flex-end;margin-top:15px}',
      '.pm-submit{background:#ff6b6b;color:#fff;border:none;padding:10px 30px;border-radius:20px;cursor:pointer}'
    ].join('\n');
    document.head.appendChild(navStyle);
  } catch (e) { console.log('navStyle error:', e); }

  /* ====== 移动端底部导航 ====== */
  try {
    var nav = document.createElement('div');
    nav.className = 'mobile-bottom-nav';
    nav.innerHTML = [
      '<a href="/island-blog/" class="nb-item"><i class="fas fa-home"></i><span>\u9996\u9875</span></a>',
      '<a href="/island-blog/social/news/" class="nb-item"><i class="fas fa-compass"></i><span>\u53D1\u73B0</span></a>',
      '<div class="nb-center"><button class="nb-btn" id="nbPostBtn"><i class="fas fa-plus"></i></button></div>',
      '<a href="/island-blog/social/music/" class="nb-item"><i class="fas fa-music"></i><span>\u97F3\u4E50</span></a>',
      '<a href="/island-blog/members/" class="nb-item"><i class="fas fa-user"></i><span>\u6211\u7684</span></a>'
    ].join('');
    document.body.appendChild(nav);
  } catch (e) { console.log('nav error:', e); }

  /* ====== 发帖弹窗 ====== */
  try {
    var overlay = document.createElement('div');
    overlay.id = 'postModal';
    overlay.style.display = 'none';
    overlay.innerHTML = [
      '<div class="pm-overlay" id="pmOverlay"></div>',
      '<div class="pm-dialog">',
      '  <div class="pm-header">',
      '    <h3>\u270D\uFE0F \u5199\u70B9\u4EC0\u4E48</h3>',
      '    <button class="pm-close" id="pmClose">\u2715</button>',
      '  </div>',
      '  <textarea id="postInput" placeholder="\u5206\u4EAB\u4F60\u7684\u60F3\u6CD5..." rows="4"></textarea>',
      '  <div class="pm-footer">',
      '    <button class="pm-submit" id="pmSubmit">\u53D1\u5E03</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(overlay);

    document.getElementById('nbPostBtn').addEventListener('click', function () {
      overlay.style.display = 'flex';
    });
    document.getElementById('pmOverlay').addEventListener('click', function () {
      overlay.style.display = 'none';
    });
    document.getElementById('pmClose').addEventListener('click', function () {
      overlay.style.display = 'none';
    });
    document.getElementById('pmSubmit').addEventListener('click', function () {
      var c = document.getElementById('postInput').value.trim();
      if (c) {
        var p = JSON.parse(localStorage.getItem('island_posts') || '[]');
        p.unshift({ content: c, date: new Date().toISOString() });
        localStorage.setItem('island_posts', JSON.stringify(p));
        document.getElementById('postInput').value = '';
        overlay.style.display = 'none';
        alert('\u53D1\u5E03\u6210\u529F\uFF01\uD83C\uDF89');
      } else {
        alert('\u8BF7\u8F93\u5165\u5185\u5BB9');
      }
    });
  } catch (e) { console.log('postModal error:', e); }

  /* ====== 首页专属内容 ====== */
  var isHome = window.location.pathname === '/' ||
    window.location.pathname === '/island-blog/' ||
    window.location.pathname === '/island-blog/index.html';

  if (!isHome) return;

  // --- 头像 + 标题 + 快捷导航 ---
  try {
    var siteInfo = document.querySelector('#site-info');
    if (siteInfo) {
      var heroDiv = document.createElement('div');
      heroDiv.className = 'home-hero';
      heroDiv.innerHTML = [
        '<img class="hero-avatar" src="/island-blog/images/\u71CE\u539F\u4E00\u53F6.jpg" alt="\u6BC5\u54E5"',
        '  onerror="this.src=\'https://api.dicebear.com/7.x/initials/svg?seed=YiGe&backgroundColor=ff6b6b\'">',
        '<h1 class="hero-title">\u6BC5\u54E5\u548C\u4ED6\u7684\u5C0F\u4F19\u4F34\u4EEC \uD83C\uDFDD\uFE0F</h1>',
        '<p class="hero-subtitle">\u8BB0\u5F55\u751F\u6D3B\u4E2D\u7684\u7075\u611F\u788E\u7247 \xB7 \u4E00\u8D77\u6210\u957F</p>',
        '<div class="home-quick-nav">',
        '  <a href="/island-blog/social/discover/"><i class="fas fa-compass"></i><span>\u53D1\u73B0</span></a>',
        '  <a href="/island-blog/members/"><i class="fas fa-users"></i><span>\u6210\u5458</span></a>',
        '  <a href="/island-blog/social/music/"><i class="fas fa-music"></i><span>\u97F3\u4E50</span></a>',
        '  <a href="/island-blog/social/handwriting/"><i class="fas fa-pen-nib"></i><span>\u7B14\u8FF9</span></a>',
        '  <a href="/island-blog/social/photo/"><i class="fas fa-image"></i><span>\u6BCF\u65E5\u56FE</span></a>',
        '  <a href="/island-blog/social/news/"><i class="fas fa-fire"></i><span>\u70ED\u699C</span></a>',
        '  <a href="/island-blog/social/vote/"><i class="fas fa-poll"></i><span>\u6295\u7968</span></a>',
        '  <a href="/island-blog/about/"><i class="fas fa-heart"></i><span>\u5173\u4E8E</span></a>',
        '</div>'
      ].join('');
      siteInfo.appendChild(heroDiv);
    }
  } catch (e) { console.log('hero error:', e); }

  // --- 功能卡片 ---
  try {
    var recentPosts = document.querySelector('#recent-posts');
    if (recentPosts) {
      var featuresDiv = document.createElement('div');
      featuresDiv.className = 'home-features';
      var cards = [
        { icon: '\u270D\uFE0F', title: '\u7B14\u8FF9\u5206\u6790', desc: '\u4E0A\u4F20\u7B14\u8FF9\u56FE\u7247\uFF0C\u4E00\u952E\u5206\u6790\u4E66\u5199\u8005\u7684\u6027\u683C\u7279\u5F81', link: '/island-blog/social/handwriting/', linkText: '\u53BB\u5206\u6790 \u2192' },
        { icon: '\uD83C\uDFB5', title: '\u6BCF\u65E5\u6B4C\u66F2', desc: '\u6BCF\u5929\u63A8\u8350\u4E00\u9996\u597D\u6B4C\uFF0C\u7528\u97F3\u4E50\u6CBB\u6108\u5FC3\u7075', link: '/island-blog/social/music/', linkText: '\u53BB\u542C\u6B4C \u2192' },
        { icon: '\uD83D\uDCF8', title: '\u6BCF\u65E5\u4E00\u56FE', desc: '\u4E00\u5F20\u56FE\uFF0C\u4E00\u4E2A\u6545\u4E8B\uFF0C\u8BB0\u5F55\u751F\u6D3B\u4E2D\u7684\u7F8E\u597D\u77AC\u95F4', link: '/island-blog/social/photo/', linkText: '\u770B\u4ECA\u65E5\u7F8E\u56FE \u2192' },
        { icon: '\uD83D\uDDF3\uFE0F', title: '\u5C8B\u5C7F\u6295\u7968', desc: '\u53C2\u4E0E\u6709\u8DA3\u7684\u8BDD\u9898\u6295\u7968\uFF0C\u770B\u770B\u5927\u5BB6\u600E\u4E48\u60F3', link: '/island-blog/social/vote/', linkText: '\u53BB\u6295\u7968 \u2192' },
        { icon: '\uD83D\uDC65', title: '\u7FA4\u53CB\u5361\u7247', desc: '\u8BA4\u8BC6\u5C8B\u5C7F\u4E0A\u7684\u6BCF\u4E00\u4F4D\u5C0F\u4F19\u4F34', link: '/island-blog/members/', linkText: '\u8BA4\u8BC6\u5927\u5BB6 \u2192' },
        { icon: '\uD83D\uDD25', title: '\u5C8B\u5C7F\u70ED\u699C', desc: '\u6700\u70ED\u95E8\u7684\u8BA8\u8BBA\u548C\u8BDD\u9898\u90FD\u5728\u8FD9\u91CC', link: '/island-blog/social/news/', linkText: '\u53BB\u770B\u770B \u2192' }
      ];
      featuresDiv.innerHTML = cards.map(function (c) {
        return [
          '<div class="home-feature-card">',
          '  <div class="card-icon">' + c.icon + '</div>',
          '  <h3>' + c.title + '</h3>',
          '  <p>' + c.desc + '</p>',
          '  <a class="card-link" href="' + c.link + '">' + c.linkText + '</a>',
          '</div>'
        ].join('\n');
      }).join('');
      recentPosts.parentNode.insertBefore(featuresDiv, recentPosts);
    }
  } catch (e) { console.log('features error:', e); }

  // --- 日历 ---
  try {
    var calDiv = document.createElement('div');
    calDiv.className = 'island-calendar';
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var today = now.getDate();
    var monthNames = ['\u4E00\u6708', '\u4E8C\u6708', '\u4E09\u6708', '\u56DB\u6708', '\u4E94\u6708', '\u516D\u6708',
      '\u4E03\u6708', '\u516B\u6708', '\u4E5D\u6708', '\u5341\u6708', '\u5341\u4E00\u6708', '\u5341\u4E8C\u6708'];
    var dayHeaders = ['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D'];
    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    var calHTML = '<h2>\uD83D\uDCC5 ' + year + '\u5E74' + monthNames[month] + '</h2><div class="cal-grid">';
    for (var d = 0; d < 7; d++) calHTML += '<div class="cal-header">' + dayHeaders[d] + '</div>';
    for (var e = 0; e < firstDay; e++) calHTML += '<div class="cal-day empty"></div>';
    for (var day = 1; day <= daysInMonth; day++) {
      var cls = day === today ? 'cal-day today' : 'cal-day';
      calHTML += '<div class="' + cls + '">' + day + '</div>';
    }
    calHTML += '</div>';
    calDiv.innerHTML = calHTML;
    document.body.appendChild(calDiv);
  } catch (e) { console.log('calendar error:', e); }

  // --- 音乐播放器（仅在音乐页显示，不在首页碍事）---
  try {
    var isMusicPage = window.location.pathname.indexOf('/social/music/') >= 0;
    if (typeof APlayer !== 'undefined' && isMusicPage) {
      var apDiv = document.createElement('div');
      apDiv.id = 'island-aplayer';
      apDiv.className = 'island-aplayer';
      document.body.appendChild(apDiv);

      new APlayer({
        container: apDiv,
        mini: false,
        autoplay: false,  /* 移动端浏览器禁止自动播放，改为不自动 */
        theme: '#ff6b6b',
        loop: 'all',
        order: 'list',
        preload: 'metadata',
        volume: 0.7,
        listFolded: true,
        audio: [
          { name: '\u6674\u5929', artist: '\u5468\u6770\u4F26', url: 'https://music.163.com/song/media/outer/url?id=185809.mp3', cover: 'https://p2.music.126.net/PGROp8s3WwUGUF6nDrnQsw==/109951163351070665.jpg' },
          { name: '\u8D77\u98CE\u4E86', artist: '\u4E70\u8FA3\u6912\u4E5F\u7528\u5238', url: 'https://music.163.com/song/media/outer/url?id=1330348068.mp3', cover: 'https://p2.music.126.net/MxQVjgLdCDFgzW4wC6w0hA==/109951164064948650.jpg' },
          { name: '\u5149\u5E74\u4E4B\u5916', artist: '\u90D3\u7D2B\u68CB', url: 'https://music.163.com/song/media/outer/url?id=449818641.mp3', cover: 'https://p2.music.126.net/7fGgNkDLhFMEvIjY2knNew==/18613637708769609.jpg' },
          { name: '\u5E73\u51E1\u4E4B\u8DEF', artist: '\u6734\u6811', url: 'https://music.163.com/song/media/outer/url?id=28082802.mp3', cover: 'https://p1.music.126.net/wSMfGnjF1vYt7WU0hCLUhw==/2946384434909685.jpg' },
          { name: '\u7A3B\u9999', artist: '\u5468\u6770\u4F26', url: 'https://music.163.com/song/media/outer/url?id=185893.mp3', cover: 'https://p2.music.126.net/PGROp8s3WwUGUF6nDrnQsw==/109951163351070665.jpg' },
          { name: '\u6D77\u9614\u5929\u7A7A', artist: 'Beyond', url: 'https://music.163.com/song/media/outer/url?id=346576.mp3', cover: 'https://p2.music.126.net/FkIj7hGcTt9GO7Kf8EWCCQ==/109951163092191442.jpg' },
          { name: '\u5C0F\u5E78\u8FD0', artist: '\u7530\u99A8\u7504', url: 'https://music.163.com/song/media/outer/url?id=31654819.mp3', cover: 'https://p2.music.126.net/Wx8Ka8y4yx1zJNT7OyKnew==/7874032855214581.jpg' },
          { name: '\u591C\u66F2', artist: '\u5468\u6770\u4F26', url: 'https://music.163.com/song/media/outer/url?id=185868.mp3', cover: 'https://p2.music.126.net/PGROp8s3WwUGUF6nDrnQsw==/109951163351070665.jpg' },
          { name: '\u6F02\u6D0B\u8FC7\u6D77\u6765\u770B\u4F60', artist: '\u674E\u5B97\u76DB', url: 'https://music.163.com/song/media/outer/url?id=27955694.mp3', cover: 'https://p2.music.126.net/bj4GyU5Y8fQrh7JQ8iP0XQ==/109951163171819565.jpg' },
          { name: '\u540E\u6765', artist: '\u5218\u82E5\u82F1', url: 'https://music.163.com/song/media/outer/url?id=254490.mp3', cover: 'https://p2.music.126.net/2oBMEnvOwqg6B8-vKQi1Ng==/109951163092188323.jpg' }
        ]
      });
    }
  } catch (e) { console.log('APlayer init error:', e); }

});
