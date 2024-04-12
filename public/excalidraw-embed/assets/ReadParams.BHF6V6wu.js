const e=new URLSearchParams(window.location.search),a={theme:"light",background:"transparent"},n=new Proxy(e,{get:(r,t)=>r.get(t)?r.get(t):a[t]});export{n as p};
