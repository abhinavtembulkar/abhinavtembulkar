import React from 'react';
import { profile } from '../content';
export function ExternalLink({ href, children, ...props }) {
  return href ? <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a> : null;
}
export function ResumeLink({ className }) {
  return <ExternalLink href={profile.resume} className={className}>Résumé ↗</ExternalLink>;
}
export function Links() {
  return <><ExternalLink href={profile.github}>GitHub ↗</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn ↗</ExternalLink>{profile.email && <a href={`mailto:${profile.email}`}>Email ↗</a>}</>;
}
