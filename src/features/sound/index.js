import {Howl, Howler} from 'howler';

const walking = new Howl({
  src: 'https://audio-previews.elements.envatousercontent.com/files/292851973/preview.mp3',
  html5: true,
  format:["mp3", "aac"],
  volume: 0.25
});
  

export default walking;