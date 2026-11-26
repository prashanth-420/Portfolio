import { useEffect, useRef, useState } from 'react'
import Game from './Game.jsx'
import { links, nav, titles, edu, jam, jobs, projects, papers, skills, awards } from './data.js'

const ACH = { play: 'MINI-GAME FOUND', about: 'PLAYER PROFILE LOADED', jam: 'JAM LOADOUT EQUIPPED', experience: 'QUESTS ACCEPTED', projects: 'LEVELS UNLOCKED', papers: 'RESEARCH BOSS DEFEATED', skills: 'SKILL TREE OPENED', achievements: 'TROPHY ROOM ENTERED', contact: 'FINAL LEVEL REACHED' }

const Tags = ({ items }) => <div className="tags">{items.map(t => <span key={t}>{t}</span>)}</div>
const Head = ({ title, sub }) => <><h2 className="px">{title}</h2><p className="sub">{sub}</p></>

export default function App() {
  const [load, setLoad] = useState(0)
  const [bootOff, setBootOff] = useState(false)
  const [typed, setTyped] = useState('')
  const [toast, setToast] = useState(null)
  const [best, setBest] = useState(0)
  const [pct, setPct] = useState(0)
  const tm = useRef()

  const notify = t => { setToast(t); clearTimeout(tm.current); tm.current = setTimeout(() => setToast(null), 2200) }

  useEffect(() => { const iv = setInterval(() => setLoad(n => Math.min(100, n + 7)), 80); return () => clearInterval(iv) }, [])
  useEffect(() => { if (load === 100) { const id = setTimeout(() => setBootOff(true), 250); return () => clearTimeout(id) } }, [load])

  useEffect(() => {
    let ti = 0, ci = 0, del = false, id
    const tick = () => {
      const w = titles[ti]
      if (!del) { ci++; if (ci > w.length) { del = true; id = setTimeout(tick, 1200); return } }
      else { ci--; if (ci < 0) { del = false; ci = 0; ti = (ti + 1) % titles.length } }
      setTyped(w.slice(0, Math.max(ci, 0)))
      id = setTimeout(tick, del ? 40 : 90)
    }
    tick()
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const onScroll = () => { const h = document.documentElement; setPct(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) }
    onScroll(); addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const seen = {}
    const io = new IntersectionObserver(es => es.forEach(e => {
      const id = e.target.id
      if (e.isIntersecting && ACH[id] && !seen[id]) { seen[id] = 1; notify(ACH[id]) }
    }), { threshold: 0.35 })
    Object.keys(ACH).forEach(k => { const el = document.getElementById(k); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div id="boot" className={'px' + (bootOff ? ' off' : '')} onClick={() => setBootOff(true)}>
        <div>LOADING PRASHANTH.EXE<b>{load}%</b></div>
      </div>
      <div id="toast" className={'px' + (toast ? ' on' : '')}><span>ACHIEVEMENT UNLOCKED</span>{toast}</div>
      <div id="hud" className="px">
        <span>LVL <b>{1 + Math.floor(pct * 8)}</b></span>
        <div className="hb"><i style={{ width: pct * 100 + '%' }} /></div>
        <span>BEST <b>{best}</b></span>
      </div>

      <nav>
        <a className="logo px" href="#home">PRM</a>
        <ul>{nav.map(([id, l]) => <li key={id}><a href={'#' + id}>{l}</a></li>)}</ul>
      </nav>

      <section id="home">
        <div className="tag px">PLAYER 1 READY</div>
        <h1 className="px">Hi, I’m <span>Prashanth Ram Mantri</span></h1>
        <p className="px" style={{ color: 'var(--c)', fontSize: '.8rem', minHeight: '2.4em' }}><span className="caret">{typed}</span></p>
        <p>Technical Lead of the MetaVerse Animation & Game Development Club at Anurag University. I build AI-powered apps, publish research, and ship projects under hackathon deadlines. Hyderabad, India.</p>
        <div><a className="btn px" href="#projects">▶ PRESS START</a><a className="btn px alt" href="#play">PLAY MY GAME</a></div>
      </section>

      <section id="play">
        <Head title="Insert Coin" sub="A tiny game I coded for this page. Collect the cyan coins, dodge the pink blocks." />
        <Game onBest={setBest} onToast={notify} />
        <p className="hint">Move with mouse, touch, or arrow keys / WASD. Click the screen to start.</p>
      </section>

      <section id="about">
        <Head title="Player Profile" sub="Class, backstory and stats." />
        <div className="about">
          <div className="avatar">Add your photo or pixel avatar</div>
          <div className="box">
            <h3 className="px" style={{ marginTop: 0 }}>Class: AI Developer</h3>
            <p>Final-year B.Tech student in Artificial Intelligence at Anurag University. I build full-stack and AI-powered apps, publish graph-learning research, and lead technical work for a game development club. I’ve also worked on India’s first regional Telugu LLM.</p>
            <div className="stats px"><div><b>4</b><span>Projects</span></div><div><b>1</b><span>Paper accepted</span></div><div><b>2</b><span>Hackathons</span></div></div>
            <h3 className="px" style={{ margin: '22px 0 6px' }}>Education</h3>
            {edu.map(([a, b]) => <div className="edu" key={a}><div>{a}</div><span>{b}</span></div>)}
          </div>
        </div>
      </section>

      <section id="jam">
        <Head title="Jam Loadout" sub="Ready for Game Jam Hyderabad 2026 (11–13 Dec, 48 hours)." />
        <div className="grid">{jam.map(([l, t, d]) => <div className="box" key={t}><span className="lvl px">{l}</span><h3 className="px">{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section id="experience">
        <Head title="Quest Log" sub="Work experience and positions of responsibility." />
        <div className="stack">{jobs.map(j => (
          <div className="box" key={j.title}>
            <span className="lvl px">{j.date}</span><h3 className="px">{j.title}</h3><p className="org">{j.org}</p>
            <ul>{j.points.map(p => <li key={p}>{p}</li>)}</ul>
            {j.tags && <Tags items={j.tags} />}
          </div>))}
        </div>
      </section>

      <section id="projects">
        <Head title="Levels (Projects)" sub="Pick a level to see the code." />
        <div className="grid">{projects.map(p => (
          <div className="box" key={p.title}>
            <span className="lvl px">{p.lvl}</span><h3 className="px">{p.title}</h3><p>{p.desc}</p>
            <Tags items={p.tags} /><a href={p.link} target="_blank" rel="noreferrer">View Code →</a>
          </div>))}
        </div>
      </section>

      <section id="papers">
        <Head title="Papers & Research" sub="Research that made it past the boss fight." />
        <div className="stack">{papers.map(p => (
          <div className="box paper" key={p.title}>
            <span className={'badge px' + (p.alt ? ' alt' : '')}>{p.badge}</span><h3 className="px">{p.title}</h3><p>{p.desc}</p>
            <Tags items={p.tags} />{p.link && <a href={p.link}>Read Paper →</a>}
          </div>))}
        </div>
      </section>

      <section id="skills">
        <Head title="Skill Tree" sub="Unlocked abilities." />
        <div className="grid sk">{Object.entries(skills).map(([k, v]) => <div className="box" key={k}><h3 className="px">{k}</h3><Tags items={v} /></div>)}</div>
      </section>

      <section id="achievements">
        <Head title="Achievements" sub="Badges unlocked." />
        <div className="grid">{awards.map(([d, t, p]) => <div className="box" key={t}><span className="lvl px">{d}</span><h3 className="px">{t}</h3><p>{p}</p></div>)}</div>
      </section>

      <section id="contact">
        <Head title="Join Party" sub="Open to collaborations and opportunities." />
        <div className="box">
          <b>Email</b><br /><a href={'mailto:' + links.email}>{links.email}</a><br /><br />
          <b>Location</b><br />Hyderabad, Telangana, India
          <div className="social"><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
      </section>

      <footer className="px">© {new Date().getFullYear()} PRASHANTH RAM MANTRI · THANKS FOR PLAYING</footer>
    </>
  )
}
