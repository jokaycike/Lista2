import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function CalculoIMC(){
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [mensagem, setMensagem] = useState('')

    function CalculadoraIMC(){
        const imc = peso/(altura * altura)
        if(imc < 18.5){
          setMensagem('Magreza')
        } else 
        if(imc > 18.5 && imc < 24.9){
          setMensagem('Normal')
        } else 
        if(imc > 25 && imc < 29.9){
          setMensagem('Sobrepeso')
        } else
        if(imc > 30 && imc < 39.9){
          setMensagem('Obesidade')
        } else
        if(imc > 40){
          setMensagem('Obesidade Grave')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Digite seu peso'
                onChangeText={(pPeso) => setPeso(pPeso)}
            />
            <TextInput 
                placeholder='Digite seu altura'
                onChangeText={(pAltura) => setAltura(pAltura)}
            />
            <Button title='Ver IMC' onPress={CalculadoraIMC}/>
            <Text>{mensagem}</Text>
        </View>
    )

}
  const styles = StyleSheet.create({
  });