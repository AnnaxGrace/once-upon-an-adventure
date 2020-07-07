import { Howl } from 'howler';

export const walkingStone = new Howl({
  src: require('./soundEffects/footstep.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});
  
export const walkingGrass = new Howl({
  src: require('./soundEffects/grassWalk.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const walkingGravel = new Howl({
  src: require('./soundEffects/gravelWalk.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const impact1 = new Howl({
  src: require('./soundEffects/impactPain.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});


export const rustlingFoliage = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/282571386/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const orcBabble = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/215889600/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const guardTalk = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/294041419/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const magicalJace = new Howl({
  src: require('./soundEffects/gravelWalk.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const gameMusic = new Howl({
  src: require('./soundEffects/8-BitsMusic.mp3'),
  html5: true,
  // autoSuspend: true,
  format:["mp3", "aac"],
  volume: 0.10,
  loop: true,
  autoplay: true,
});