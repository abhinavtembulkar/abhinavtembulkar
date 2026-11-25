// Kept separate so cover behavior can be checked without rendering the page.
export function resolveCover(mode, { photo = '', video = '', photoFailed = false, videoFailed = false } = {}) {
  if (mode === 'design1' || mode === 'design2') return mode;
  // Unknown values use the same safe default as "auto".
  return (photo.trim() && !photoFailed) || (video.trim() && !videoFailed)
    ? 'design1'
    : 'design2';
}
