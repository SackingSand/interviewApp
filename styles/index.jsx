import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    homeQuote : {
        fontSize: 24,
        height: 200,
        paddingLeft: 15,
        paddingRight: 15
    },
    favoriteQuote : {
        marginTop: 10,
        fontSize: 18,
        height: 'auto',
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
    },
    homePic : {
        marginTop: 100,
        marginBottom: 20
    },
    reloadQuoteButton: {
        backgroundColor: 'aquamarine',
        justifyContent: 'center',
        width: 200,
        height: 50,
        marginTop: 20,
    },
    alreadyInFavoriteButton: {
        backgroundColor: 'gray',
        justifyContent: 'center',
        width: 200,
        height: 50,
        marginTop: 20,
    },
    customQuoteInput: {
        marginBottom: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        width: 225
    }
  });
  