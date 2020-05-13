
import React from 'react';
import { View } from 'react-native';
import Download from './Download';
import { useHttp } from '../helper/HttpRequest';

const Home = () => {

    const [spreadSheet] = useHttp('https://spreadsheets.google.com/feeds/list/1DDMh6FsdoxN7a6GO4eQlpXQjIqanz6Ckam5RpQtIQEA/1/public/full?alt=json');

    const content = ( 
        <View>
        <Download spreadSheet={spreadSheet}> </Download>
        </View>
   )

    return content;
} 

export default Home;
