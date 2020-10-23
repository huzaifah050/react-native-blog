import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


function Card({navigation, title, content,contentOne, contentTwo, contentThree}) {

  return (
    <View style={styles.container}>
   <View style={styles.imageContent}>
    <View style={styles.pinkBox} ></View>
    <View style={styles.whiteBox} ></View>
    <Image source={require('../../assets/img1.jpeg')} style={styles.image} />
   </View>
<View style={styles.content}>
<Text style={styles.contentTxt} onPress={()=>{
   navigation.navigate('DetailsPage', {content, title, contentOne, contentTwo, contentThree})
}}>{title}</Text>
<View style={styles.profile}>
      <Image source={require('../../assets/img2.jpg')} style={styles.profileImg}  />
      <Text style={styles.name}>Bad boy</Text> 
      <Text style={styles.bull}>{'\u2B24'}</Text>
      <Text style={styles.time}>4 min read</Text>
    </View>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // marginTop:30,
    height:164,
    marginBottom:20,
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width:'90%',
  alignSelf:'center',
  position:'relative'
  },
  pinkBox:{
    position:'absolute',
    top:-17,
    backgroundColor:'pink',
    height:100,
    width:80,
  },
  whiteBox:{
     position:'absolute',
    top:-7,
    left:10,
    backgroundColor:'white',
    height:100,
    width:80,
  },
  image:{
    height:130,
    width:100,
    marginLeft:17,
    
  },
  imageContent:{
    flex:0.2,
    
  },
  content: {
    flex:0.64,
    // backgroundColor: 'red'
  },
  contentTxt:{
    fontSize:20,
    fontWeight:'bold'
  },
  profile:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: 15
  },
  profileImg: {
    height:40,
    width:40,
    borderRadius:20,},
     name: {
    marginLeft:10,
    textTransform:'capitalize',
    fontWeight:'bold',
    color:'#85827e',
    letterSpacing:0.2

  },
  bull: {
    marginLeft: 10,
    fontSize:10,
     color:'#85827e',
  },
  time:{
    marginLeft:10,
     color:'#85827e',
  },
})

export default Card
