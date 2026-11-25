import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveCover } from '../src/cover.js';

test('manual modes override the availability of cover media', () => {
  assert.equal(resolveCover('design1'), 'design1');
  assert.equal(resolveCover('design2', { photo: './media/cover.webp', video: './media/cover.mp4' }), 'design2');
});
test('auto needs at least one usable cover asset', () => {
  assert.equal(resolveCover('auto'), 'design2');
  assert.equal(resolveCover('auto', { photo: '   ' }), 'design2');
  assert.equal(resolveCover('auto', { photo: './media/cover.webp' }), 'design1');
  assert.equal(resolveCover('auto', { video: './media/cover.mp4' }), 'design1');
});
test('a failed video uses its photo; failure of both assets uses Design 2', () => {
  const media = { photo: './cover.webp', video: './cover.mp4' };
  assert.equal(resolveCover('auto', { ...media, videoFailed: true }), 'design1');
  assert.equal(resolveCover('auto', { ...media, photoFailed: true }), 'design1');
  assert.equal(resolveCover('auto', { ...media, videoFailed: true, photoFailed: true }), 'design2');
});
test('unknown modes follow auto behavior', () => {
  assert.equal(resolveCover('typo'), 'design2');
  assert.equal(resolveCover('typo', { photo: './cover.webp' }), 'design1');
});
