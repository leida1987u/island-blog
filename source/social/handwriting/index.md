---
title: 笔迹分析
date: 2026-03-31 00:00:00
type: page
---

## ✍️ 笔迹心理分析

上传笔迹图片，一键分析书写者的性格特征。

<div class="hw-container">
  <!-- 上传区域 -->
  <div class="hw-upload-area" id="uploadArea">
    <input type="file" id="fileInput" accept="image/*" capture="environment" style="display:none">
    <div class="hw-upload-placeholder" id="uploadPlaceholder">
      <div class="hw-upload-icon">📷</div>
      <p>点击上传笔迹图片</p>
      <p class="hw-hint">支持拍照或从相册选择<br>建议：自然书写50字以上 + 签名</p>
    </div>
    <div class="hw-preview" id="preview" style="display:none">
      <img id="previewImg" alt="笔迹预览">
      <button class="hw-reupload" id="reuploadBtn">🔄 重新上传</button>
    </div>
  </div>

  <!-- 分析维度问卷 -->
  <div class="hw-form" id="hwForm">
    <h3>📝 补充信息（可选）</h3>

    <div class="hw-field">
      <label>书写工具</label>
      <select id="fTool">
        <option value="">不确定</option>
        <option value="pen">钢笔/铅笔</option>
        <option value="ballpoint">圆珠笔</option>
        <option value="marker">马克笔/签字笔</option>
      </select>
    </div>

    <div class="hw-field">
      <label>书写目的</label>
      <select id="fPurpose">
        <option value="">不确定</option>
        <option value="natural">自然书写（笔记/草稿）</option>
        <option value="formal">正式书写（作业/报告）</option>
        <option value="copy">抄写/临摹</option>
      </select>
    </div>

    <div class="hw-field">
      <label>字的大小</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="small">偏小</button>
        <button class="hw-opt active" data-val="medium">适中</button>
        <button class="hw-opt" data-val="large">偏大</button>
      </div>
    </div>

    <div class="hw-field">
      <label>字体倾斜</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="left">左倾</button>
        <button class="hw-opt active" data-val="upright">端正</button>
        <button class="hw-opt" data-val="right">右倾</button>
        <button class="hw-opt" data-val="mixed">不一致</button>
      </div>
    </div>

    <div class="hw-field">
      <label>字间距</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="tight">很紧</button>
        <button class="hw-opt active" data-val="normal">适中</button>
        <button class="hw-opt" data-val="wide">偏大</button>
      </div>
    </div>

    <div class="hw-field">
      <label>行间距</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="tight">很紧</button>
        <button class="hw-opt active" data-val="normal">适中</button>
        <button class="hw-opt" data-val="wide">偏大</button>
      </div>
    </div>

    <div class="hw-field">
      <label>横画方向</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="down">下斜</button>
        <button class="hw-opt active" data-val="flat">平直</button>
        <button class="hw-opt" data-val="up">上扬</button>
      </div>
    </div>

    <div class="hw-field">
      <label>书写速度感</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="slow">慢而稳</button>
        <button class="hw-opt active" data-val="medium">中等</button>
        <button class="hw-opt" data-val="fast">快而流畅</button>
      </div>
    </div>

    <div class="hw-field">
      <label>笔压轻重</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="light">偏轻</button>
        <button class="hw-opt active" data-val="medium">适中</button>
        <button class="hw-opt" data-val="heavy">偏重</button>
      </div>
    </div>

    <div class="hw-field">
      <label>整体布局</label>
      <div class="hw-options">
        <button class="hw-opt" data-val="left">偏左</button>
        <button class="hw-opt active" data-val="center">居中</button>
        <button class="hw-opt" data-val="right">偏右</button>
        <button class="hw-opt" data-val="full">写满</button>
      </div>
    </div>

    <button class="hw-analyze-btn" id="analyzeBtn">🔮 开始分析</button>
  </div>

  <!-- 分析结果 -->
  <div class="hw-result" id="hwResult" style="display:none">
    <h3>📊 分析报告</h3>
    <div id="resultContent"></div>
    <div class="hw-disclaimer">⚠️ 本分析基于笔迹心理学理论，仅供参考，不构成专业心理评估。</div>
  </div>
</div>

<style>
.hw-container { max-width: 700px; margin: 0 auto; padding: 0 20px 60px; }
.hw-upload-area { border: 2px dashed #ddd; border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 24px; cursor: pointer; transition: all 0.3s; background: #fafafa; }
.hw-upload-area:hover { border-color: #ff6b6b; background: #fff5f5; }
.hw-upload-icon { font-size: 3em; margin-bottom: 10px; }
.hw-hint { font-size: 0.8em; color: #aaa; margin-top: 8px; }
.hw-preview { position: relative; }
.hw-preview img { max-width: 100%; max-height: 400px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.hw-reupload { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.6); color: #fff; border: none; padding: 6px 14px; border-radius: 20px; cursor: pointer; font-size: 0.85em; }
.hw-form { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); margin-bottom: 24px; }
.hw-form h3 { margin: 0 0 20px; }
.hw-field { margin-bottom: 18px; }
.hw-field label { display: block; font-weight: 600; margin-bottom: 8px; color: #555; font-size: 0.9em; }
.hw-field select { width: 100%; padding: 10px 14px; border: 1px solid #ddd; border-radius: 10px; font-size: 0.95em; background: #fff; }
.hw-options { display: flex; gap: 8px; flex-wrap: wrap; }
.hw-opt { padding: 8px 16px; border: 1px solid #ddd; border-radius: 20px; background: #fff; cursor: pointer; font-size: 0.85em; transition: all 0.2s; }
.hw-opt:hover { border-color: #ff6b6b; }
.hw-opt.active { background: #ff6b6b; color: #fff; border-color: #ff6b6b; }
.hw-analyze-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #ff6b6b, #ff8e53); color: #fff; border: none; border-radius: 12px; font-size: 1.1em; font-weight: 600; cursor: pointer; transition: transform 0.2s; }
.hw-analyze-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,107,107,0.4); }
.hw-result { background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
.hw-result h3 { margin: 0 0 20px; }
.hw-dim { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f0f0f0; }
.hw-dim:last-child { border-bottom: none; }
.hw-dim-title { font-weight: 700; font-size: 1em; color: #333; margin-bottom: 6px; }
.hw-dim-positive { color: #4caf50; font-size: 0.9em; margin-bottom: 4px; }
.hw-dim-risk { color: #ff9800; font-size: 0.85em; margin-bottom: 4px; }
.hw-dim-note { color: #999; font-size: 0.8em; font-style: italic; }
.hw-confidence { text-align: center; padding: 12px; background: #f8f8f8; border-radius: 10px; margin-top: 16px; font-size: 0.85em; color: #888; }
.hw-disclaimer { text-align: center; margin-top: 16px; font-size: 0.75em; color: #ccc; }
[data-theme="dark"] .hw-upload-area { background: #1e1e1e; border-color: #444; }
[data-theme="dark"] .hw-upload-area:hover { background: #2a2a2a; border-color: #ff6b6b; }
[data-theme="dark"] .hw-form { background: #1e1e1e; }
[data-theme="dark"] .hw-field label { color: #bbb; }
[data-theme="dark"] .hw-field select { background: #2a2a2a; border-color: #444; color: #ddd; }
[data-theme="dark"] .hw-opt { background: #2a2a2a; border-color: #444; color: #ccc; }
[data-theme="dark"] .hw-result { background: #1e1e1e; }
[data-theme="dark"] .hw-dim-title { color: #ddd; }
[data-theme="dark"] .hw-confidence { background: #2a2a2a; color: #888; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var uploadArea = document.getElementById('uploadArea');
  var fileInput = document.getElementById('fileInput');
  var placeholder = document.getElementById('uploadPlaceholder');
  var preview = document.getElementById('preview');
  var previewImg = document.getElementById('previewImg');
  var reuploadBtn = document.getElementById('reuploadBtn');
  var analyzeBtn = document.getElementById('analyzeBtn');
  var hwResult = document.getElementById('hwResult');
  var resultContent = document.getElementById('resultContent');

  // 上传点击
  uploadArea.addEventListener('click', function(e) {
    if (e.target === reuploadBtn || e.target.parentNode === reuploadBtn) return;
    fileInput.click();
  });
  reuploadBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    fileInput.click();
  });

  // 文件选择
  fileInput.addEventListener('change', function() {
    var file = this.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      previewImg.src = e.target.result;
      placeholder.style.display = 'none';
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });

  // 选项按钮切换
  document.querySelectorAll('.hw-options').forEach(function(group) {
    group.querySelectorAll('.hw-opt').forEach(function(btn) {
      btn.addEventListener('click', function() {
        group.querySelectorAll('.hw-opt').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
      });
    });
  });

  // 分析逻辑
  analyzeBtn.addEventListener('click', function() {
    var data = {
      size: getVal('.hw-field:nth-child(3) .hw-opt'),
      tilt: getVal('.hw-field:nth-child(4) .hw-opt'),
      charSpace: getVal('.hw-field:nth-child(5) .hw-opt'),
      lineSpace: getVal('.hw-field:nth-child(6) .hw-opt'),
      hStroke: getVal('.hw-field:nth-child(7) .hw-opt'),
      speed: getVal('.hw-field:nth-child(8) .hw-opt'),
      pressure: getVal('.hw-field:nth-child(9) .hw-opt'),
      layout: getVal('.hw-field:nth-child(10) .hw-opt')
    };

    var dims = analyze(data);
    var html = '';
    dims.forEach(function(d) {
      html += '<div class="hw-dim">' +
        '<div class="hw-dim-title">' + d.name + '</div>' +
        '<div class="hw-dim-positive">✅ ' + d.positive + '</div>' +
        '<div class="hw-dim-risk">⚠️ ' + d.risk + '</div>' +
        (d.note ? '<div class="hw-dim-note">💡 ' + d.note + '</div>' : '') +
        '</div>';
    });
    html += '<div class="hw-confidence">本分析综合了 ' + dims.length + ' 个维度的特征，置信度：中等。如需更准确分析，请提供多份不同情境下的笔迹样本。</div>';
    resultContent.innerHTML = html;
    hwResult.style.display = 'block';
    hwResult.scrollIntoView({ behavior: 'smooth' });
  });

  function getVal(sel) {
    var active = document.querySelector(sel + '.active');
    return active ? active.dataset.val : '';
  }

  function analyze(d) {
    var results = [];

    // 字大小
    if (d.size === 'small') {
      results.push({ name: '🧩 思维方式', positive: '谨慎内敛，注重细节，善于专注和深入思考', risk: '可能过于拘谨，视野有时偏窄', note: '小字通常反映精力更多放在个人成长上' });
    } else if (d.size === 'large') {
      results.push({ name: '🧩 思维方式', positive: '心胸开阔，外向自信，视野宽广', risk: '可能有时不够细致，容易忽视细节', note: '大字反映需要更多空间来表达自我' });
    } else {
      results.push({ name: '🧩 思维方式', positive: '思维均衡，既有大局观也关注细节', risk: '特征不明显，需结合其他维度判断', note: '适中字体反映较为平衡的心理状态' });
    }

    // 倾斜方向
    if (d.tilt === 'left') {
      results.push({ name: '🛡️ 城府与自我保护', positive: '自我保护意识强，善于回顾反思', risk: '可能偏回避型，面对未来推进时谨慎', note: '左倾可能反映偏依恋过去、对未知持保守态度' });
    } else if (d.tilt === 'right') {
      results.push({ name: '🛡️ 城府与自我保护', positive: '面对现实有勇气，情感外露坦诚', risk: '可能情绪化，缺乏自我保护缓冲', note: '适度右倾(~5°)是较理想的心理健康表现' });
    } else if (d.tilt === 'mixed') {
      results.push({ name: '🛡️ 城府与自我保护', positive: '灵活应变，不拘一格', risk: '情绪可能不够稳定，容易走极端', note: '方向不一致通常反映情绪波动较大' });
    } else {
      results.push({ name: '🛡️ 城府与自我保护', positive: '冷静理智，善于推理，有主见', risk: '可能过于理性，情感表达偏克制', note: '端正垂直反映较强的自律自控能力' });
    }

    // 字间距
    if (d.charSpace === 'tight') {
      results.push({ name: '👥 人际距离感', positive: '亲近感强，愿意与人亲近', risk: '可能缺乏边界感，分不清轻重缓急', note: '字间距过小反映对他人的心理距离很近' });
    } else if (d.charSpace === 'wide') {
      results.push({ name: '👥 人际距离感', positive: '有边界感，注重个人空间', risk: '可能内向保守，防卫心较重', note: '字间距大反映希望与他人保持较远的心理距离' });
    } else {
      results.push({ name: '👥 人际距离感', positive: '思维清晰有条理，有辨别判断能力', risk: '特征均衡，无明显风险面', note: '适中字间距反映良好的社会适应性' });
    }

    // 横画方向
    if (d.hStroke === 'up') {
      results.push({ name: '💪 意志力与进取心', positive: '积极主动，有目标感，敢于追求', risk: '可能过于执着，听不进他人意见', note: '上扬横画反映向上的心理动力' });
    } else if (d.hStroke === 'down') {
      results.push({ name: '💪 意志力与进取心', positive: '随和不强势，包容度高', risk: '可能缺乏热情，有消极顺从倾向', note: '下滑横画需结合笔压判断：重压=倔强不服输，轻压=顺从' });
    } else {
      results.push({ name: '💪 意志力与进取心', positive: '稳重踏实，做事有分寸', risk: '进取心适中，缺少爆发力', note: '平直横画反映理性稳健的行事风格' });
    }

    // 速度感
    if (d.speed === 'fast') {
      results.push({ name: '⚡ 做事风格', positive: '思维敏捷，行动力强，效率高', risk: '可能做事不够仔细，虎头蛇尾', note: '快速书写反映较强的心理能量和行动导向' });
    } else if (d.speed === 'slow') {
      results.push({ name: '⚡ 做事风格', positive: '做事认真仔细，准备充分，稳扎稳打', risk: '可能决策偏慢，错过时机', note: '慢速书写反映谨慎、需要安全感的心理需求' });
    } else {
      results.push({ name: '⚡ 做事风格', positive: '张弛有度，能把握节奏', risk: '特征均衡', note: '中等速度反映较为平衡的心理节奏' });
    }

    // 笔压
    if (d.pressure === 'heavy') {
      results.push({ name: '🔥 个人气质', positive: '意志坚定，有主见，做事有力度', risk: '可能固执己见，不易通融', note: '重笔压反映较强的自我意识' });
    } else if (d.pressure === 'light') {
      results.push({ name: '🔥 个人气质', positive: '温和细腻，感受力强', risk: '可能缺乏坚定立场，不够果断', note: '轻笔压反映偏柔和的气质' });
    } else {
      results.push({ name: '🔥 个人气质', positive: '刚柔并济，能根据情境调整', risk: '特征均衡', note: '适中笔压反映灵活的心理调节能力' });
    }

    // 行间距
    if (d.lineSpace === 'wide') {
      results.push({ name: '🌐 社会适应', positive: '注重个人边界，不随波逐流', risk: '可能对群体有疏离感，不愿被束缚', note: '大行间距反映希望与群体保持较远心理距离' });
    } else if (d.lineSpace === 'tight') {
      results.push({ name: '🌐 社会适应', positive: '愿意融入群体，社交意愿强', risk: '可能缺乏个人空间意识', note: '小行间距反映较强的群体归属需求' });
    } else {
      results.push({ name: '🌐 社会适应', positive: '既能融入也能保持独立', risk: '特征均衡', note: '适中行间距反映良好的社会平衡能力' });
    }

    // 布局
    if (d.layout === 'left') {
      results.push({ name: '🧭 对未来态度', positive: '脚踏实地，注重根基', risk: '可能偏保守，对未来有不安感', note: '偏左布局可能反映更愿待在安全区' });
    } else if (d.layout === 'right') {
      results.push({ name: '🧭 对未来态度', positive: '面向未来，积极进取', risk: '可能急于求成', note: '偏右布局反映对未来的期待和推进' });
    } else if (d.layout === 'full') {
      results.push({ name: '🧭 对未来态度', positive: '充分利用资源，行动力强', risk: '可能过于忙碌，不够放松', note: '写满空间反映较强的秩序感和控制感' });
    } else {
      results.push({ name: '🧭 对未来态度', positive: '注重平衡，有节奏感', risk: '特征均衡', note: '居中布局反映较为稳健的心理状态' });
    }

    return results;
  }
});
</script>
