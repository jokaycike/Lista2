import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function ContadorDeLikes(){
    const [likes, setlikes] = useState(0)
    return(
        <View style={styles.container}>
            <Text>Total de like:{likes}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setlikes(likes+1)}>
                <Text style={styles.text}>Deixe seu like 👍</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setlikes(Math.min(0,likes-1))}>
                <Text style={styles.text}>Deixe seu deslike 👎</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderWidth:1,
    borderRadius: 6
  },
  text : {
    fontSize:14,
    color: 'white',
    padding:10
  }
});