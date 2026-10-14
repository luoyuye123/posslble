import { useState } from 'react'
import './App.css'

const plans = [
  { icon: '↗', title: '燃脂塑形', meta: '45 分钟 · 中等强度', tone: 'coral' },
  { icon: '◎', title: '力量进阶', meta: '60 分钟 · 高强度', tone: 'blue' },
  { icon: '⌁', title: '瑜伽修复', meta: '35 分钟 · 低强度', tone: 'lime' },
]

const schedule = {
  一: ['07:30', '晨间唤醒', 'Mia'], 二: ['19:00', '全身燃脂', 'Leo'],
  三: ['18:30', '核心力量', 'Annie'], 四: ['20:00', '流动瑜伽', 'Mia'],
  五: ['19:30', '拳击有氧', 'Leo'],
}

const ArrowIcon = () => <span aria-hidden="true">↗</span>

function App() {
  const [activeDay, setActiveDay] = useState('三')
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="燃动首页"><span className="brand-mark">F</span><span>燃动<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" type="button" aria-label="打开导航" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <button type="button" onClick={() => scrollTo('courses')}>课程</button>
          <button type="button" onClick={() => scrollTo('coaches')}>教练</button>
          <button type="button" onClick={() => scrollTo('membership')}>会员</button>
          <button type="button" onClick={() => scrollTo('about')}>关于我们</button>
        </nav>
        <button className="nav-cta" type="button" onClick={() => scrollTo('membership')}>免费体验 <ArrowIcon /></button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> MOVE BETTER · LIVE STRONGER</div>
            <h1>重新定义<br /><em>你的可能</em></h1>
            <p className="hero-lead">科学训练，不止于改变身材。<br />与专业教练一起，成为更强大的自己。</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => scrollTo('courses')}>开始训练 <ArrowIcon /></button>
              <button className="text-link" type="button" onClick={() => scrollTo('about')}><span className="play">▶</span> 了解燃动</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>力</span><span>燃</span><span>动</span></div>
              <div><strong>12,000+</strong><small>训练者共同选择</small></div><div className="stars">★★★★★</div>
            </div>
          </div>
          <div className="hero-visual" aria-label="训练数据展示">
            <div className="visual-grid"></div>
            <div className="runner-shape"><span className="runner-head"></span><span className="runner-body"></span><span className="runner-arm"></span><span className="runner-leg leg-one"></span><span className="runner-leg leg-two"></span></div>
            <div className="pulse-card"><span className="pulse-icon">♥</span><div><strong>128</strong><small>实时心率 BPM</small></div><i></i><i></i><i></i><i></i><i></i></div>
            <div className="progress-ring"><span>78<small>%</small></span><p>今日目标</p></div>
            <div className="vertical-note">YOUR ONLY LIMIT IS YOU</div>
          </div>
        </section>

        <section className="stats-strip" aria-label="平台数据">
          <div><strong>50<sup>+</sup></strong><span>专业教练</span></div><div><strong>120<sup>+</sup></strong><span>精品课程</span></div><div><strong>98<sup>%</sup></strong><span>会员好评</span></div><p>每一次训练<br />都值得被记录 <span>↗</span></p>
        </section>

        <section className="section courses-section" id="courses">
          <div className="section-heading"><div><span className="kicker">EXPLORE CLASSES</span><h2>找到适合你的<br />训练方式</h2></div><p>无论你的目标是什么，我们都有科学且充满能量的课程，陪你稳步向前。</p></div>
          <div className="plan-grid">
            {plans.map((plan, index) => <article className={`plan-card ${plan.tone}`} key={plan.title}><div className="plan-number">0{index + 1}</div><div className="plan-icon">{plan.icon}</div><h3>{plan.title}</h3><p>{plan.meta}</p><button type="button" onClick={() => scrollTo('membership')}>查看课程 <ArrowIcon /></button></article>)}
          </div>
        </section>

        <section className="section schedule-section" id="coaches">
          <div className="schedule-copy"><span className="kicker">THIS WEEK</span><h2>本周热门<br />团体课程</h2><p>在同伴的能量中突破自己。选择日期，预约你的下一次训练。</p><div className="day-picker">{Object.keys(schedule).map((day) => <button className={activeDay === day ? 'active' : ''} type="button" key={day} onClick={() => setActiveDay(day)}>周{day}</button>)}</div></div>
          <div className="class-ticket"><div className="ticket-time"><small>开课时间</small><strong>{schedule[activeDay][0]}</strong></div><div className="ticket-main"><span>周{activeDay} · STUDIO 02</span><h3>{schedule[activeDay][1]}</h3><p>教练 {schedule[activeDay][2]} · 还剩 6 个名额</p></div><button type="button" aria-label="预约课程" onClick={() => scrollTo('membership')}>↗</button></div>
        </section>

        <section className="membership-section" id="membership">
          <div className="membership-card"><span className="kicker">START TODAY</span><h2>准备好，遇见<br />更强的自己了吗？</h2><p>首次到店即可领取 7 天体验会员，解锁全部团课与体测服务。</p><button className="button button-dark" type="button">领取免费体验 <ArrowIcon /></button><small>无需绑卡 · 随时开始</small></div>
          <div className="quote-card"><span className="quote-mark">“</span><blockquote>真正的改变，发生在你决定开始的那一刻。</blockquote><div><strong>林安</strong><span>燃动联合创始人 / 体能教练</span></div></div>
        </section>
      </main>

      <footer id="about"><a className="brand brand-light" href="#top"><span className="brand-mark">F</span><span>燃动.</span></a><p>让每个人，都能享受科学训练带来的改变。</p><div><a href="#courses">课程</a><a href="#coaches">教练</a><a href="#membership">会员</a></div><small>© 2026 FUEL FITNESS</small></footer>
    </div>
  )
}

export default App
