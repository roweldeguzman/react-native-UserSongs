import React, { Component } from 'react';
import Player from './Components/Player';

export const TRACKS = [
  {
    title: 'Sorry',
    artist: 'Justin Bieber',
    albumArtUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/f6/40/c8/f640c8b9-b2f8-905a-9fff-2d38d8bfe35b/UMG_cvrart_00602547587428_01_RGB72_1500x1500_15UMGIM59808.jpg/268x0w.jpg",
    audioUrl: "http://freemusicdownloads.world/wp-content/uploads/2017/05/Justin-Bieber-Sorry-PURPOSE-The-Movement.mp3"
  }, {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "https://freemusicdownloads.world/wp-content/uploads/2017/05/love-yourself-cover-Justin-Biber.jpg",
    audioUrl: 'http://freemusicdownloads.world/wp-content/uploads/2017/05/Justin-Bieber-Love-Yourself-PURPOSE-The-Movement.mp3',
  }, {
    itle: 'You belong with me',
    artist: 'Taylor Swift',
    albumArtUrl: 'https://freemusicdownloads.world/wp-content/uploads/2017/05/You-belong-with-me-Taylor-Swift.jpg',
    audioUrl: 'http://freemusicdownloads.world/wp-content/uploads/2017/05/Taylor-Swift-You-Belong-With-Me.mp3',
  },
];

type Props = {
  componentDidMount: () => void
}

export default class extends Component<Props> {

  componentDidMount = () => this.props.componentDidMount();

  render() {
    return (
      <Player tracks={TRACKS} />
    )
  }
}
