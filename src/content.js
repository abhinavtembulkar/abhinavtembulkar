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
  intro: 'I build camera-based perception systems for robots. I work on live pose tracking for TurtleBots and hand tracking for an xArm6 cup handover.',
  about: 'I’m a Computer Science and Engineering master’s graduate from the University at Buffalo. I enjoy the practical work between a vision model and a moving robot: calibrating cameras, aligning coordinate frames, integrating software, and understanding what happens when tracking fails.',
  availability: 'Interested in robotics software, perception, and computer vision opportunities.',
  educationLine: 'MS CSE · University at Buffalo',
  email: 'abhinavtembulkar@gmail.com',
  github: 'https://github.com/abhinavtembulkar',
  linkedin: 'https://www.linkedin.com/in/abhinav-tembulkar-12b665150/',
  // Existing public résumé link. Replace with './resume.pdf' after adding
  // a clean, up-to-date PDF at public/resume.pdf.
  resume: 'https://www.acsu.buffalo.edu/~atembulk/Robotics_Resume_Perception.pdf',

  coverPhoto: './media/wafflebot-assembly.webp',
  coverVideo: '', // './media/cover.mp4' — optional muted looping MP4
  coverAlt: 'Abhinav assembling a TurtleBot Waffle at his lab workbench',
  coverCaption: 'Me assembling a waffelbot3',
  portrait: '', // './media/portrait.webp' — optional Design 2 / About photo
  portraitAlt: 'Abhinav Tembulkar',
};

// Array order is the order on the page. Add only results you have verified.
export const projects = [
  {
    id: 'megapose',
    category: 'Perception',
    status: 'Featured project',
    title: 'Real-time 6-DoF Pose Tracking with MegaPose',
    description: 'I adapted MegaPose to track an object from a live camera. Each frame starts from the previous pose estimate. If the tracker loses the object, the pipeline can recover and resume streaming poses to ROS 2.',
    contribution: 'I implemented tracking and recovery logic, connected camera input, and streamed pose estimates into ROS 2. MegaPose provides the underlying pose-estimation model.',
    details: [
      'Connect RGB camera observations and a CAD model to the pose-tracking pipeline.',
      'Propagate prior-frame estimates and recover when tracking is lost.',
      'Integrate camera calibration, coordinate transforms, and pose feedback with robot software.',
    ],
    results: [], // Example structure: ['Measured result, conditions, and evidence.']
    tags: ['MegaPose', 'ROS 2', 'OpenCV', 'Camera calibration'],
    illustration: 'pose',
    mediaLabel: 'Detected corners on a ChArUco calibration board held in front of the lab camera',
    caption: 'Camera calibration · Detected corners follow the board as I change its angle.',
    videoLabel: 'Watch calibration',
    file: 'megapose',
    photo: './media/charuco-calibration.webp',
    video: './media/charuco-calibration.mp4',
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
    description: 'Our team built a cup-handover demo with an xArm6. I developed the hand and gesture perception modules and used camera-to-world transforms to connect them to the arm’s handover logic.',
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
    title: 'Language-guided multi-robot navigation',
    description: 'I’m building a ROS 2 system that turns an instruction into waypoint goals for TurtleBots. Qwen sees the arena image and the robots’ Vicon poses. A separate controller follows the proposed waypoints after I review and release the plan.',
    contribution: 'In qwen_controller, I connect the camera, pose snapshots, and model client to waypoint execution in ROS 2 Jazzy.',
    details: [
      'The client checks robot names, coordinates, and arena bounds before storing a proposed plan.',
      'Each robot follows its own waypoint sequence using pose feedback. Stale tracking stops the controller.',
      'Obstacle avoidance and inter-robot collision checking remain open work.',
    ],
    results: [],
    tags: ['Qwen', 'ROS 2', 'Python', 'TurtleBot3'],
    illustration: 'arena',
    mediaLabel: 'Six camera views of the physical TurtleBot arena',
    caption: 'Lab footage · Six views of the arena used for multi-robot work.',
    videoLabel: 'Watch arena footage',
    file: 'qwen-turtlebot',
    photo: './media/six-arena-views.webp',
    video: './media/six-arena-views.mp4',
    demoUrl: '',
    code: '',
    relatedWork: [],
    repository: { name: 'qwen_controller', url: 'https://github.com/CoderAdonis313/qwen_controller' },
    editingNote: 'Add a recording that pairs an instruction with its executed path.',
  },
  {
    id: 'vertiencoder',
    category: 'Robot learning',
    status: 'Reproduction / study',
    title: 'VertiEncoder for High-Speed Off-Road Navigation',
    description: 'I reproduced parts of VertiEncoder to study how a self-supervised model learns off-road vehicle dynamics in BeamNG. The field photos and videos below show the physical rover on snow.',
    contribution: 'I studied and reproduced parts of the VertiEncoder workflow, exploring learned dynamics and behavior cloning with simulation data.',
    details: [
      'Work with simulation data for off-road robot dynamics.',
      'Explore forward/inverse dynamics and behavior-cloning tasks.',
      'Compare reproduced behavior with the original work, keeping experimental conditions explicit.',
    ],
    results: [],
    tags: ['PyTorch', 'Transformers', 'Behavior cloning', 'BeamNG'],
    illustration: 'terrain',
    mediaLabel: 'An off-road rover following tire tracks in deep snow',
    caption: 'Outdoor field footage · The rover drives through snow between existing tire tracks.',
    videoLabel: 'Watch snow run',
    file: 'vertiencoder',
    photo: './media/offroad-snow-tracks.webp',
    video: './media/offroad-tracks.mp4',
    secondRun: {
      video: './media/offroad-turn.mp4', photo: './media/offroad-snow-turn.webp',
      label: 'A second run across the snow, seen from farther back.',
    },
    fieldPhotos: [
      { photo: './media/offroad-rover.webp', label: 'Front view of the rover and its tires on packed snow.' },
      { photo: './media/offroad-patchy-snow.webp', label: 'The rover on patchy snow with exposed ground between its tracks.' },
      { photo: './media/offroad-laptop.webp', label: 'The field laptop beside the snow-covered test area.' },
    ],
    demoUrl: '',
    code: '',
    relatedWork: [], // [{ label: 'Original paper', url: 'https://...' }]
    editingNote: 'Specify the experiments you actually ran and link the original paper/code. Add only your own plots and verified comparisons. Recheck the percentage results in the résumé before publishing them.',
  },
];

export const research = [
  {
    status: 'Ongoing',
    title: 'Cooperative signal-source localization',
    description: 'How should a team of TurtleBots search for a source when each robot can only sample signal strength where it stands? I’m integrating the physical testbed for Bayes-Swarm and preparing comparable trials. My reconstructions repository includes the ROS 2 recording tools I use to capture runs for later analysis.',
    repository: { name: 'reconstructions', url: 'https://github.com/CoderAdonis313/reconstructions' },
    photo: './media/arena-setup.webp',
    video: './media/arena-setup.mp4',
    mediaLabel: 'Abhi placing TurtleBots at different positions in the laboratory arena',
    caption: 'Testbed preparation · Placing the robots before a run.',
    url: '',
    editingNote: 'Add the public research question, your role, collaborators, and validated outcomes when ready. RA-L is a target, not a publication claim.',
  },
  {
    status: 'Graduate research',
    title: 'Robot Perception Pipeline for 6-DoF Pose Estimation',
    description: 'I completed graduate research in robot perception and 6-DoF pose estimation at the University at Buffalo.',
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
