# What to fill in, and where

The site is already filled with concise draft text based on your November 2026
robotics résumé, the earlier skills résumé, and the project context from this
conversation. The order prioritizes perception and robotics integration roles.
No unverified performance numbers have been placed on the page.

## 1. The cover

Open `src/site.config.js` and change `coverMode`:

- `'auto'` is a good default now. Without cover media it shows Design 2.
- `'design1'` forces the dark, cinematic cover.
- `'design2'` forces the light cover, even if you have a video.

Everything below the cover is identical. There is no public-facing design picker.

In the `profile` object in `src/content.js`:

| Field | Already filled / what you should add |
| --- | --- |
| `name`, `firstName`, `lastName` | Abhinav Tembulkar; used for the header and cover |
| `specialty` | Robotics & computer vision; keep this aligned with target jobs |
| `headline` | Design 1: From pixels / to robot motion. |
| `subtitle` | Design 2: Perception. Code. Real robots. |
| `intro` | Camera-based perception, 6-DoF tracking, ROS 2 integration, HRI |
| `coverPhoto` | Set to `'./media/cover.webp'` after adding a wide photo |
| `coverVideo` | Set to `'./media/cover.mp4'` after adding the optional loop |
| `coverAlt` | Describe the actual cover photo/scene once chosen |
| `portrait` | Optional `'./media/portrait.webp'`; appears in Design 2 and About |
| `portraitAlt` | An accessible description of your portrait |

Use an image of your actual robot/camera setup for the cover when available.
For now, Design 2 is complete without a portrait. Filming and shot planning can
be decided after the layout is approved.

## 2. The four projects, in order

Edit the `projects` array in `src/content.js`. Each object has an `id` to help you
find it. Its position in the array determines its position on the page.

| Position / ID | Why it belongs here | What you still need to fill |
| --- | --- | --- |
| 1 — `megapose` | Strongest perception/integration story; connects a model, camera, ROS 2, and a real robot | Camera and compute hardware, input resolution, exact tracking/recovery changes, your measured timing, repo link, full demo |
| 2 — `handover` | Visually clear hardware interaction; demonstrates perception inside a team system | Team credits, your custom MediaPipe/Viam modules, transforms/interfaces, observed handover behavior, demo and repo |
| 3 — `qwen` | Shows your current VLM-to-robot work while keeping its development status clear | Exact model/version, goal representation, permitted motion actions, stop/intervention behavior, tested scenarios and limitations |
| 4 — `vertiencoder` | Shows learning/reproduction depth after the hardware projects | Original paper/repo attribution, exact tasks reproduced, data and training setup, your plots, baselines and measured results |

### MegaPose tracking — lead project

The draft describes your pipeline around MegaPose, with prior-frame propagation,
recovery, camera integration, and ROS 2 streaming. Keep the distinction between
your implementation and the original MegaPose model.

Add to `details`: your exact pipeline stages, camera configuration, frame
conventions, and how the TurtleBot consumes pose information. Calibration and
Vicon validation are useful supporting evidence here; they do not need to be
separate featured projects.

Add to `results`: your measured end-to-end update rate, hardware/resolution,
measurement method, recovery behavior, and error relative to a reference if
available. Your résumé mentions 15 FPS; leave that off the site until you can
state the test conditions and support it with logs. Do not equate model inference
time with full-pipeline frame rate.

Preview media: a camera frame with a pose overlay. Full demo: the corresponding
physical robot/setup and tracking behavior. Suggested files:
`megapose-poster.webp` and `megapose-demo.mp4`.

### xArm6 handover — second project

The draft correctly frames this as a team project and highlights your
perception/integration work. Add the collaborators and identify the components
you personally built. Explain how hand position, handedness, gesture output,
coordinate transforms, arm motion, and gripper behavior connect.

Describe motion bounds and checks as implementation precautions. Do not claim
certified safety or independent full-system authorship.

Preview media: the arm, person, and cup in one scene. Full demo: the handover,
with a perception overlay if available. Suggested files:
`xarm-handover-poster.webp` and `xarm-handover-demo.mp4`.

### Qwen / TurtleBot — third project

Keep `status: 'In development'` until you have a repeatable run and evaluation.
The current text describes the integration goal without claiming a completed
navigation system.

Fill the exact model, model inputs, constrained actions, feedback loop,
stop conditions, and tested environment in `details`. Add real outcomes in
`results`: whether the goal was reached, interventions, failures, and relevant
constraints. A goal-to-outcome recording is more informative than isolated motion.
Suggested files: `qwen-turtlebot-poster.webp` and `qwen-turtlebot-demo.mp4`.

### VertiEncoder — fourth project

Keep the reproduction/study framing. State exactly which forward/inverse dynamics
and behavior-cloning experiments you ran. Separate the original authors’ results
from your own reproduced results.

Add your experiment plots and conditions. Recheck the résumé's percentage
comparisons against your own logs before publishing them. Use `relatedWork` for
the original paper/repository. Suggested files:
`vertiencoder-poster.webp` and `vertiencoder-demo.mp4`.

### The fields inside every project

| Field | What it controls |
| --- | --- |
| `id` | Stable anchor, such as `#megapose`; use unique lowercase names |
| `title`, `category`, `status` | Project heading, filter category, status label |
| `description` | Short summary visible in the project list; aim for 2–3 sentences |
| `contribution` | First-person ownership statement in the Project notes dialog |
| `details` | Bullet list inside Project notes: what you built, how, and why |
| `results` | Optional verified outcomes; the section stays hidden while this is `[]` |
| `tags` | A few relevant technologies below the summary |
| `photo` | Thumbnail/poster path; shown in the list |
| `video` | Local full demo path; controlled player inside Project notes |
| `demoUrl` | External YouTube/Vimeo link; adds a Watch demo link |
| `code` | Public repository link; blank means no Code button |
| `relatedWork` | Optional `{ label, url }` objects for original work or reports |
| `mediaLabel` | Accessible description for the media; update to match the asset |
| `file` | Suggested filename stem shown only in editing hints |
| `illustration` | Fallback illustration: `pose`, `arm`, `arena`, or `terrain` |
| `editingNote` | Your completion reminder, visible only with editing hints enabled |

Example after adding your files:

```js
photo: './media/megapose-poster.webp',
video: './media/megapose-demo.mp4',
demoUrl: '',
code: '', // Paste the actual public repository URL when ready.
results: [], // Add only your verified outcomes.
```

If you use an external video host, keep `video: ''` and fill `demoUrl`. Keep a
local poster photo so the row still has a good preview. When both `photo` and
`video` are set, the list uses the photo and the detail dialog uses the video.
Videos have standard player controls; project videos do not autoplay.

## 3. Research

Edit `research` in `src/content.js`.

- **Multi-robot experimental evaluation:** add the public research question,
  your role, collaborators, and validated results when available. The intended
  RA-L submission is a plan, not a publication or acceptance.
- **Graduate perception research:** keep the summary high level during the thesis
  embargo. Detailed unpublished methods/results should remain out. Fill `url`
  only when an approved public page or abstract is available.

No excavator project is included.

## 4. Skills, education, and earlier employment

The six `skills` groups are already filled from your résumé and confirmed project
context: perception, robotics integration, models, software, hardware, and tools.
Keep only skills you can discuss and demonstrate; reorder for a target role.
There are no arbitrary proficiency percentages.

`education` already lists UB MS CSE (2024–2026) and B.Tech. CSE (2017–2021).
Confirm the exact degree/school wording before sharing. GPAs are optional and
are not currently shown.

`experience` includes Insurance Samadhan (Sep 2022–Jul 2024) and Hudle
(Nov 2021–Jul 2022), using concise, non-metric software descriptions from your
résumé. These sit in About so they support, rather than displace, the robotics
work. Edit job-title capitalization to match your final résumé if necessary.
Set the array to `[]` to remove the employment subsection.

## 5. Photos, contact, and résumé

`gallery` contains optional lab, team, and TurtleBot slots. Each slot remains
hidden until its `photo` is filled. The entire gallery hides when all are blank.
A portrait is optional; About uses a text layout until one is added.

Your email, GitHub, and LinkedIn are filled. Review them in `profile`.
The Résumé buttons still point to the existing UB PDF. To update them:

1. Export a clean, current résumé. The November PDF contains an unfinished
   “New detail...” line in Coursework, so remove that before using it publicly.
2. Save the finished file as `public/resume.pdf`.
3. Set `profile.resume` to `'./resume.pdf'`.
4. Rebuild the website. The output will contain `dist/resume.pdf`.

Set `resume: ''` to hide the Résumé buttons temporarily.

## 6. Suggested completion order

1. Confirm bio, degree dates, contact links, and clean résumé.
2. Complete the MegaPose ownership statement and measured evidence.
3. Add xArm6 team credits and a clear demo.
4. Update Qwen's current state and VertiEncoder's reproduced experiments.
5. Add project posters and local videos or external demo links.
6. Add a cover asset when available; `auto` will then use Design 1.
7. Keep editing hints off, run `npm test` and `npm run build`, and review the output.

The layout is ready to use now with illustrative previews. Replacing them and
finishing the evidence will make it ready to send with job applications.
