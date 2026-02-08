---
title: "Planktic Foraminifera Map"
subtitle: ""
date: 2026-02-07
lastmod: 2026-02-07
draft: false
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: "Interactive map of planktonic foraminifera relative abundance"
keywords: ""
license: ""
comment:
  enable: false
weight: 0

tags:
- foraminifera
- paleoceanography
categories:
- Science

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""

toc:
  enable: false
math:
  enable: false
lightgallery: false
seo:
  images: []

repost:
  enable: false
  url: ""
---

## Interactive visualisation of planktic foraminifera species distribution



<style>
.foram-controls {
  display: flex; gap: 16px; align-items: center;
  margin-bottom: 12px; flex-wrap: wrap;
}
.foram-controls label { font-size: 14px; font-weight: 500; }
.foram-controls select {
  padding: 4px 8px; border-radius: 4px;
  border: 1px solid #ccc; font-size: 13px;
  min-width: 140px;
}
#foram-chart {
  width: 100%; height: 620px;
  border: 1px solid #eee; border-radius: 6px;
  background: #fafafa;
}
</style>

<div class="foram-controls">
  <label>Dataset:
    <select id="dataset-sel">
      <option value="forcens">ForCenS (Pre-industrial)</option>
      <option value="lgm">LGM (Last Glacial Maximum)</option>
    </select>
  </label>
  <label>Species:
    <select id="species-sel"></select>
  </label>
</div>

<div id="foram-chart"></div>

<script src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.5.1/theme/shine.js"></script>
<script>
(async () => {
  const dom = document.getElementById('foram-chart');
  let chart = echarts.init(dom, 'shine', { renderer: 'canvas' });
  chart.showLoading();

  // Register world map for the geo component
  const worldResp = await fetch('https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json');
  const worldJson = await worldResp.json();
  echarts.registerMap('world', worldJson);

  // State
  const cache = {};
  let currentDataset = 'forcens';

  // ── Data helpers ──────────────────────────────────────────────────────
  async function loadDataset(name) {
    if (cache[name]) return cache[name];
    const resp = await fetch('/data/' + name + '_sp_r_diva.json');
    cache[name] = await resp.json();
    return cache[name];
  }

  function buildScatter(data, species) {
    const grid = data.data[species]; // [lat_idx][lon_idx]
    const points = [];
    let max = 0;
    for (let j = 0; j < data.lat.length; j++) {
      for (let i = 0; i < data.lon.length; i++) {
        const v = grid[j][i];
        if (v !== null) {
          points.push([data.lon[i], data.lat[j], v]);
          if (v > max) max = v;
        }
      }
    }
    return { points, max };
  }

  // ── Render ────────────────────────────────────────────────────────────
  function render(data, species) {
    const { points, max } = buildScatter(data, species);
    chart.setOption({
      title: {
        text: species,
        left: 'center', top: 6,
        textStyle: { fontSize: 15, fontWeight: 'normal' }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (p) {
          if (!p.data) return '';
          var lon = p.data[0], lat = p.data[1], val = p.data[2];
          var latS = Math.abs(lat).toFixed(1) + '\u00b0' + (lat >= 0 ? 'N' : 'S');
          var lonS = Math.abs(lon).toFixed(1) + '\u00b0' + (lon >= 0 ? 'E' : 'W');
          return species + '<br>' + latS + ', ' + lonS + '<br>Abundance: ' + val.toFixed(4);
        }
      },
      geo: {
        map: 'world',
        roam: true,
        top: 40, bottom: 70, left: 10, right: 10,
        boundingCoords: [[-180, 90], [180, -90]],
        itemStyle: { areaColor: '#f0f0f0', borderColor: '#ccc', borderWidth: 0.5 },
        emphasis: { disabled: true }
      },
      visualMap: {
        min: 0, max: max || 0.01,
        calculable: true,
        orient: 'horizontal',
        left: 'center', bottom: 8,
        itemWidth: 12, itemHeight: 140,
        inRange: { color: ['#313695','#4575b4','#74add1','#abd9e5','#e0f3f8','#ffffbf','#fee090','#fdae61','#f46d43','#d73027','#a50026'] },
        text: [(max || 0).toFixed(3), '0'],
        textStyle: { fontSize: 11 }
      },
      series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        data: points,
        symbol: 'rect',
        symbolSize: 5,
        itemStyle: { borderWidth: 0 },
        large: false,
        animation: false,
      }]
    }, true);
    drawTicks();
  }

  // ── Axis ticks & labels ────────────────────────────────────────────────
  function drawTicks() {
    var els = [];
    var tickLen = 6;
    [-180,-120,-60,0,60,120,180].forEach(function (lon) {
      var px = chart.convertToPixel('geo', [lon, -90]);
      if (!px) return;
      var s = lon === 0 ? '0°' : Math.abs(lon) + '°' + (lon > 0 ? 'E' : 'W');
      els.push({ type: 'line', shape: { x1: px[0], y1: px[1], x2: px[0], y2: px[1] + tickLen }, style: { stroke: '#888', lineWidth: 1 } });
      els.push({ type: 'text', style: { text: s, x: px[0], y: px[1] + tickLen + 2, textAlign: 'center', textVerticalAlign: 'top', fontSize: 10, fill: '#888' } });
    });
    [-60,-30,0,30,60].forEach(function (lat) {
      var px = chart.convertToPixel('geo', [-180, lat]);
      if (!px) return;
      var s = lat === 0 ? '0°' : Math.abs(lat) + '°' + (lat > 0 ? 'N' : 'S');
      els.push({ type: 'line', shape: { x1: px[0] - tickLen, y1: px[1], x2: px[0], y2: px[1] }, style: { stroke: '#888', lineWidth: 1 } });
      els.push({ type: 'text', style: { text: s, x: px[0] - tickLen - 2, y: px[1], textAlign: 'right', textVerticalAlign: 'middle', fontSize: 10, fill: '#888' } });
    });
    chart.setOption({ graphic: { elements: [{ type: 'group', children: els }] } });
  }

  // ── Controls ──────────────────────────────────────────────────────────
  function populateSpecies(data) {
    const sel = document.getElementById('species-sel');
    const prev = sel.value;
    sel.innerHTML = '';
    data.species.forEach(function (sp) {
      var opt = document.createElement('option');
      opt.value = sp; opt.textContent = sp;
      sel.appendChild(opt);
    });
    if (prev && data.species.indexOf(prev) >= 0) sel.value = prev;
    return sel.value || data.species[0];
  }

  document.getElementById('dataset-sel').addEventListener('change', async function (e) {
    currentDataset = e.target.value;
    chart.showLoading();
    var data = await loadDataset(currentDataset);
    chart.hideLoading();
    var sp = populateSpecies(data);
    render(data, sp);
  });

  document.getElementById('species-sel').addEventListener('change', function (e) {
    render(cache[currentDataset], e.target.value);
  });

  chart.on('georoam', drawTicks);
  window.addEventListener('resize', function () { chart.resize(); drawTicks(); });

  // ── Init ──────────────────────────────────────────────────────────────
  var data = await loadDataset('lgm');
  chart.hideLoading();
  var sp = populateSpecies(data);
  render(data, sp);
})();
</script>



Data source: [ForCenS](https://www.nature.com/articles/sdata2017109) and [ForCenS LGM](https://www.nature.com/articles/s41597-024-03166-7).


Powered by the  [ECharts](https://echarts.apache.org/) Feature of [FixIT theme](https://fixit.lruihao.cn/documentation/content-management/diagrams-support/echarts/)
