import React, { useEffect, useState } from 'react';
import {View, Text,Linking,TouchableOpacity} from 'react-native';

const Download = (props) => {
    
    const [menuIndex, setMenuIndex]=useState(null);
    const [valueToCheck, setValueToCheck]=useState("");
    const [manageState, setManageState] = useState([]);
    const styleOfMenu = {

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
        backgroundColor:'yellow'
        };

    const tempMenuData = {};
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
     
     let hello=()=>{
console.log("hello pressed")
     }
    
    const content=(
        // <View>
        //     <Text>
        //     Hello Download
        //     </Text></View>
         Object.entries(changedMenu).map(([key,value],index)=> { return (!value.includes('null')) ?
             (

           <View style = {styleOfMenu}  >
                <TouchableOpacity onPress={
                    () => {
                        setValueToCheck(value)
                         setMenuIndex(index) 
                         setManageState(hello=>[...hello,value])
                       }
                } > 
                
             <Text key={index}>{getModifiedString(value)[0]}</Text>
                </TouchableOpacity>
             
            </View>
             ) : null;
        } 
   )

    )

    return content;
}

export default Download;