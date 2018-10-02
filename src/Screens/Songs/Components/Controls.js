import * as React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import styles from './Controls.styles';

type Props = {
  paused: boolean,
  shuffleOn: boolean,
  repeatOn: boolean,
  forwardDisabled: boolean,
  tractControlVisibility: boolean,


  onPressPlay: () => void,
  onPressPause: () => void,
  onBack: () => void,
  onForward: () => void,
  onPressShuffle: () => void,
  onPressRepeat: () => void,
}

export default ({ 
  paused,
  shuffleOn,
  repeatOn,
  forwardDisabled,
  tractControlVisibility,

  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat
}) => (
  <View style={[styles.container, tractControlVisibility ? [] : { display: 'none' } ]}>

    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <MaterialIcons name='shuffle' size={24} color='white' style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}  />
    </TouchableOpacity>
    
    <View style={{width: 40}} />

      <TouchableOpacity onPress={onBack}>
        <MaterialIcons name='skip-previous' size={35} color='white' />
      </TouchableOpacity>

    <View style={{width: 20}} />

    { !paused ? (

      <TouchableOpacity onPress={onPressPause}>

        <View style={styles.playButton}>
          <Ionicons name="md-pause" size={35} color="white" />
        </View>

      </TouchableOpacity>

    ): (

      <TouchableOpacity onPress={onPressPlay}>

        <View style={styles.playButton}>

          <Ionicons name="md-play" size={35} color="white" style={{ paddingLeft: 5}} />

        </View>

      </TouchableOpacity>
    
    )}

    <View style={{width: 20}} />

    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      
      <MaterialIcons style={[forwardDisabled && { opacity: 0.6 }]} name='skip-next' size={35} color='white' />

    </TouchableOpacity>

    <View style={{width: 40}} />

    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      
      <MaterialIcons name='repeat' size={24} color='white' style={[styles.secondaryControl, repeatOn ? [] : styles.off]} />

    </TouchableOpacity>

  </View>
)
