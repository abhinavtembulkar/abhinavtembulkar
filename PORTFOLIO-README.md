# Abhinav Tembulkar — portfolio

One portfolio, two interchangeable covers. The project list, research, skills,
About, and contact sections are identical in both modes.

## Start here

1. Edit `src/site.config.js` to choose the cover.
2. Edit `src/content.js` for every project, skill, contact link, and biography.
3. Add photos/videos to `public/media/` and connect their paths in `src/content.js`.
4. Read **CONTENT-GUIDE.md** for the project order and exact content to complete.

## Choose the cover

```js
export const siteConfig = {
  coverMode: 'auto',
  showEditingHints: false,
};
```

| Value | Cover behavior |
| --- | --- |
| `'design1'` | Dark cinematic cover. Uses your video, then photo; uses a clearly illustrative backdrop if neither is available. |
| `'design2'` | Light cover with your name and an optional portrait. Works without any photos or videos. |
| `'auto'` | Design 1 when a cover photo/video path is set and usable. Otherwise Design 2. This is the default. |

With `auto`, a failed video falls back to the cover photo. If all configured cover
files fail to load, the page switches to Design 2. If a browser prevents autoplay,
the video stays paused and the Play video control remains available. Add a cover
photo as its poster so the paused state looks good. Reduced-motion preferences
prevent automatic video playback and decorative animation.

`profile.portrait` is separate from cover media: adding a portrait alone does not
trigger Design 1. The same portrait appears in Design 2 and About.

`showEditingHints: true` displays filenames and project-completion notes. Leave it
`false` when sharing. Query strings from the old three-demo website do not change
the design; the source configuration is now the only cover setting.

## Run locally

Install Node.js 22 or a compatible newer version. Open a terminal in the extracted
project folder (the folder containing `package.json`).

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Save changes in your editor to update the preview.
Use Ctrl+C in the terminal to stop it.

## Build for hosting

```sh
npm test
npm run build
npm run preview
```

`npm run build` creates `dist/`. Upload **the contents** of `dist/` to the folder
served by your UB hosting account, or your GitHub Pages publishing workflow. The
relative `base: './'` setting supports a path such as `/~atembulk/` or a repository
subfolder. No backend, database, account system, or API key is required.

Do not upload `src/`, `node_modules/`, or the entire repository as the finished
website. Rebuild after every content/configuration change, then replace the old
compiled files. Put new media in `public/media/` before rebuilding.

The source download is portable: it omits this preview's hosting identity and Git
metadata. You can host the build independently.

## Project structure

| File / directory | Purpose |
| --- | --- |
| `src/site.config.js` | Cover setting and editing hints |
| `src/content.js` | All your text, project order, links, skills, education, employment, media paths |
| `src/components/Hero.jsx` | Both covers and automatic fallback |
| `src/components/Media.jsx` | Photos, video controls, illustrative placeholders, loading fallback |
| `src/App.jsx` | Shared sections, project filters, and detail dialog |
| `src/styles.css` | Responsive styling; cover colors are scoped to the cover |
| `public/media/` | Your photos, posters, and demo videos |
| `public/resume.pdf` | Add your clean current résumé here |
| `index.html` | Browser title and search description |
| `CONTENT-GUIDE.md` | Personalized fill-in guide |
| `MEDIA-GUIDE.md` | Media paths and formats |
| `tests/cover.test.js` | Four checks for manual modes and automatic fallback |

Fonts use Google Fonts with local system fallbacks; the small arrow font is
bundled with its license. The site still renders if Google Fonts cannot load.
SVG previews are illustrations, not photos or measured project results.
