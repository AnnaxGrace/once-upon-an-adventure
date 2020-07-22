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
  src: require('./soundEffects/footstepf_on_fallen_dry_palm_leaves.mp3'),
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
  src: require('./soundEffects/magicalSound.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const annaAttacks = new Howl({
  src: require('./soundEffects/femaleHiyah.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const shopDoor = new Howl({
  src: require('./soundEffects/shopDoor.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const castleGate = new Howl({
  src: require('./soundEffects/castleGate.mp3'),
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export const waterSplash = new Howl({
  src: require('./soundEffects/waterSplash.mp3'),
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
});

export const gameMusic2 = new Howl({
  src: require('./soundEffects/Our-Mountain_v003.mp3'),
  html5: true,
  // autoSuspend: true,
  format:["mp3", "aac"],
  volume: .09,
  loop: true,
});

export const gameMusic3 = new Howl({
  src: require('./soundEffects/game_music_zen_arpeggios.mp3'),
  html5: true,
  // autoSuspend: true,
  format:["mp3", "aac"],
  volume: 0.25,
  loop: true,
});