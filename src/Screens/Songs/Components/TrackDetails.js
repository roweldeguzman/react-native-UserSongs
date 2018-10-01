import React, { Component } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './TrackDetails.styles';

type Props = {
  title: string,
  artist: string,
  onAddPress: () => void,
  onMorePress: () => void,
  onTitlePress: () => void,
  onArtistPress: () => void
}

export default ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress
}: Props) => (
  <View style={styles.container}>

    <TouchableOpacity onPress={onAddPress}>
      <MaterialIcons style={styles.button} name="add-circle-outline" size={22} color="white"/>
    </TouchableOpacity>

    <View style={styles.detailsWrapper}>

      <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
      <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
      
    </View>

    <TouchableOpacity onPress={onMorePress}>

      <View style={styles.moreButton}>
        <MaterialIcons name="more-horiz" size={17} color="white"/>
      </View>

    </TouchableOpacity>

  </View>
)