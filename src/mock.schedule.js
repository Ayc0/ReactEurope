const schedule = [
  {
    id: 747,
    length: 25,
    startDate: '2017-05-19 12:30:00 +0000 UTC',
    tags: 'react,redux,immutable,functional,reactive,rxjs,mobx',
    title: 'Functional && Reactive',
  },
  {
    id: 754,
    length: 25,
    startDate: '2017-05-18 13:30:00 +0000 UTC',
    tags: 'types,typeflow',
    title: 'Practical Confidence: Using Types to Help Your Computer Help You',
  },
  {
    id: 775,
    length: 60,
    startDate: '2017-05-19 06:30:00 +0000 UTC',
    tags: null,
    title: 'Check-in',
  },
  {
    id: 762,
    length: 25,
    startDate: '2017-05-19 12:00:00 +0000 UTC',
    tags: 'vr,oculus,react vr,webvr,android,native,react native',
    title: 'The runtimes of React VR and use at Oculus',
  },
  {
    id: 850,
    length: 90,
    startDate: '2017-05-19 10:30:00 +0000 UTC',
    tags: null,
    title: 'French Buffet',
  },
  {
    id: 771,
    length: 30,
    startDate: '2017-05-19 14:30:00 +0000 UTC',
    tags: null,
    title: 'Coffee Break',
  },
  {
    id: 756,
    length: 25,
    startDate: '2017-05-19 16:00:00 +0000 UTC',
    tags: 'react, redux, immutablejs,elm,functional',
    title: 'Putting the fun in functional with Elm',
  },
  {
    id: 784,
    length: 480,
    startDate: '2017-05-17 07:30:00 +0000 UTC',
    tags: 'workshop,css,css in js, css-in-js,glamor',
    title: 'CSS-in-JS Workshop with Sunil Pai',
  },
  {
    id: 766,
    length: 30,
    startDate: '2017-05-18 09:00:00 +0000 UTC',
    tags: null,
    title: 'Coffee Break',
  },
  {
    id: 847,
    length: 90,
    startDate: '2017-05-18 17:00:00 +0000 UTC',
    tags: null,
    title: 'Dinner',
  },
  {
    id: 755,
    length: 25,
    startDate: '2017-05-19 14:00:00 +0000 UTC',
    tags: 'virtual dom, animations,react',
    title: 'Animating the Virtual DOM',
  },
  {
    id: 782,
    length: 480,
    startDate: '2017-05-17 07:30:00 +0000 UTC',
    tags: 'workshop,tooling,reactjs,graphql,apollo',
    title: 'React Workshop with Max Stoiber and Nik Graf - Day 2',
  },
  {
    id: 849,
    length: 90,
    startDate: '2017-05-18 10:30:00 +0000 UTC',
    tags: null,
    title: 'French Buffet',
  },
  {
    id: 760,
    length: 25,
    startDate: '2017-05-18 15:30:00 +0000 UTC',
    tags: 'ssr, streaming, performance, rendering, universal',
    title: 'How Streaming Can Supercharge React',
  },
  {
    id: 846,
    length: 30,
    startDate: '2017-05-18 16:00:00 +0000 UTC',
    tags: 'navigation, react native,cms,testing,end-to-end',
    title: 'Lightning talks session',
  },
  {
    id: 752,
    length: 25,
    startDate: '2017-05-19 15:00:00 +0000 UTC',
    tags: 'cross-platform, react, native, react native, ui',
    title: 'React as a Platform: A path towards a truly cross-platform UI',
  },
  {
    id: 795,
    length: 720,
    startDate: '2017-05-20 07:00:00 +0000 UTC',
    tags: null,
    title: 'Hackathon at Mozilla from 9am to 9pm',
  },
  {
    id: 777,
    length: 60,
    startDate: '2017-05-16 06:30:00 +0000 UTC',
    tags: null,
    title: 'Workshop Checkin & French Breakfast',
  },
  {
    id: 773,
    length: 90,
    startDate: '2017-05-18 06:30:00 +0000 UTC',
    tags: null,
    title: 'Registration',
  },
  {
    id: 872,
    length: 15,
    startDate: '2017-05-18 07:45:00 +0000 UTC',
    tags: null,
    title: 'Welcome Session',
  },
  {
    id: 753,
    length: 25,
    startDate: '2017-05-18 10:00:00 +0000 UTC',
    tags: 'frameworks,bundlers,compilers,react,components',
    title: 'La nouvelle vague',
  },
  {
    id: 652,
    length: 25,
    startDate: '2017-05-18 12:30:00 +0000 UTC',
    tags: 'fiber,webassembly,react,cartoon',
    title: 'What WebAssembly means for React',
  },
  {
    id: 763,
    length: 25,
    startDate: '2017-05-18 15:00:00 +0000 UTC',
    tags: 'react native, native, navigation, android, ios, animations',
    title: 'Maximally Modular Apps with React Navigation',
  },
  {
    id: 769,
    length: 30,
    startDate: '2017-05-19 09:00:00 +0000 UTC',
    tags: null,
    title: 'Coffee Break',
  },
  {
    id: 848,
    length: 30,
    startDate: '2017-05-19 10:00:00 +0000 UTC',
    tags: 'expo,snack,android,react native,code-splitting',
    title: 'Lightning talks session',
  },
  {
    id: 780,
    length: 480,
    startDate: '2017-05-16 07:30:00 +0000 UTC',
    tags: 'workshop,mobx,observable,jest,routing,authentication,form validations,fetching',
    title: 'Building real life apps with React & MobX',
  },
  {
    id: 781,
    length: 60,
    startDate: '2017-05-17 06:30:00 +0000 UTC',
    tags: null,
    title: 'Workshop Checkin & French Breakfast',
  },
  {
    id: 783,
    length: 480,
    startDate: '2017-05-17 07:30:00 +0000 UTC',
    tags: 'workshop,react native,animations,styling,flex box,LayoutAnimation,PanResponder',
    title: 'React Native Workshop with Brent Vatne, Devin Abbott and Adam Perry - Day 2',
  },
  {
    id: 738,
    length: 25,
    startDate: '2017-05-19 15:30:00 +0000 UTC',
    tags: 'animations, mobile, UX, react-native',
    title: 'A Novel Approach to Declarative Animations in React Native',
  },
  {
    id: 745,
    length: 25,
    startDate: '2017-05-18 09:30:00 +0000 UTC',
    tags: 'jest,testing,snapshot',
    title: 'Building High-Quality JavaScript Tools',
  },
  {
    id: 768,
    length: 30,
    startDate: '2017-05-18 14:30:00 +0000 UTC',
    tags: null,
    title: 'Coffee Break',
  },
  {
    id: 664,
    length: 25,
    startDate: '2017-05-19 08:00:00 +0000 UTC',
    tags: 'reactive programming, react, mobx',
    title: 'Next generation state management',
  },
  {
    id: 761,
    length: 25,
    startDate: '2017-05-19 08:30:00 +0000 UTC',
    tags: null,
    title: 'Coming soon',
  },
  {
    id: 748,
    length: 25,
    startDate: '2017-05-19 13:30:00 +0000 UTC',
    tags: 'graphql,relay',
    title: 'Exploring Relay Modern',
  },
  {
    id: 778,
    length: 480,
    startDate: '2017-05-16 07:30:00 +0000 UTC',
    tags: 'workshop,tooling,reactjs',
    title: 'React Workshop with Max Stoiber and Nik Graf - Day 1',
  },
  {
    id: 774,
    length: 60,
    startDate: '2017-05-18 06:45:00 +0000 UTC',
    tags: null,
    title: 'Breakfast',
  },
  {
    id: 746,
    length: 25,
    startDate: '2017-05-18 08:00:00 +0000 UTC',
    tags: 'fiber,react',
    title: 'Keynote',
  },
  {
    id: 758,
    length: 25,
    startDate: '2017-05-19 16:15:00 +0000 UTC',
    tags: 'react,native,react native,hybrid,navigation,native shell',
    title: 'Integrating React Native with Native Infrastructure',
  },
  {
    id: 772,
    length: 30,
    startDate: '2017-05-19 16:30:00 +0000 UTC',
    tags: null,
    title: 'Q&A Panel',
  },
  {
    id: 767,
    length: 30,
    startDate: '2017-05-18 13:00:00 +0000 UTC',
    tags: null,
    title: 'Coffee Break',
  },
  {
    id: 757,
    length: 25,
    startDate: '2017-05-19 09:30:00 +0000 UTC',
    tags: 'pwa, progressive web app, service worker,webpack,mobile,web',
    title: 'The making of Twitter Lite',
  },
  {
    id: 770,
    length: 30,
    startDate: '2017-05-19 13:00:00 +0000 UTC',
    tags: null,
    title: 'Coffee Break',
  },
  {
    id: 744,
    length: 25,
    startDate: '2017-05-18 14:00:00 +0000 UTC',
    tags: 'reasonml,ocaml,react,jsx',
    title: 'Reason',
  },
  {
    id: 776,
    length: 45,
    startDate: '2017-05-19 06:45:00 +0000 UTC',
    tags: null,
    title: 'Breakfast',
  },
  {
    id: 851,
    length: 120,
    startDate: '2017-05-19 17:00:00 +0000 UTC',
    tags: null,
    title: 'Drink up',
  },
  {
    id: 779,
    length: 480,
    startDate: '2017-05-16 07:30:00 +0000 UTC',
    tags: 'workshop,react native,navigation,styling,flex box',
    title: 'React Native Workshop with Brent Vatne, Devin Abbott and Adam Perry - Day 1',
  },
  {
    id: 750,
    length: 25,
    startDate: '2017-05-18 08:30:00 +0000 UTC',
    tags: 'react,inferno,performance,fiber',
    title: 'What I Learned Benchmarking React',
  },
  {
    id: 749,
    length: 25,
    startDate: '2017-05-18 12:00:00 +0000 UTC',
    tags: 'javascript,fatigue',
    title: 'Worse is Better: The Upside of JavaScript Fatigue',
  },
];

export default schedule;
