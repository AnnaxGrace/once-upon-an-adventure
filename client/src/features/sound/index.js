import { Howl } from 'howler';

const walkingStone = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/292851973/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});
  
const walkingGrass = new Howl({
  src: 'https://raw.githubusercontent.com/AnnaxGrace/react-rpg/master/client/src/features/sound/footstep.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

const walkingGravel = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/282624049/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

const ouch = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/111423304/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});

export { walkingStone, walkingGrass, ouch, walkingGravel};