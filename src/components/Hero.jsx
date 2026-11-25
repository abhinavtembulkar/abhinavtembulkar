import React, { useState, useRef } from 'react';
import { profile } from '../content';
import { siteConfig } from '../site.config';
import { resolveCover } from '../cover';
import Media, { Illustration } from './Media';
import { Links, ResumeLink } from './Links';

function Header() {
  return <header className="site-header">
    <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
      <span className="mark">{profile.monogram}</span><span>{profile.firstName}<br />{profile.lastName}</span>
    </a>
    <nav aria-label="Main navigation">
      <a href="#work">Projects</a><a href="#research">Research</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a>
    </nav>
    <ResumeLink className="resume" />
  </header>;
}

export default function Hero() {
  const [failed, setFailed] = useState({ photoFailed: false, videoFailed: false });
  const [spot, setSpot] = useState({ x: 70, y: 40 });
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const videoRef = useRef(null);
  const design = resolveCover(siteConfig.coverMode, { photo: profile.coverPhoto, video: profile.coverVideo, ...failed });
  const cinematic = design === 'design1';
  const photo = failed.photoFailed ? '' : profile.coverPhoto;
  const video = failed.videoFailed ? '' : profile.coverVideo;
  const hasPortrait = profile.portrait && !portraitFailed;

  function toggleMotion() {
    if (videoRef.current) {
      if (playing) videoRef.current.pause();
      else videoRef.current.play().catch(() => setPlaying(false));
    } else setPaused(value => !value);
  }

  return <section id="top" data-cover={design} className={`hero ${cinematic ? 'cover-cinematic' : 'cover-editorial'} ${paused ? 'paused' : ''}`}
    style={{ '--mx': `${spot.x}%`, '--my': `${spot.y}%` }}
    onPointerMove={event => {
      if (!cinematic || event.pointerType === 'touch') return;
      const box = event.currentTarget.getBoundingClientRect();
      setSpot({ x: 100 * (event.clientX - box.left) / box.width, y: 100 * (event.clientY - box.top) / box.height });
    }}>
    {cinematic && <div className="cinema-background">
      <Media photo={photo} video={video} kind="pose" label={profile.coverAlt} path="public/media/cover.webp or cover.mp4" hero
        videoRef={videoRef} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onPhotoError={() => setFailed(value => ({ ...value, photoFailed: true }))}
        onVideoError={() => { setPlaying(false); setFailed(value => ({ ...value, videoFailed: true })); }} />
      <div className="cinema-shade" />
    </div>}
    <Header />
    <div className="hero-main">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />{profile.specialty}</p>
        {cinematic ? <><p className="hero-name">{profile.name}</p><h1>{profile.headline[0]}<br /><em>{profile.headline[1]}</em></h1></>
          : <><h1>{profile.firstName}<br /><em>{profile.lastName}.</em></h1><p className="hero-subtitle">{profile.subtitle}</p></>}
        <p className="hero-description">{profile.intro}</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore my work <span>↘</span></a><ResumeLink className="button secondary" /></div>
        <div className="social-links"><Links /></div>
      </div>
      {!cinematic && <div className={`editorial-portrait ${!hasPortrait ? 'without-portrait' : ''}`}>
        <span className="photo-index">{hasPortrait ? '01 / THE PERSON BEHIND THE CODE' : '01 / PERCEPTION IN PRACTICE'}</span>
        {hasPortrait ? <Media photo={profile.portrait} kind="portrait" label={profile.portraitAlt} path="public/media/portrait.webp" hero onPhotoError={() => setPortraitFailed(true)} />
          : <div className="technical-plate"><Illustration kind="pose" showLabel={false} /><div className="plate-caption"><span>CAMERA → POSE → MOTION</span><p>Making sense<br />of the physical world.</p></div></div>}
        <span className="portrait-note">Computer Science & Engineering<br /><b>University at Buffalo</b></span>
        <span className="portrait-stamp">perceive<br />build<br />test ↗</span>
      </div>}
    </div>
    <div className="hero-bottom">
      <span>{profile.educationLine}</span>
      {cinematic && (video || !photo) ? <button type="button" onClick={toggleMotion} aria-pressed={video ? playing : !paused}>
        {video ? (playing ? 'Pause video Ⅱ' : 'Play video ▷') : (paused ? 'Resume motion ▷' : 'Pause motion Ⅱ')}
      </button> : <span>Perception / Integration / Robot learning</span>}
      <a href="#work">SELECTED WORK ↓</a>
    </div>
  </section>;
}
