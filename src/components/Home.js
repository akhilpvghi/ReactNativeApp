
import React, { useState } from 'react';
import { View } from 'react-native';
import Download from './Download';
import GetInTouch from './GetInTouch';
import { useHttp } from '../helper/HttpRequest';

const Home = () => {

    const [spreadSheet] = useHttp('https://spreadsheets.google.com/feeds/list/1DDMh6FsdoxN7a6GO4eQlpXQjIqanz6Ckam5RpQtIQEA/1/public/full?alt=json');
    const [component, setComponent] = useState(null);
    // setComponent(<Download spreadSheet={spreadSheet} />);
    let content = ( 
        <View>
        {/* {component} */}
        {/* <GetInTouch spreadSheet={spreadSheet}></GetInTouch> */}
        <Download spreadSheet={spreadSheet} />
        </View>
   )

    return content;
} 

export default Home;
