
(function(){
  function $(s){return document.querySelector(s)}
  function params(){return new URLSearchParams(window.location.search)}
  function escapeHtml(str){return str.replace(/[&<>"']/g, function(s){ return ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[s]; });}
  const qInput = $('#q'); const results = $('#results');
  fetch('/assets/js/search-index.json').then(function(r){return r.json()}).then(function(index){
    const q = (params().get('q')||'').trim(); if(qInput) qInput.value=q;
    if(!q){results.innerHTML='<p>Type a query and press Search.</p>'; return;}
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    const scored = index.map(function(item){
      const hay = (item.title+' '+item.content).toLowerCase();
      var score = 0;
      for(const t of terms){ if(hay.includes(t)) score++; }
      return {item: item, score: score};
    }).filter(function(x){return x.score>0}).sort(function(a,b){return b.score-a.score}).slice(0,50);
    if(scored.length===0){results.innerHTML='<p>No results.</p>'; return;}
    const ul = document.createElement('ul');
    for(const s of scored){
      const li = document.createElement('li');
      li.innerHTML = '<a href="'+s.item.url+'">'+escapeHtml(s.item.title)+'</a><br><small>'+escapeHtml(s.item.snippet)+'</small>';
      ul.appendChild(li);
    }
    results.innerHTML=''; results.appendChild(ul);
  }).catch(function(){ results.innerHTML='<p>Search index missing.</p>'; });
})();
