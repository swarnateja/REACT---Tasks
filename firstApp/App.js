import React, {useState} from 'react'
import {View, Text,  StyleSheet,  ScrollView, RefreshControl, FlatList, SectionList} from 'react-native'



 const App =()=>  {
const [Items, setItem] = useState([
  { name:'Item 1'},
  { name:'Item 2'},
  { name:'Item 3'},
  { name:'Item 4'},
  { name:'Item 5'},
  { name:'Item 6'},
  { name:'Item 7'},
  { name:'Item 8'},
  { name:'Item 9'},
  { name:'Item 10'},
  { name:'Item 11'},
  { name:'Item 12'},
  { name:'Item 13'},
  { name:'Item 14'},
  { name:'Item 15'},
  { name:'Item 16'},
  { name:'Item 17'},
  { name:'Item 18'},
  { name:'Item 19'},
  { name:'Item 20'},
])

const DATA = [{
  title:'Title1',
  data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
},
  {
    title:'Title2',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  },
  {
    title:'Title3',
    data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
  },
  {
    title:'Title4',
    data: ['Item 4-1', 'Item 4-2'],
  },
  {
    title:'Title5',
    data: ['Item 5-1', 'Item 5-2', 'Item 5-3' ],
  },

]

const [Refreshing, setRefreshing] = useState(false)

const onRefresh = () =>{
  setRefreshing(true)
  setItem([...Items, {name:'Item 21'}])
  setRefreshing(false)
}

  return (
    <SectionList
    keyExtractor={(item, index) => index.toString()} 
    sections={DATA}
    renderItem={({item}) =>(
              <Text style ={styles.text}>{item}</Text>
    )}
    renderSectionHeader = {({section})=>(
      <View style ={styles.view1}>
      <Text style ={styles.text}>{section.title}</Text>
  </View>
    )}
    />














    // <FlatList 
    // keyExtractor={(item, index) => index.toString()} 
    // data = {
    //   Items
    // }
    // renderItem = {({item}) =>(
    //          <View style ={styles.view1}>
    //           <Text style ={styles.text}>{item.name}</Text>
    //       </View>
    // )} 
    //     refreshControl={
    //   <RefreshControl
    //   refreshing={Refreshing}
    //   onRefresh={onRefresh}
    //   />
    // }
    // />
//     <ScrollView style ={styles.body}
//     >
//       {
//         Items.map((object) =>{
//           return(
//             <View style ={styles.view1} key={object.key}>
//             <Text style ={styles.text}>{object.item}</Text>
//           </View>
//           )
//         })
//       }
//  </ScrollView>
  )
 }


 const styles= StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"white",
    
  },
  view1:{
    backgroundColor:"skyblue",
    alignItems:"center",
    justifyContent:'center',
    margin:10,
    color:'white'
  },
  text:{
    color:"black",
    fontSize:30,
    margin:10,
    fontFamily:'',
    fontStyle:'italic',
    fontWeight:'bold'
  }
})

export default App 

