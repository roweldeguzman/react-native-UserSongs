import React, { Component } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './TrackDetails.styles';

type Props = {
  title: string,
  artist: string,
  tractControlVisibility: boolean,

  onAddPress: () => void,
  onMorePress: () => void,
  onTitlePress: () => void,
  onArtistPress: () => void
}

export default ({
  title,
  artist,
  tractControlVisibility,

  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress
}: Props) => {
  
  return (
    <View style={[styles.container, tractControlVisibility ? [] : { position: 'absolute', bottom: 10 } ]}>

      <TouchableOpacity onPress={onAddPress} style={[!tractControlVisibility && { display: 'none' } ]}>
        <MaterialIcons style={styles.button} name="add-circle-outline" size={22} color="white"/>
      </TouchableOpacity>

      <TouchableOpacity style={{ width: '94%' }}>
        
        <View style={styles.detailsWrapper}>
          <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
          <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
        </View>

      </TouchableOpacity>

      {tractControlVisibility ? (
        <TouchableOpacity onPress={onMorePress}>

          <View style={styles.moreButton}>
            <MaterialIcons name="more-horiz" size={17} color="white"/>
          </View>

        </TouchableOpacity>
      ): (

        <TouchableOpacity onPress={onMorePress}>

          <View style={styles.moreButton}>
            <MaterialIcons name="pause" size={17} color="white"/>
          </View>

        </TouchableOpacity>

      )}

    </View>
  )
}