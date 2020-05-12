import { Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import {useHttp} from '../helper/HttpRequest';
const Home = () => {
    const tempMenuData = {};
    let length = 1;

    const [spreadSheet] = useHttp('https://spreadsheets.google.com/feeds/list/1DDMh6FsdoxN7a6GO4eQlpXQjIqanz6Ckam5RpQtIQEA/1/public/full?alt=json');
    const [getDownloadMenuData, setDownloadMenuData ] = useState([]);
    const [changedMenu, setChangedMenu] = useState({});
    // useEffect(() => {
    //     console.log("akhil",spreadSheet)
    // }, [spreadSheet.length])

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

     useEffect(() => {
        if(getDownloadMenuData[0]!=undefined)
        setChangedMenu(getDownloadMenuData[0])
      }, [getDownloadMenuData[0]])

    useEffect(() => {
        if (spreadSheet.length !== 0) {
           spreadSheet.feed.entry.map((elemm2, index) => {
               console.log("elemm2 elemm2 elemm2------>",elemm2)
              createMenuData(elemm2, spreadSheet.feed.entry)
           })
        }
     }, [spreadSheet.length])



    let content = ( 
        Object.entries(changedMenu).map(([key,value],index)=> { return (!value.includes('null')) ?
             (<Text>{value}</Text>) : null;
        } 
   )) 

    return content;


} 

export default Home;
