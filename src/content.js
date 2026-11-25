// ALL YOUR CONTENT LIVES HERE. See CONTENT-GUIDE.md for a field-by-field guide.
// Files in public/media/example.webp are referenced as './media/example.webp'.
// Leave optional URLs/media as '' to hide them. Do not use '#'.
export const profile = {
  name: 'Abhinav Tembulkar',
  firstName: 'Abhinav',
  lastName: 'Tembulkar',
  monogram: 'at.',
  specialty: 'Robotics & computer vision',
  headline: ['From pixels', 'to robot motion.'],
  subtitle: 'Perception. Code. Real robots.',
  intro: 'I build camera-based perception systems and connect them to real robots. My work spans 6-DoF tracking, ROS 2 integration, and human–robot interaction.',
  about: 'I’m a Computer Science and Engineering master’s graduate from the University at Buffalo. I enjoy the practical work between a vision model and a moving robot: calibrating cameras, aligning coordinate frames, integrating software, and understanding what happens when tracking fails.',
  availability: 'Interested in robotics software, perception, and computer vision opportunities.',
  educationLine: 'MS CSE · University at Buffalo',
  email: 'abhinavtembulkar@gmail.com',
  github: 'https://github.com/abhinavtembulkar',
  linkedin: 'https://www.linkedin.com/in/abhinav-tembulkar-12b665150/',
  // Existing public résumé link. Replace with './resume.pdf' after adding
  // a clean, up-to-date PDF at public/resume.pdf.
  resume: 'https://www.acsu.buffalo.edu/~atembulk/Robotics_Resume_Perception.pdf',

  coverPhoto: '', // './media/cover.webp' — wide cover photo / video poster
  coverVideo: '', // './media/cover.mp4' — optional muted looping MP4
  coverAlt: 'Abhinav working with a robot and camera setup',
  portrait: '', // './media/portrait.webp' — optional Design 2 / About photo
  portraitAlt: 'Abhinav Tembulkar',
};

// Array order is the order on the page. Add only results you have verified.
export const projects = [
  {
    id: 'megapose',
    category: 'Perception',
    status: 'Featured project',
    title: 'Real-time object pose tracking',
    description: 'A tracking pipeline built around MegaPose, connecting live camera input to 6-DoF pose estimates and ROS 2. Includes prior-frame propagation, tracking recovery, and TurtleBot integration.',
    contribution: 'I implemented tracking and recovery logic, connected camera input, and streamed pose estimates into ROS 2. MegaPose provides the underlying pose-estimation model.',
    details: [
      'Connect RGB camera observations and a CAD model to the pose-tracking pipeline.',
      'Propagate prior-frame estimates and recover when tracking is lost.',
      'Integrate camera calibration, coordinate transforms, and pose feedback with robot software.',
    ],
    results: [], // Example structure: ['Measured result, conditions, and evidence.']
    tags: ['MegaPose', 'ROS 2', 'OpenCV', 'ZED / RealSense'],
    illustration: 'pose',
    mediaLabel: 'Camera feed and object-pose overlay',
    file: 'megapose',
    photo: '', // './media/megapose-poster.webp'
    video: '', // './media/megapose-demo.mp4'
    demoUrl: '', // Public YouTube/Vimeo link; leave video blank if hosted elsewhere.
    code: '', // Public project repository URL.
    relatedWork: [], // Add the original MegaPose paper/repository with attribution.
    editingNote: 'Add hardware, camera resolution, measured timing, tracking recovery, and a recorded run. Separate model inference speed from end-to-end frame rate. Support the 15 FPS résumé claim with your own measurement before adding it here.',
  },
  {
    id: 'handover',
    category: 'Manipulation',
    status: 'Team project',
    title: 'Vision-guided human–robot handover',
    description: 'An xArm6 cup-handover team demo using hand and gesture perception. My contribution focused on perception and integration within the larger robot system.',
    contribution: 'I built MediaPipe/Viam perception modules for hand tracking and gestures, and integrated their outputs with the team’s handover system.',
    details: [
      'Expose hand position, handedness, and gesture information through custom Viam Vision modules.',
      'Use camera-to-world transforms to connect perception with arm behavior.',
      'Integrate bounded motion and gripper actions as software precautions in the team demo.',
    ],
    results: [],
    tags: ['xArm6', 'MediaPipe', 'Viam', 'Coordinate transforms'],
    illustration: 'arm',
    mediaLabel: 'xArm6, cup, and human handover',
    file: 'xarm-handover',
    photo: '', // './media/xarm-handover-poster.webp'
    video: '', // './media/xarm-handover-demo.mp4'
    demoUrl: '',
    code: '',
    relatedWork: [],
    editingNote: 'Add the team members, your exact modules, and one successful handover clip. Distinguish your perception/integration contribution from the team’s complete robot system.',
  },
  {
    id: 'qwen',
    category: 'Autonomy',
    status: 'In development',
    title: 'Language-guided TurtleBot navigation',
    description: 'A local Qwen vision-language model selects constrained motion primitives using pose feedback and a goal. Current work connects the model client to ROS 2 execution and motion checks.',
    contribution: 'I’m connecting the model client, pose feedback, and a ROS 2 motion interface in an ongoing prototype.',
    details: [
      'Translate a task goal and robot observations into a constrained action choice.',
      'Connect the selected action to the ROS 2 robot interface.',
      'Develop motion checks, stop conditions, and evaluation scenarios.',
    ],
    results: [],
    tags: ['Qwen', 'ROS 2', 'Python', 'TurtleBot3'],
    illustration: 'arena',
    mediaLabel: 'Task goal, chosen action, and robot motion',
    file: 'qwen-turtlebot',
    photo: '', // './media/qwen-turtlebot-poster.webp'
    video: '', // './media/qwen-turtlebot-demo.mp4'
    demoUrl: '',
    code: '',
    relatedWork: [],
    editingNote: 'Confirm the exact Qwen model and tested action set. Add a complete goal-to-outcome run, intervention count, stop conditions, and current limitations. Keep In development until the evidence supports a stronger status.',
  },
  {
    id: 'vertiencoder',
    category: 'Robot learning',
    status: 'Reproduction / study',
    title: 'Learning off-road robot dynamics',
    description: 'A VertiEncoder reproduction and study of learned off-road kinodynamics, including forward and inverse dynamics and behavior-cloning tasks.',
    contribution: 'I studied and reproduced parts of the VertiEncoder workflow, exploring learned dynamics and behavior cloning with simulation data.',
    details: [
      'Work with simulation data for off-road robot dynamics.',
      'Explore forward/inverse dynamics and behavior-cloning tasks.',
      'Compare reproduced behavior with the original work, keeping experimental conditions explicit.',
    ],
    results: [],
    tags: ['PyTorch', 'Transformers', 'Behavior cloning', 'BeamNG'],
    illustration: 'terrain',
    mediaLabel: 'Reproduction experiment or result plot',
    file: 'vertiencoder',
    photo: '', // './media/vertiencoder-poster.webp'
    video: '', // './media/vertiencoder-demo.mp4'
    demoUrl: '',
    code: '',
    relatedWork: [], // [{ label: 'Original paper', url: 'https://...' }]
    editingNote: 'Specify the experiments you actually ran and link the original paper/code. Add only your own plots and verified comparisons. Recheck the percentage results in the résumé before publishing them.',
  },
];

export const research = [
  {
    status: 'Ongoing',
    title: 'Multi-robot experimental evaluation',
    description: 'Developing a repeatable physical experimentation setup and evaluation plan for multi-robot research.',
    url: '',
    editingNote: 'Add the public research question, your role, collaborators, and validated outcomes when ready. RA-L is a target, not a publication claim.',
  },
  {
    status: 'Graduate research',
    title: 'Robot perception & pose estimation',
    description: 'Graduate research in robotics and perception at the University at Buffalo.',
    url: '',
    editingNote: 'Keep this high level while the thesis is under embargo. Add a public abstract or approved link only when shareable.',
  },
];

export const skills = [
  { title: 'Perception & vision', items: ['OpenCV', '6-DoF pose estimation', 'Camera calibration', 'RGB-D / point clouds', 'ZED / RealSense SDK'] },
  { title: 'Robotics & integration', items: ['ROS 2 / tf2', 'RViz / rosbag2', 'URDF', 'Viam SDK', 'Coordinate transforms'] },
  { title: 'Learning & models', items: ['PyTorch / CUDA', 'MediaPipe', 'Behavior cloning', 'MegaPose integration', 'Vision-language models'] },
  { title: 'Languages & software', items: ['Python / C++ / Bash', 'NumPy / Pandas', 'Linux / Git', 'Docker', 'REST APIs'] },
  { title: 'Hardware & testing', items: ['TurtleBot3', 'xArm6', 'Vicon', 'Camera setup', 'Experiment logging'] },
  { title: 'Simulation & tools', items: ['Gazebo', 'Blender', 'MATLAB', 'BeamNG', '3D printing'] },
];

export const education = [
  { dates: '2024 — 2026', degree: 'M.S. Computer Science & Engineering', school: 'University at Buffalo' },
  { dates: '2017 — 2021', degree: 'B.Tech. Computer Science & Engineering', school: 'University School of Information, Communication and Technology' },
];

export const experience = [
  {
    company: 'Insurance Samadhan', role: 'Full-stack Developer', dates: 'Sep 2022 — Jul 2024',
    description: 'Built REST API and chatbot integrations with Node.js and worked on API debugging and MongoDB-backed services.',
  },
  {
    company: 'Hudle', role: 'Full-stack Developer', dates: 'Nov 2021 — Jul 2022',
    description: 'Worked on recurring game scheduling and backend services using NestJS, MySQL, Cron, and AWS Lambda.',
  },
];

// This section stays hidden until at least one photo is added.
export const gallery = [
  { title: 'Lab & camera setup', photo: '', alt: 'Camera and robot experiment setup', file: 'lab-setup' },
  { title: 'The handover team', photo: '', alt: 'The team with the xArm6 handover setup', file: 'team-handover' },
  { title: 'TurtleBot hardware', photo: '', alt: 'TurtleBot and sensor integration', file: 'turtlebot-hardware' },
];
