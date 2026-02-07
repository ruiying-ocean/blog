---
title: "Planktic Foraminifera Map"
subtitle: ""
date: 2026-02-07
lastmod: 2026-02-07
draft: true
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: "Interactive map of planktonic foraminifera relative abundance from DIVAnd interpolation"
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
<script>
(async () => {
  const dom = document.getElementById('foram-chart');
  const chart = echarts.init(dom, null, { renderer: 'canvas' });
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
        itemStyle: { areaColor: '#f0f0f0', borderColor: '#ccc', borderWidth: 0.5 },
        emphasis: { disabled: true }
      },
      visualMap: {
        min: 0, max: max || 0.01,
        calculable: true,
        orient: 'horizontal',
        left: 'center', bottom: 8,
        itemWidth: 12, itemHeight: 140,
        inRange: {
          color: ['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026']
        },
        text: [(max || 0).toFixed(3), '0'],
        textStyle: { fontSize: 11 }
      },
      series: [{
        type: 'scatter',
        coordinateSystem: 'geo',
        data: points,
        symbol: 'rect',
        symbolSize: 5,
        large: false,
        animation: false,
      }]
    }, true);
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

  window.addEventListener('resize', function () { chart.resize(); });

  // ── Init ──────────────────────────────────────────────────────────────
  var data = await loadDataset('lgm');
  chart.hideLoading();
  var sp = populateSpecies(data);
  render(data, sp);
})();
</script>
