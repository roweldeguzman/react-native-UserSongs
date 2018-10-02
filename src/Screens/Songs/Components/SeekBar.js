import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';


import styles from './SeekBar.styles';

import Slider from 'react-native-slider';


function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

type Props = {
  trackLength: number,
  currentPosition: number,
  tractControlVisibility: boolean,


  onSeek: () => void,
  onSlidingStart: () => void,
}

export default ({
  trackLength,
  currentPosition,
  tractControlVisibility,

  onSeek,
  onSlidingStart
}: Props) => {

  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);

  return (
    <View style={[styles.container, tractControlVisibility ? []: { bottom: 50 }]}>

      <View style={{flexDirection: 'row'}}>

        <Text style={styles.text}>
          {elapsed[0] + ":" + elapsed[1]}
        </Text>

        <View style={{flex: 1}} />

        <Text style={[styles.text, {width: 40}]}>
          {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
        </Text>

      </View>

      <Slider
        maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={styles.slider}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />

    </View>

  );

}
