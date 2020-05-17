packages installed

npm install -g eslint---

# ReactNativeApp
ReactNativeApp

S2-e3

react-native run ios

S3e1--->window setup...
1> java sdk (for android apps)-->diff b/w jdk n sdk??
java platform jdk(java SE dev kit)

2>  node Js

3> python 2

4>Android Studio

cmd prompt

--->node -v

--->npm install -g react-native-cli

create new project album at any location--->react-native init albums

react-native run android

in andriod studio....you can open...album project...

at message  --->you can download solution of problem

tool----AVD manager--->Android emulator--->

marshmallow 23--->


next setup-------->system setting---->system property--->advanced env var--->
--->new --->JAVA_HOME--->jdk 1.8--->OK

env var ---->in path---->edit -->new--->c:\users\akhil kumar\appdata\local\android\sdk\platform-tools

restrt command prompt---->

go to project--->react-native run-android

S4e1

ES_lint--->it detects error--->rules in config--->

in VS code...

npm install -g eslint---

in package too---ESLint

npm install --save-dev eslint-config-rallycoding

--->create new file...>------->.eslintrc

{
"extends": "rallycoding"
}


___________

s5e1

index.js.....>root file--->delete content of index.js

create component in index.js

---->import librabry to create component...
import React from 'react';
import ReactNative from 'react-native';
----->create component

----->render it


JSX element---

<Text>
babel--->tool---->jsx---->to js

in index.js resistering app component 

ReactNative.AppRegistry.registerComponent('projectname',()=>App);


....

import destruturing technique....

import { Text, AppRegistry } from 'react-native';



_____________________________

npm install -g expo-cli

npm i -g npm


GenyMotion----android emulator--->pixel3--->ctrl +m to expo menu on phone





expo --version

create project using expo

Set EXPO_DEBUG=true

expo init projectName

expo init firstReactNative

expo start

https://www.resizepictures.net/icon-generator


Configure app.json--------------->to create apk-------->https://docs.expo.io/distribution/building-standalone-apps/


{
   "expo": {
    "name": "Your App Name",
    "icon": "./path/to/your/app-icon.png",
    "version": "1.0.0",
    "slug": "your-app-slug",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourappname",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.yourcompany.yourappname",
      "versionCode": 1
    }
   }
 }


expo build:android

type apk and then press enter 


You will need to run expo build:status . When building process is complete you will see link to download apk (Android) or ipa(IOS) file.


If you choose the first option and later decide to upload your own keystore, we currently offer an option to clear your current Android keystore from our build servers by running expo build:android --clear-credentials. 

err----->sdk 36.0.0 in app--------->reinstall expo




______________________
react native github elements

npm install react-native-elements --save

https://www.youtube.com/watch?v=WnS7dcY5Hys

FirstReactNativeProject

___________________________________________________

when we require data--->at which point in life cycle

getting called when about to render--->

componentWillMount(){

debugger;
}


npm install --save axios

axios.get('https:// ....')
.then((res)=>{console.log(res)})



axios--->asynch--->no idea of time--->state is a solution

style={

borderWidth: 1,
borderRadius: 2,
borderColor: '#ddd',
borderBottomWidth: 0,
shadowColor: '#000',
shadowOffset:{width:0, height:2},
shadowOpacity: 0.1,
shadowRadius: 2,
elevation: 1.
marginLeft: 5,
marginRight:5,
marginTop: 10



}


______________________________
important

<card> <text></text></card> then

in card

receive it as 
{props.children}

______________________

default  style in react-native


left to right
top to bottom


justifyContent: 'centre | flex-end |flex-start| space-between | space-around'---->works vertically

flexDirection: 'row'

_______________________________________
<Image source={{uri: ''}} style={{}} />
___________________________________________
destructuring looks nice


______________________________________________

scrollable---->

{ScrollView} from 'react-native';

<ScrollView></ScrollView>------->but bounces back to top

flex should be 1 in parent tag---to remove bug of bouncing back

fonSize: 18 

________________________________________________________

 TouchableOpacity
TouchableHighlight
-------------------------->with react-native search on site
react native/docs/getting started/

import from react-native
<TouchableOpacity onPress={} > </TouchableOpacity>


____________________________________

flex : 1--->means we want it expandable whenever we want
alignSelf: 'stretch',


style for text on button---->

textstyle:{
alignSelf:'center',
color: '',
fontSize: 16,
fontWeight:'600',
paddingTop: 10,
paddingBottom: 10
}


________________________________________________

onCLick or onPress

onPress={()=> console.log('akhilll') }


_______________________________________________

fn can also be passed as props

________________________________________

in API doct of react native go to LINK library

{Linking } from 'react-native'

Linking.openURL('url')

_______________________________________________

      

react-native init auth

react-native run android

import {Header, card} from 'collection';

---->collection will have index.js file

in index.js 

export * from './Button';
export * from './Card';
.
.
.
export * from './CardSection';

and now component can not be exported default instead

export { Button };

_____________________________________________________

FIREBASE

firebase--->

firebase.google.com    ----->go to console---->

create new project----------->add firebase to your webappp----->

auth---->set up sign in method--------->

email and password----->enable----> 


npm istall --save firebase ====>to install firebase in our application


-----------------------
to setup firebsae auth....

go to web setup

copy config={} from fire baseto store data base


import firebase from 'firebase';

componentWillMount(){
firebase.initialiseApp({config from firebase})
}

_____________________________________________________________

import { TextInput } from 'react-native';


<TextInput
value={this.state.text}
onChangeText={text=> this.state{text}} ///means key value same
 style={{height : 20, width : 120}}/> 


_________________________________________________

lineHeight:23,

flex is like col in bootstrap


<TextInput autoCorrect={false}  
placeholder={placeholder} or placholder="anything"
>--->in ios auto correct fn is there

______________________________

<TextInput secureTextEntry={true}>====>like type = password

---->by default --->undefined , which is false

______________________________________________
<Button onPress={}>

import firebase from 'firebase';

onButtonPress=()=>{

firebase.auth().signInWithEmailAndPassword(email,passwd)
.catch(()=>{
  firebase.auth().createUserWithEmailAndPassword(email,passwd)
  .catch(()=>{
	this.setState({error: "Sign upFail"})

})

});
}
___________________________________________________________________________________________________________________________________

 ______________________________________________________
            predefined styling
            https://www.tutorialspoint.com/react_native/react_native_text_input.htm



	









































 

