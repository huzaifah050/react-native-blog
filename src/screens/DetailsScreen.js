import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



function DetailsScreen({navigation, route}) {
  
  const {content, title, contentOne, contentTwo, contentThree} = route.params
  console.log(contentOne, contentTwo, contentThree);
  return (
   <View style={styles.parentContainer}>
    <View style={styles.topDesign}>
      <View style={styles.pinkSection}></View>
      <View style={styles.whiteSection}></View>
    </View>
    <View style={styles.container}>

    <View style={styles.navbar}>
      <View style={styles.beautyNav}>
      <Ionicons name="ios-arrow-back" size={38} color="black" onPress ={() =>{
          navigation.navigate('MainPage')
      }} />
        <Text style={styles.beautyNavTxt}>Beauty</Text>
      </View>
      <View style={styles.icons}>
      <SimpleLineIcons name="earphones" size={26} color="black" />
      <Feather name="heart" size={26} color="black" style={styles.iconSeparate}/>
      <Feather name="share-2" size={26} color="black" style={styles.iconSeparate} />
      </View>
    </View>

    <View style={styles.content}>
    <View style={styles.imageWrapper}>
      <Image source={require('./../../assets/img1.jpeg')} style={styles.image} />
    </View>

    <View style={styles.mainContent}>
      <Text style={styles.header}>{title}</Text>

    <View style={styles.profile}>
      <Image source={require('../../assets/img2.jpg')} style={styles.profileImg}  />
      <Text style={styles.name}>Bad boy bubu</Text> 
      <Text style={styles.bull}>{'\u2B24'}</Text>
      <Text style={styles.time}>4 min read</Text>
    </View>

    <View style={styles.txtContainer}>
      <Text style={styles.txtContent}>
        {contentOne}
      </Text>
       <Text style={styles.txtContent}>
        {contentTwo}
      </Text>
      <Text style={styles.txtContent}>
       {contentThree}
      </Text>
    </View>
   
    </View>
    </View>


    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    flex:1,
    position:'relative',
    backgroundColor:'white'
  },
  topDesign:{
    flexDirection:'row',
    height:280,
    width:'100%'
  },
  pinkSection:{
    backgroundColor:'#ffe8e8',
    flex: 0.55
  },
  whiteSection:{},

  container:{
// marginHorizontal: 30,
// backgroundColor:'white',
width:'90%',
alignSelf:'center',
 position:'absolute',
    top: 75,
    zIndex:2,
  },

  navbar: {
    // backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    // height:20,
    // width:'100%',
    // position:'absolute',
    // top: -230,
    // zIndex:2,
    // elevation:2

  },
  beautyNav:{
    flexDirection:'row',
    // backgroundColor:'red',
    alignItems:'center'
    
  },
  beautyNavTxt:{
    fontWeight:'bold',
    fontSize:24,
    marginLeft:10,
    letterSpacing:0.2
  },
  icons:{
    flexDirection:'row',
    alignItems:'center',
    
  },
  iconSeparate: {
    marginLeft:20
  },
  imageWrapper: {
    height:280,
    width: '100%',
    backgroundColor:'white',
    marginTop: 20
  },
   image:{
    height: 280,
    width:'90%',
    marginLeft:10,
    marginTop:10
  },
  mainContent: {
    width: '95%',
    marginLeft:10,
    marginTop:30
  },
  header: {
    fontWeight:'bold',
    fontSize:20,
  },
  profile:{
    flexDirection:'row',
    alignItems:'center',
    marginTop: 15
  },
  profileImg: {
    height:40,
    width:40,
    borderRadius:20,
  },
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
  txtContainer:{
    marginTop:20
  },
  txtContent:{
    fontSize:15,
    marginBottom:15,
     color:'#85827e',
  },
})

export default DetailsScreen
