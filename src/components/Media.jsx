import React, { useId, useState, useEffect } from 'react';
import { siteConfig } from '../site.config';
export function Robot({x=0,y=0,rotate=0}){return <g transform={`translate(${x} ${y}) rotate(${rotate})`}><ellipse cy="24" rx="48" ry="16" fill="#000" opacity=".2"/><rect x="-44" y="-22" width="13" height="48" rx="5" fill="#101a24"/><rect x="31" y="-22" width="13" height="48" rx="5" fill="#101a24"/><rect x="-32" y="-32" width="64" height="64" rx="14" fill="#2a4353" stroke="#b1d5cf" strokeWidth="2"/><path d="M-25-16H25M-25 18H25" stroke="#b1d5cf" opacity=".4"/><circle r="15" fill="#172735" stroke="#b1d5cf"/><circle r="5" fill="#b1d5cf"/><path d="M-9-25L0-37L9-25" fill="#b1d5cf"/></g>}
export function Illustration({kind='pose',showLabel=true}){const uid=useId().replace(/:/g,'');return <svg className="illustration" viewBox="0 0 640 400" role="img" aria-label={`Illustrative ${kind} placeholder, not recorded footage`}><defs><pattern id={uid} width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#b3cfdb" strokeWidth=".5" opacity=".22"/></pattern><radialGradient id={uid+'g'}><stop stopColor="#648d9b" stopOpacity=".3"/><stop offset="1" stopColor="#648d9b" stopOpacity="0"/></radialGradient></defs><rect width="640" height="400" fill="#142737"/><rect width="640" height="400" fill={`url(#${uid})`}/><ellipse cx="350" cy="210" rx="260" ry="180" fill={`url(#${uid}g)`}/>
 {kind==='pose'&&<><path d="M80 70H130M80 70V120M560 70H510M560 70V120M80 330H130M80 330V280M560 330H510M560 330V280" fill="none" stroke="#85b8ca" strokeWidth="2"/><g transform="translate(315 210) rotate(-20)"><Robot/><path d="M-65-65H65V65H-65Z" fill="none" stroke="#b6ebbf" strokeWidth="2"/><path d="M-65-65l24-22H89V43L65 65M89-87L65-65M89 43H-41L-65 65M-41 43V-87" fill="none" stroke="#b6ebbf" opacity=".6"/><path d="M0 0H110M0 0V-110M0 0L-70 80" stroke="#f0956e" strokeWidth="3"/><text x="115" y="5" fill="#f0956e">x</text><text x="-5" y="-120" fill="#f0956e">y</text></g></>}
 {kind==='arm'&&<><path d="M80 310H570" stroke="#a9bdc5"/><path d="M150 300L195 205L300 130L395 200" fill="none" stroke="#839aab" strokeWidth="35" strokeLinejoin="round"/><path d="M150 300L195 205L300 130L395 200" fill="none" stroke="#d2e0e6" strokeWidth="20" strokeLinejoin="round"/>{[[150,300],[195,205],[300,130],[395,200]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="19" fill="#223b51" stroke="#abcbd8" strokeWidth="4"/>)}<path d="M400 208L426 218L426 245M400 208L393 239L410 254" fill="none" stroke="#cadbe0" strokeWidth="7"/><path d="M435 238H465L460 280H440Z" fill="#dc9d79"/><path d="M560 278L501 267L470 272L456 287L486 299L537 307" fill="none" stroke="#81b8ae" strokeWidth="9" strokeLinecap="round"/><circle cx="486" cy="284" r="40" fill="none" stroke="#7fbcac" strokeDasharray="4 6"/></>}
 {kind==='arena'&&<><rect x="100" y="70" width="440" height="260" rx="4" fill="none" stroke="#acc2cb"/><path d="M180 275Q260 280 265 220T415 130" fill="none" stroke="#e4b07f" strokeWidth="3" strokeDasharray="8 9"/><Robot x={185} y={265} rotate={45}/><circle cx="420" cy="125" r="22" fill="none" stroke="#d6b88c"/><path d="M420 94V156M389 125H451" stroke="#d6b88c"/><rect x="355" y="230" width="80" height="40" rx="4" fill="#385164"/></>}
 {kind==='terrain'&&<>{Array.from({length:12},(_,i)=><path key={i} d={`M40 ${160+i*15} Q130 ${30+i*18} 230 ${160+i*12} T460 ${130+i*14} T650 ${140+i*15}`} fill="none" stroke="#7ea5a1" opacity={.25+i*.05}/>)}<Robot x={320} y={215} rotate={-30}/></>}
 {kind==='portrait'&&<><circle cx="320" cy="140" r="65" fill="#486474"/><path d="M180 400V320C180 190 460 190 460 320V400" fill="#486474"/><circle cx="320" cy="203" r="155" stroke="#b3c5cd" strokeDasharray="3 9" fill="none"/><text x="320" y="355" fill="#edf1f2" textAnchor="middle" fontSize="18" letterSpacing="4">YOUR PHOTO</text></>}
 {showLabel&&<text x="24" y="375" fill="#b4c7d0" fontSize="11" fontFamily="monospace" letterSpacing="2">ILLUSTRATIVE PLACEHOLDER</text>}</svg>}
export default function Media({ photo = '', video = '', kind = 'pose', label, path, hero = false,
  videoRef, onPlay, onPause, onPhotoError, onVideoError }) {
  const [failedVideo, setFailedVideo] = useState('');
  const [failedPhoto, setFailedPhoto] = useState('');
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const changed = () => {
      setReducedMotion(query.matches);
      if (query.matches && hero) videoRef?.current?.pause();
    };
    query.addEventListener('change', changed);
    return () => query.removeEventListener('change', changed);
  }, [hero, videoRef]);
  const usableVideo = video && failedVideo !== video;
  const usablePhoto = photo && failedPhoto !== photo;
  return <figure className={`media ${hero ? 'hero-media' : ''}`}>
    {usableVideo ? <video key={video} ref={videoRef} controls={!hero} autoPlay={hero && !reducedMotion} muted={hero} loop={hero} playsInline
      preload="metadata" poster={usablePhoto ? photo : undefined} aria-label={label} src={video}
      onPlay={onPlay} onPause={onPause} onError={() => { setFailedVideo(video); onVideoError?.(); }} />
      : usablePhoto ? <img key={photo} src={photo} alt={label} loading={hero ? 'eager' : 'lazy'} onError={() => { setFailedPhoto(photo); onPhotoError?.(); }} />
      : <Illustration kind={kind} />}
    {!usablePhoto && !usableVideo && !hero && <figcaption><span>↗</span><div>{label}<small>{siteConfig.showEditingHints ? 'Replace with your photo or demo' : 'Illustrative preview'}</small></div></figcaption>}
    {siteConfig.showEditingHints && path && <span className="media-path">{path}</span>}
  </figure>;
}
