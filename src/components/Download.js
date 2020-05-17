import React, { useEffect, useState } from 'react';
import { View, Text, Linking, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';

const Download = (props) => {
    const [menuIndex, setMenuIndex]=useState(null);
    const [valueToCheck, setValueToCheck]=useState("");
    const [manageState, setManageState] = useState([]);
    const [atmenu, setAtmenu] = useState(true);
        const [menuCount, setMenuCount]=useState(2);
        const [randomColor, setRandomColor] = useState({color1: 4,
         color2:1});
        let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

        const styles = StyleSheet.create({
         container: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: '#F5FCFF',
         },
         linearGradient: {
           paddingLeft: 15,
           paddingRight: 15,
           borderRadius: 5,
           marginTop:16,
           width:350,
         },
         buttonText: {
           fontSize: 18,
           fontFamily: 'Gill Sans',
           textAlign: 'center',
           margin: 10,
           color: '#ffffff',
           backgroundColor: 'transparent',
         },
         styleOfMenu: {

            borderWidth: 5,
            borderRadius: 20,
            borderColor: 'orange',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            height: 50,
            padding: 10,
            backgroundColor:'transparent'
            },
            styleOfBack: {

               borderWidth: 5,
               borderRadius: 20,
               borderColor: 'orange',
               borderBottomWidth: 0,
               shadowColor: '#000',
               shadowOffset: { width: 0, height: 2 },
               shadowOpacity: 0.1,
               shadowRadius: 2,
               elevation: 1,
               marginLeft: 5,
               marginRight: 5,
               marginTop: 10,
               height: 50,
               padding: 10,
               backgroundColor:'blue'
               }
       });
       
        

    const tempMenuData = {};
    let temp=[]
    let length = 1;
    let insert={};
    
    const [getDownloadMenuData, setDownloadMenuData] =  useState([]);
    const [changedMenu, setChangedMenu] = useState({});
    const [getDownloadSubmenuData, setDownloadSubmenuData] = useState([]);

    let createsubmenuData = ((entry) => {
        // console.log("tum btaoge kya", elemm2)
        // console.log("elemm2.gsx$fieldthree.$t; ingaro",getDownloadMenuData[0] ,elemm2.gsx$fieldtwo.$t.slice(5),elemm2.gsx$fieldfour.$t)
        // for (var property2 in getDownloadMenuData[0]) {
           entry.map((elemm2) => {
              let elemm3=elemm2;
              let tempsubmenuData = {};
                 if (elemm2.gsx$fieldtwo.$t.includes('subM')) {
                    // if (getDownloadMenuData[0][property2] == elemm2.gsx$fieldtwo.$t.slice(5)) {
                       
                       console.log("elemm2.gsx$fieldthree.$t; bingaro",tempsubmenuData)
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldthree.$t;
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldfour.$t;
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldfive.$t
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldsix.$t
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldseven.$t
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldeight.$t;
                       tempsubmenuData['submenu_' + elemm2.gsx$fieldtwo.$t.slice(5)+length++] = elemm3.gsx$fieldnine.$t;
                       // setDownloadSubmenuDataperma((perma)=>[...perma,getDownloadSubmenuData])
                       // }
                       setDownloadSubmenuData((hello) => [...hello, tempsubmenuData])
                    }
              })

              // readySubmenudata[elemm2.gsx$fieldtwo.$t.slice(5)]=tempMenuData
           // }
        })

        useEffect(() => {
            if (getDownloadMenuData.length != 0)
               createsubmenuData(props.spreadSheet.feed.entry)
      
         }, [getDownloadMenuData.length])


    const createMenuData = ((elemm2, entry) => {
        if (elemm2.gsx$fieldtwo.$t.includes('menu')) {
            console.log("akhllll is theis menu------>",elemm2.gsx$fieldtwo.$t);
           tempMenuData['menu' + length++] = elemm2.gsx$fieldthree.$t;
           tempMenuData['menu' + length++] = elemm2.gsx$fieldfour.$t;
           tempMenuData['menu' + length++] = elemm2.gsx$fieldeight.$t;
           tempMenuData['menu' + length++] = elemm2.gsx$fieldnine.$t;
           tempMenuData['menu' + length++] = elemm2.gsx$fieldfive.$t;
           tempMenuData['menu' + length++] = elemm2.gsx$fieldseven.$t;
           tempMenuData['menu' + length++] = elemm2.gsx$fieldsix.$t;
           setDownloadMenuData((prevdata) => [...prevdata, tempMenuData]);
        }
     });

     useEffect((e) => {
        // console.log("useEfeect called valueToCheck",changedMenu,props.getDownloadMenuData[0],valueToCheck,props.getDownloadSubmenuData)
        if(valueToCheck!="null") {
          getDownloadSubmenuData.map((ele,indexed)=>{
            if(Object.keys(getDownloadSubmenuData[indexed])[0].includes(valueToCheck)){
              const returnedTarget = Object.assign(insert, getDownloadSubmenuData[indexed]);
              setChangedMenu(returnedTarget)
              setRandomColor({color1:getRandomInt(colorArray.length),
               color2:getRandomInt(colorArray.length)})
              setManageState(hello => [...hello, valueToCheck])
              setAtmenu(false);
                console.log("props.getDownloadSubmenuData[indexed] valueToCheck setChangedMenu",getDownloadSubmenuData[indexed],valueToCheck,changedMenu)
                
              }
            })

            if(getModifiedString(valueToCheck)[1]!=undefined)
            Linking.openURL(getModifiedString(valueToCheck)[1]);
            // window.open(getModifiedString(valueToCheck)[1], '_blank');
          }
        
      }, [valueToCheck])


     useEffect(() => {
        if(getDownloadMenuData[0]!=undefined)
        setChangedMenu(getDownloadMenuData[0])
      }, [getDownloadMenuData[0]])

      useEffect(() => {
        if (props.spreadSheet.length !== 0) {
            props.spreadSheet.feed.entry.map((elemm2, index) => {
               console.log("elemm2 elemm2 elemm2------>",elemm2)
              createMenuData(elemm2, props.spreadSheet.feed.entry)
           })
        }
     }, [props.spreadSheet.length]) ;

     const getModifiedString=(convertString)=>{
        let convertedString=convertString.split("_urlLink_")
        return convertedString
      }

      function getRandomInt(max) {
         return Math.floor(Math.random() * Math.floor(max));
       }
      const manageBackButton=()=>{
         temp = manageState.filter((v, i, a) => a.indexOf(v) === i);
         setMenuCount(menuCount+1);
         if(temp[temp.length-menuCount]!="" && temp[temp.length-menuCount]!=undefined){
           setValueToCheck(temp[temp.length-menuCount])
           setMenuIndex(temp.length-menuCount)
         }
         else{
           setChangedMenu(getDownloadMenuData[0])
           setValueToCheck("null")
           setManageState([]);
           temp=[];
           setMenuCount(2);
           setAtmenu(true);
         }
   
         console.log("value to check on back button --->",valueToCheck,changedMenu);
       }


    const content=(
      <View  >
         {(Object.keys(changedMenu).length!=0) ? Object.entries(changedMenu).map(([key,value],index)=> { return (!value.includes('null')) ?
             (

           <View  >
              <LinearGradient 
         //  colors={['#4c669f', '#3b5998', '#192f6a']}
          colors={[colorArray[randomColor.color1],colorArray[randomColor.color2]]}
          
          style = {styles.styleOfMenu}
         //  style={styles.linearGradient}
         //  style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
          >
                <TouchableOpacity  onPress={
                    () => {
                        setValueToCheck(value)
                         setMenuIndex(index) 
                         setManageState(hello=>[...hello,value])
                       }
                } > 
                
             <Text key={index}>{getModifiedString(value)[0]}</Text>  
                </TouchableOpacity>
                </LinearGradient>

             
            </View>
             ) : null;
            } 
            ): <ActivityIndicator size="large" color="#0000ff" />
         }
            

                { atmenu !== true ? 
                  <TouchableOpacity style = {styles.styleOfBack} onPress={
                     ()=> {
                        manageBackButton()
                      }
                 } > 
                 
              <Text>BACK</Text>  
                 </TouchableOpacity>
                  : null}

                
            </View>
            )

    return content;
}

export default Download;