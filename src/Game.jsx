import { useEffect, useRef } from 'react'

// Coin Dash: a tiny canvas mini-game. Collect cyan coins, dodge pink blocks.
export default function Game({ onBest, onToast }) {
  const ref = useRef()
  useEffect(() => {
    var c=ref.current,x=c.getContext('2d'),W=c.width,H=c.height,cs=getComputedStyle(document.documentElement);
    var p,co,fo,sc,lv,t,run=false,best=0,tg=null,K={};
    function col(v){return cs.getPropertyValue(v).trim()}
    function reset(){p={x:W/2,y:H-40};co=[];fo=[];sc=0;lv=3;t=0}
    function sp(a,v){a.push({x:Math.random()*(W-16),y:-16,v:v+Math.random()*1.5})}
    function hit(o,s){return Math.abs(o.x+s/2-p.x-9)<(s+18)/2&&Math.abs(o.y+s/2-p.y-9)<(s+18)/2}
    function step(){
     t++;var m=5;
     if(K.ArrowLeft||K.a)p.x-=m;if(K.ArrowRight||K.d)p.x+=m;if(K.ArrowUp||K.w)p.y-=m;if(K.ArrowDown||K.s)p.y+=m;
     if(tg){p.x+=(tg.x-9-p.x)*.3;p.y+=(tg.y-9-p.y)*.3}
     p.x=Math.max(0,Math.min(W-18,p.x));p.y=Math.max(0,Math.min(H-18,p.y));
     if(t%26==0)sp(co,2);
     if(t%Math.max(14,46-Math.floor(sc/30))==0)sp(fo,2.5+sc/150);
     co=co.filter(function(o){o.y+=o.v;if(hit(o,14)){sc+=10;return false}return o.y<H});
     fo=fo.filter(function(o){o.y+=o.v;if(hit(o,18)){lv--;return false}return o.y<H});
     if(lv<=0){run=false;if(sc>best){best=sc;onBest(best)}if(sc>=100)onToast('SCORE '+sc+'. NICE RUN!')}
    }
    function ov(a,b2){x.fillStyle='rgba(0,0,0,.6)';x.fillRect(0,0,W,H);x.fillStyle=col('--c');x.font='18px "Press Start 2P",monospace';x.textAlign='center';x.fillText(a,W/2,H/2-6);x.fillStyle='#fff';x.font='11px "Press Start 2P",monospace';x.fillText(b2,W/2,H/2+24)}
    function draw(){
     x.fillStyle=col('--panel');x.fillRect(0,0,W,H);
     x.fillStyle=col('--line');for(var i=0;i<30;i++)x.fillRect((i*97+t)%W,(i*53)%H,2,2);
     co.forEach(function(o){x.fillStyle=col('--c');x.fillRect(o.x,o.y,14,14)});
     fo.forEach(function(o){x.fillStyle=col('--b');x.fillRect(o.x,o.y,18,18)});
     x.fillStyle=col('--a');x.fillRect(p.x,p.y,18,18);x.strokeStyle='#fff';x.strokeRect(p.x,p.y,18,18);
     x.fillStyle=col('--text');x.textAlign='left';x.font='11px "Press Start 2P",monospace';x.fillText('SCORE '+sc+'   LIVES '+'♥'.repeat(Math.max(lv,0)),10,20);
     if(!run)ov(t?'GAME OVER':'COIN DASH',t?'SCORE '+sc+' · CLICK TO RETRY':'CLICK TO START');
    }
    function loop(){if(!run){draw();return}step();draw();requestAnimationFrame(loop)}
    function pos(e){var r=c.getBoundingClientRect(),q=e.touches?e.touches[0]:e;return{x:(q.clientX-r.left)*W/r.width,y:(q.clientY-r.top)*H/r.height}}
    function go(e){if(!run){reset();run=true;loop()}if(e)tg=pos(e)}
    
    const mm = e => { tg = pos(e) }
    const md = e => go(e)
    const ts = e => { e.preventDefault(); go(e) }
    const tmv = e => { e.preventDefault(); tg = pos(e) }
    const key = e => (e.key.length == 1 ? e.key.toLowerCase() : e.key)
    const kd = e => { if (run && e.key.indexOf('Arrow') == 0) e.preventDefault(); K[key(e)] = 1 }
    const ku = e => { K[key(e)] = 0 }
    c.addEventListener('mousemove', mm); c.addEventListener('mousedown', md)
    c.addEventListener('touchstart', ts, { passive: false }); c.addEventListener('touchmove', tmv, { passive: false })
    addEventListener('keydown', kd); addEventListener('keyup', ku)
    reset(); draw()
    return () => {
      run = false
      c.removeEventListener('mousemove', mm); c.removeEventListener('mousedown', md)
      c.removeEventListener('touchstart', ts); c.removeEventListener('touchmove', tmv)
      removeEventListener('keydown', kd); removeEventListener('keyup', ku)
    }
  }, [])
  return <canvas id="g" ref={ref} width="640" height="320" />
}
