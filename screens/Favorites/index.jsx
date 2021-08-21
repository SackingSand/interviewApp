import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';

import { 
} from '../../stores'
import styles from '../../styles'
import KanyePic from '../../assets/kanye.jpeg'
import { useEffect } from 'react';

export default Favorites = () => {
  
    const { favorites } = useSelector((state) => state.KanyeReducer)
  
    return(
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                <Image source={KanyePic} style={styles.homePic} />
                {
                  favorites.length ?
                    favorites.map((quote, index) => {
                      return <Text key={index} style={styles.favoriteQuote}>{quote}</Text>
                    })
                  :
                    <Text style={styles.favoriteQuote}>Nothing but us chickens here</Text>
                }
            </View>
        </ScrollView>
    )
  }