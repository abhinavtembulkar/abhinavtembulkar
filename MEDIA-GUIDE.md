# Photo and video placement

Put media in `public/media/`. Reference it in `src/content.js` as
`'./media/filename'` — omit `public/` from URLs. Filenames are suggestions; you
can use your own as long as the configured path matches exactly, including case.

| Website placement | Suggested file | Field in `src/content.js` |
| --- | --- | --- |
| Design 1 cover / video poster | `public/media/cover.webp` | `profile.coverPhoto` |
| Design 1 silent looping background | `public/media/cover.mp4` | `profile.coverVideo` |
| Design 2 and About portrait | `public/media/portrait.webp` | `profile.portrait` |
| MegaPose thumbnail / video poster | `public/media/megapose-poster.webp` | `projects` → `id: 'megapose'` → `photo` |
| MegaPose full demo | `public/media/megapose-demo.mp4` | `megapose` → `video` |
| xArm6 thumbnail / video poster | `public/media/xarm-handover-poster.webp` | `handover` → `photo` |
| xArm6 full demo | `public/media/xarm-handover-demo.mp4` | `handover` → `video` |
| Qwen thumbnail / video poster | `public/media/qwen-turtlebot-poster.webp` | `qwen` → `photo` |
| Qwen full demo | `public/media/qwen-turtlebot-demo.mp4` | `qwen` → `video` |
| VertiEncoder plot / thumbnail | `public/media/vertiencoder-poster.webp` | `vertiencoder` → `photo` |
| VertiEncoder full demo | `public/media/vertiencoder-demo.mp4` | `vertiencoder` → `video` |
| Lab/setup gallery | `public/media/lab-setup.webp` | `gallery[0].photo` |
| Team gallery | `public/media/team-handover.webp` | `gallery[1].photo` |
| Hardware gallery | `public/media/turtlebot-hardware.webp` | `gallery[2].photo` |
| Clean current résumé | `public/resume.pdf` | `profile.resume: './resume.pdf'` |

Images: WebP or JPEG is a practical choice; PNG is useful for plots/screenshots.
Use a wide cover (around 1920 pixels across) and keep critical content away from
the edges because the cover crops to fill different screens. The default cover
text sits on the left. Project image frames are 16:10; they crop to fill. For a
plot that must remain uncropped, change `.project-visual .media img` to
`object-fit: contain` in `src/styles.css`.

Videos: use a browser-compatible MP4 (H.264). The cover is muted, looping, and has
a pause/play button. Add a poster photo. Project videos show standard controls
and are not autoplayed. Long demos can use `demoUrl` instead of a local video to
keep the site download smaller. This creates a normal outbound link, not an
embedded third-party player.

Leave unavailable files as empty strings. Don't put placeholder filenames into
the content until the files exist. Actual load errors fall back to an image or
illustration; in automatic cover mode, unavailable cover assets lead to Design 2.

No real photos or demo footage are included in this package. The code-drawn
illustrations are deliberately labeled as previews. Detailed shot planning is
left for the next design/media discussion.
