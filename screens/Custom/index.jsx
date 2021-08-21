import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Toast from '../../components/toast'

import {
    addToFavorite
} from '../../stores'
import styles from '../../styles'
import KanyePic from '../../assets/kanye.jpeg'

export default Home = () => {

  const [quote, setQuote] = useState('')

  const dispatch = useDispatch()

  const handleTextInput = value => {
    setQuote(value)
  }
  
  const addToFav = () => {
    dispatch(addToFavorite({
      quote,
      onSuccess: () => {
        Toast.show('Quotes added to favorites')
        setQuote('')
      },
      onError: (err)=> {
        Toast.show(err.message ? err.message : 'Error Occured')
      }
    }))
  }

  return(
    <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
    >
        <View style={styles.container}>
            <Image source={KanyePic} style={styles.homePic} />
            <TextInput onChangeText={handleTextInput} style={ styles.customQuoteInput } placeholder='Type Quote' value={ quote }></TextInput>
            <TouchableOpacity
              onPress={addToFav}
              style={ styles.reloadQuoteButton }
            >
                <Text style={{ textAlign: 'center'}}>Add to Favorite</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}