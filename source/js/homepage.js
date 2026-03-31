/* 岛屿来信 - 仅音乐页播放器（其余功能已移至 bodyEnd.njk） */
document.addEventListener('DOMContentLoaded', function () {
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
        autoplay: false,
        theme: '#ff6b6b',
        loop: 'all',
        order: 'list',
        preload: 'metadata',
        volume: 0.7,
        listFolded: true,
        audio: [
          { name: '晴天', artist: '周杰伦', url: 'https://music.163.com/song/media/outer/url?id=185809.mp3', cover: 'https://p2.music.126.net/PGROp8s3WwUGUF6nDrnQsw==/109951163351070665.jpg' },
          { name: '起风了', artist: '买辣椒也用券', url: 'https://music.163.com/song/media/outer/url?id=1330348068.mp3', cover: 'https://p2.music.126.net/MxQVjgLdCDFgzW4wC6w0hA==/109951164064948650.jpg' },
          { name: '光年之外', artist: '邓紫棋', url: 'https://music.163.com/song/media/outer/url?id=449818641.mp3', cover: 'https://p2.music.126.net/7fGgNkDLhFMEvIjY2knNew==/18613637708769609.jpg' },
          { name: '平凡之路', artist: '朴树', url: 'https://music.163.com/song/media/outer/url?id=28082802.mp3', cover: 'https://p1.music.126.net/wSMfGnjF1vYt7WU0hCLUhw==/2946384434909685.jpg' },
          { name: '稻香', artist: '周杰伦', url: 'https://music.163.com/song/media/outer/url?id=185893.mp3', cover: 'https://p2.music.126.net/PGROp8s3WwUGUF6nDrnQsw==/109951163351070665.jpg' },
          { name: '海阔天空', artist: 'Beyond', url: 'https://music.163.com/song/media/outer/url?id=346576.mp3', cover: 'https://p2.music.126.net/FkIj7hGcTt9GO7Kf8EWCCQ==/109951163092191442.jpg' },
          { name: '小幸运', artist: '田馥甄', url: 'https://music.163.com/song/media/outer/url?id=31654819.mp3', cover: 'https://p2.music.126.net/Wx8Ka8y4yx1zJNT7OyKnew==/7874032855214581.jpg' },
          { name: '夜曲', artist: '周杰伦', url: 'https://music.163.com/song/media/outer/url?id=185868.mp3', cover: 'https://p2.music.126.net/PGROp8s3WwUGUF6nDrnQsw==/109951163351070665.jpg' },
          { name: '漂洋过海来看你', artist: '李宗盛', url: 'https://music.163.com/song/media/outer/url?id=27955694.mp3', cover: 'https://p2.music.126.net/bj4GyU5Y8fQrh7JQ8iP0XQ==/109951163171819565.jpg' },
          { name: '后来', artist: '刘若英', url: 'https://music.163.com/song/media/outer/url?id=254490.mp3', cover: 'https://p2.music.126.net/2oBMEnvOwqg6B8-vKQi1Ng==/109951163092188323.jpg' }
        ]
      });
    }
  } catch (e) { console.log('APlayer init error:', e); }
});
