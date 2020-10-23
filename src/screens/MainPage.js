import React from 'react'
import { StyleSheet, View,Text, ScrollView } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Card from '../components/Card';
import { FlatList } from 'react-native-gesture-handler';



function MainPage({navigation}) {
 
    const headings = [{id: 1, title:'How to Seem Like You Always Have Your Shot Together', content:'helooooo',  contentOne:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!',
       contentTwo:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!', 
      contentThree:'Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!'},
    {id: 2, title:'How to Seem Like You Always Have Your Gun Together', content:'helooooo',  contentOne:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!',
       contentTwo:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!', 
      contentThree:'Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!'},
    {id: 3, title:'How to Seem Like You Always Have Your Man Together',content:'helooooo',  contentOne:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!',
       contentTwo:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!', 
      contentThree:'Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!'},
    {id: 4, title:'How to Seem Like You Always Have Your Boy Together', content:'helooooo',  contentOne:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!',
       contentTwo:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!', 
      contentThree:'Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!'},
    {id: 5, title:'How to Seem Like You Always Have Your Child Together', content:'helooooo',  contentOne:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!',
       contentTwo:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!', 
      contentThree:'Maiores, blanditiis quod eaque adipisci minus quis iste eum amet distinctio fugit. Eum natus dolores praesentium consectetur error suscipit nulla nemo cupiditate!'}]
  return (
    <View style={styles.container}>
 <View style ={styles.navbar}>
  <View style={styles.header}>
  <Fontisto name="nav-icon-grid-a" size={24} color="black"  />
  <Text style={styles.headerTxt}>Categories</Text>
  <AntDesign name="search1" size={24} color="black" />
  </View>
  
  <View style={styles.navigation}>
<View>
  <Text style={[styles.navTxt, styles.forYou]}>For You</Text>
  <View style={styles.bar}></View>
</View>
<Text style={styles.navTxt}>Design</Text>
<Text style={styles.navTxt}>Beauty</Text>
<Text style={styles.navTxt}>Education</Text>
<Text style={styles.navTxt}>Enter</Text>
  </View>
 </View>

<FlatList style={styles.mainContent}
data={headings}
renderItem={({item}) => {
  return <Card navigation={navigation} title={item.title} content={item.content} contentOne={item.contentOne} contentTwo={item.contentTwo} contentThree={item.contentThree} />
}}
keyExtractor={(item)=>item.id}
 />

{/* <ScrollView style={styles.mainContent}>
{
  data.map((item) => {
    <View onStartShouldSetResponder={()=>{
      navigation.navigate('DetailsPage', data) 
    }}>
 <Card navigation ={navigation} />
</View>
  })
}
</ScrollView> */}


<View style={styles.downNav}>
<AntDesign name="home" size={28} color="black" />
<AntDesign name="folderopen" size={28} color="#f57676" />
<Feather name="heart" size={28} color="black" />
<AntDesign name="user" size={28} color="black" />
<AntDesign name="setting" size={28} color="black" />
</View>
 </View>
  )
}


const styles = StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:'#e3e3e3',
    height:'100%',
    width:'100%'
  },
navbar:{
  backgroundColor:'white',
  height:200,
  // backgroundColor:'red',

},
header: {
  marginTop:75,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  width:'90%',
  alignSelf:'center',

},
headerTxt:{
fontSize:33,
fontWeight:'bold'
},

navigation:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  width:'95%',
  marginLeft:'5%',
  marginTop:40,
 
},
navTxt:{
fontSize:16,
paddingBottom:14,
color:'black',

},
bar:{
  width:89,
  height:2,
  backgroundColor:'#f57676',
  position:'absolute',
  left:-20,
  bottom:-5,
  
},
forYou:{
  color:'#f57676',
},

mainContent:{
  backgroundColor:'#e3e3e3',
  paddingTop:20,


},
downNav:{
  height: 55,
  width:'100%',
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'center',
  position:'absolute',
  left:0,
  right:0,
  bottom:0,
  zIndex:2,
  elevation:2,

}
})
export default MainPage
