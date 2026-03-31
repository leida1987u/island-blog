---
title: 笔迹分析
date: 2026-03-31 00:00:00
type: page
---

## ✍️ 笔迹心理分析

上传笔迹图片，一键分析书写者的性格特征。

<div class="hw-container">
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
  <div class="hw-form" id="hwForm">
    <h3>📝 补充信息（可选）</h3>
    <div class="hw-field"><label>书写工具</label><select id="fTool"><option value="">不确定</option><option value="pen">钢笔/铅笔</option><option value="ballpoint">圆珠笔</option><option value="marker">马克笔/签字笔</option></select></div>
    <div class="hw-field"><label>书写目的</label><select id="fPurpose"><option value="">不确定</option><option value="natural">自然书写（笔记/草稿）</option><option value="formal">正式书写（作业/报告）</option><option value="copy">抄写/临摹</option></select></div>
    <div class="hw-field"><label>字的大小</label><div class="hw-options" data-key="size"><button class="hw-opt" data-val="small">偏小</button><button class="hw-opt active" data-val="medium">适中</button><button class="hw-opt" data-val="large">偏大</button></div></div>
    <div class="hw-field"><label>字体倾斜</label><div class="hw-options" data-key="tilt"><button class="hw-opt" data-val="left">左倾</button><button class="hw-opt active" data-val="upright">端正</button><button class="hw-opt" data-val="right">右倾</button><button class="hw-opt" data-val="mixed">不一致</button></div></div>
    <div class="hw-field"><label>字间距</label><div class="hw-options" data-key="charSpace"><button class="hw-opt" data-val="tight">很紧</button><button class="hw-opt active" data-val="normal">适中</button><button class="hw-opt" data-val="wide">偏大</button></div></div>
    <div class="hw-field"><label>行间距</label><div class="hw-options" data-key="lineSpace"><button class="hw-opt" data-val="tight">很紧</button><button class="hw-opt active" data-val="normal">适中</button><button class="hw-opt" data-val="wide">偏大</button></div></div>
    <div class="hw-field"><label>横画方向</label><div class="hw-options" data-key="hStroke"><button class="hw-opt" data-val="down">下斜</button><button class="hw-opt active" data-val="flat">平直</button><button class="hw-opt" data-val="up">上扬</button></div></div>
    <div class="hw-field"><label>书写速度感</label><div class="hw-options" data-key="speed"><button class="hw-opt" data-val="slow">慢而稳</button><button class="hw-opt active" data-val="medium">中等</button><button class="hw-opt" data-val="fast">快而流畅</button></div></div>
    <div class="hw-field"><label>笔压轻重</label><div class="hw-options" data-key="pressure"><button class="hw-opt" data-val="light">偏轻</button><button class="hw-opt active" data-val="medium">适中</button><button class="hw-opt" data-val="heavy">偏重</button></div></div>
    <div class="hw-field"><label>整体布局</label><div class="hw-options" data-key="layout"><button class="hw-opt" data-val="left">偏左</button><button class="hw-opt active" data-val="center">居中</button><button class="hw-opt" data-val="right">偏右</button><button class="hw-opt" data-val="full">写满</button></div></div>
    <button class="hw-analyze-btn" id="analyzeBtn">🔮 开始分析</button>
  </div>
  <div class="hw-result" id="hwResult" style="display:none">
    <h3>📊 分析报告</h3>
    <div id="resultContent"></div>
    <div class="hw-disclaimer">⚠️ 本分析基于笔迹心理学理论，仅供参考，不构成专业心理评估。</div>
  </div>
</div>
