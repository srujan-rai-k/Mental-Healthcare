/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.bannerContainer}>
         <Image
           source =
           {{
               uri: 'https://tse3.mm.bing.net/th?id=OIP.EEgYG2FkdDR2y2STQBi5zgHaFG&pid=Api&P=0&w=233&h=160',
           }}
           style={styles.banner}
           resizeMode="contain"/>
     </View>
     <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style={styles.button}>
         <Text style={styles.buttonText}>START</Text>
     </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
        marginTop:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        container:'100%',
    },
    button:{
        width:'100%',
        backgroundColor:'#1A759F',
        padding:16,
        borderRadius:16,
        alignItems:'center',
        marginBottom:10,
        marginTop:400,
    },
    buttonText:{
        fontSize:24,
        fontWeight:'600',
        color:'white',
    },
});
