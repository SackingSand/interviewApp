import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Toast from '../../../toast'

import { 
    kanyeAxios, 
    setLoading,
    setQuote,
    addToFavorite
} from '../../../../stores'
import styles from '../../../../styles'
import KanyePic from '../../../../assets/kanye.jpeg'

export default Home = () => {

    const dispatch = useDispatch()
  
    const { quote, loading, favorites } = useSelector((state) => state.KanyeReducer)

    const checkQuoteinFavorites = (quote) => {
        return favorites.find((item) => item === quote)
    }
  
    const getQuote = () => {
      if(!loading){
        dispatch(setLoading(true))
        kanyeAxios.get().then(({data}) => {
          dispatch(setQuote(data.quote))
        })
        .catch(console.log)
        .finally(() => {
          dispatch(setLoading(false))
        })
      }
    }
  
    const addToFav = () => {
        dispatch(addToFavorite({
          quote,
          onSuccess: () => {
            Toast.show('Quotes added to favorites')
          },
          onError: (err)=> {
            Toast.show(err.message ? err.message : 'Error Occured')
          }
        }))
    }
    
    useEffect(() => {
      getQuote()
    },[])
  
    return(
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                <Image source={KanyePic} style={styles.homePic} />
                <Text style={styles.homeQuote}>{quote}</Text>
                <TouchableOpacity
                    onPress={getQuote}
                    style={ styles.reloadQuoteButton }
                >
                    <Text style={{ textAlign: 'center'}}>
                    {
                        loading ?
                            'Loading ....'
                        :
                            'Get Another Quote'
                    }
                    </Text>
                </TouchableOpacity>
                {
                    checkQuoteinFavorites(quote)? 
                        <TouchableOpacity
                            style={ styles.alreadyInFavoriteButton }
                        >
                            <Text style={{ textAlign: 'center'}}>Already in Favorite</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity
                            onPress={addToFav}
                            style={ styles.reloadQuoteButton }
                        >
                            <Text style={{ textAlign: 'center'}}>Add to Favorite</Text>
                        </TouchableOpacity>
                }
            </View>
        </ScrollView>
    )
  }