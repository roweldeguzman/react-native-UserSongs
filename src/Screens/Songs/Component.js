import React, { Component } from 'react';
import Player from './Components/Player';

export const TRACKS = [
  {
    title: 'Sorry',
    artist: 'Justin Bieber',
    albumArtUrl: "https://freemusicdownloads.world/wp-content/uploads/2017/05/Justin_Bieber_-_Sorry_Official_Single_Cover.png",
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
