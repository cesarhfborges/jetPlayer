import {Component, OnInit} from '@angular/core';
import {Track} from '../../models/track';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  tracks: Track[] = [
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
    {
      name: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist: 'Artist 1',
      duration: 300
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
