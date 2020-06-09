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



            ____________________________________________________________________________________________

            import {ActivityIndicator} from 'react-native';

<View>

<ActivityIndicator size={size || 'large'}/>
</View>

flex:1=====>full width

__________________________________________________________________

react-native init tech_stack

stephengrider.github.io/JSPlaygrounds

Action---->is like customer with plate and complaint

reducer----->cook


state --->final representation

(reducer + state)==store

__________________________________

const reducer=(state=[],action)=>{
if(action.type=='split')
return action.payload.split('')
return state;v  
}


const store = Redux.createStore();

store.getState();
const action={type:'split',payload='adsdf'}

store.dispatch(action);
sore.getState();
___________________________________________
why are we doing this??--->easy to decide

npm install --save redux react-redux

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 	'./reducers';
<Provider store={createStore}>

</Provider>

new folder----->reducer--->new file index.js;
in index.js

import { combineReducers } from 'redux';

export default combineReducers({
libraries: ()=>[]

});

__________________________________________________
import { connect } from 'react-redux';

const mapStateToProps = (state,ownProps) =>{
anything that this fn returns will be treated as props in same component


};

export default connect(fn to get after action performed which will have updated state or null, entire action object and it will be passed as props in same component)(LibraryList);
    
------------->mobile devices are memory constraint


__________________________________________________________

ListView in practice

import { FlatList } from 'react-native';

renderItem(){

}

return(
<FlatList
 data={this.props.libraries}
 renderItem={this.renderItem}
 leyExtractor={ (library) => libarry.id }
   />
)


_________________________________

create action folder--->
index.js--->

export const selectedLibrary =() => {
return :{
type: 'select_library',
payload: libraryId
}
}


______________________________________________

import * as action from './actions';


_________________________________________________________

<TouchableWithoutFeedback>

_________________________________________________________

reducer will have (state=null,action)=>{ //if state = undefined assign to null
switch (action.type){

case 'select_library':
	return action.payload;

default:
	return state;

}

}

_____________________________________________________________

import {LayoutAnimation} from 'react-native';

componrntWIllUpdate(){
LayoutAnimation.spring();
}

______________________________________________________________________


S14E4

npm install --save react-redux redux--->installing two mudules

src
	---->app.js

		import packages-->

___________________________________________________

react-native run-ios ---->run simulator


S14E5
<Provider store={createStore()}>

export default combinedReducer({
banana: ()=> []
});
____________________________

import reducers from '/reducers';

___________________________________________________________

S15E1

redux---intro

_____________________________________________________________

S15E2

src--->reducers--->index.js


loginForm.js

import React, {Component} from 'react';

class LoginFOrm extends Component{
render(){
return(<View></View>);
}
}

export default LoginForm;
------------------------
___________________________________________________________

S15E3

logic behind redux

onEmailChange(text) {

}


-------------------

create actionCreator

src---->actions-->index.js-->

export const funct(text)=>{
return {
type: '',
payload:text
}
}
___________________________________________________

S15E4

--->.eslintrc

"rules": {
"arrow-body-style": 0
}

---------------------------

import { coonect } from 'react-redux';


onEmailChange(text) {
this.props.emailchanged(text)
}

export default connect(null, {emailChanged})(LoginFOrm);


-----------------------------

create new reducer--->
src--->reducers--->
index.js

import {combineReducers} from 'react-redux'; 

export default combineReducers({

auth: AuthReducer 
});


authReducer.js
import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE ={email: ''};

export default (state = INITIAL_STATE ,action) => {
switch(action.type){

case EMAIL_CHANGED:

default:
return state;
}

}


__________________________________________________________

S15E5

action-->index.js
import {EMAIL_CHANGED} from './types';

fn(text)=>{
return{
type: 'email_changed',
payload: text
}

}

----->src-->actions--->types.js

export const EMAIL_CHANGED = 'email_changed';


_______________________________________________________________

S16E1------immutate state react redux


when we call dispach action... Checks new state equal to old state.....

Only same reference in JavaScript... That's why redux.....

CombineReducer.js on github....


S16E2----->

Creating immutable state.....

In actionreducer.js
Switch (action.type){


Case: email_changed
return {...state, email: action.payload};

Default 
Return state;
}



Const MapstateToProps = state =>{
Return{
email :state.email

}
}


Recieve in props

-----------------------------------_-----_______________

S16E3

Onchangetext= onpaswdchange


Onpaswdchange = text=>{

This.props.passwordchange(text)

}


Now define action creator....

Const passwordchanged=>{
Return
Type and payload

}

............configure in

ActionReducer.js

Can have many reducers files.... That's why initial state is needed.....

____________________________________________________________________

S16E4

asynch redux intro...


______________________________________________________

S16e5-----

Asynch with redux------

export const login user = ( {email, password} )=>

Firebase.auth().signInwithEmailandPassword(email,password).then( user =>{
Console. Log(user);
 }).
-----++++++++++++++++++++

Npm I --save redux-thunk 

Now we can return function from actions.....

Will have direct access to dispatch action.....

++++++++++++++++++++(++++++++++++++
S16e6

Redux thunk in practice.....


App.js

Import ReduxThunk from redux-thunk;


CreateStore( reducers, {}, applyMiddleware(ReduxThunk));



In action----->where firebase code is....

Return (dispath)=> { asynch code like firebase...


}
++++++++++++++++++++++++++++++++++++
S16e7

Now we can dispatch action manually

From asynch function...
.then( user => {
dispatch({. Type :Login_usrt , payload : data}
}


User can be added from firebase too.....

All action should be in connect....

++++++++++++++++++++++++++++++

S16e8

Types.js

Export const Login_user_ success

AuthReducer.js
Reducer will have switch.....of action....


-----------------------------
S16e9

Firebase.auth.createUserWirh email and password

---------------------------
S16E10

Akhils conclusion... Dispatch will move to reducers as it is type of action only

RenderError() in component
If condition with props...,
View tag
And text tag.... From react native

----------------------------------------s16e11

Firebase catch working......

----------------------------------------s16e12

Type. Js

Export const name='name';

From reducer file we can change other state too while returning new object asking with Previos state....


From beginning...... Import actions in our main component...., and call them using props.action name which can that have arguement like text.... Action is imported above and call those actions on some event in our component....

------------------------s17e1

Navigation..... With react-native....
Library-----react-native-router-flux@3.35.0

<Scene 
key= "" -----> like id
component={}------>component to show
Title=""------>header provided....
Initial----->first screen to show
>
------------------------s17e2

react-native-router-flux ---library...

Src--->router. Js---->
Import react from react;
Import {Scene, Router} from same library...

Const compoName
<Router >
<Scene key="'root">
<Scene key="" component={login}>
</Scene>
<scene/>


Export it

--------------------s17e3

EmploymentList.js

Boilerplate code...
Import react, {component} from react;

Class component name

Render function in class only


Export



--------

Another scene in root scene.....

Scene props

Initial, if there are many scenes in root.....

-------------------0000-------

S17e4....

navigate to another component---->

we'll know in actionCreator that user is logged in succesfully.....

import Action from from 'react-Native-flux';

Actions.employeeList();---->employeeList is key added in Scene
--->so in order to navigate Action.Scene_key_name();

___________________________________________________

S17E5

by Default button by redux-flux to go back--->so change scene-->
<Scene key="root" hideNavBar>===>to hide upper 
<Scene key="Auth">
<Scene key="employeeList" component={} title="" rightTitle="">====>right title give t
<Scene>
====================>to remove automatic button

action creator file--->

Action.#ParentSceneName();====>now no back button by react flux package

_____________________________________
------------------------------
S17E6

create new employee and save in db

<Scene
rightTitle="Add"
onRight={()=>{}}	
></Scene>

two other props of Scene

___________________________________________________________

S17E7

form to create Employee--->

EmployeeCreate.js

imort react, {Component } from react;
import {Text, View} from 'react-native';

class name extende Component{
render(){
return(jsx)
}
}

export default name;


--______________________

in earlier parent Scene

create another scene-->and set navigation in onRight props of scene==>

Actions.employeeCreate();

========>

in parent scene if more than one Scene do put Initial props in scene

____________________________________________________

S17E8

EmployeeCreate.js

imort react, {Component } from react;
import {Text, View} from 'react-native';

class name extende Component{
render(){
return(jsx)
}
}

export default name;

----------------->Form Generation
jsx only---->

__________________________________________________
S17E9

redux-form--->

actions--->will not put this in index.js--->lets create new actionCreator file-->
import {EMPLYEE_UPDATE } from 'type';

export const employeeUpdate =({ props, value})=>{

	return{
	type: EMPLYEE_UPDATE,
payload: { prop, value}
};

};
------------------------
now in Reducer--->createAnotherReducer-->

import {
EMPLOYEE_UPDATE
} from 'action/type';


export default (state = INITIAL_STATE, action) => {
swicth(action.tyoe) {
default:
return state;
}
}

______________________________________
S17E10----->wiring up of action and reducer together-->important

in reducer file only--->

const INITIAL_state={
name:'',
phone:'',
shift:''
};

case EMPLOYEE_UPDATE:
	RETURN {...SATATE,[action.payload.prop]: action.prop.value}====>key interpolation concept

	
___________

changing index file of actions...

export * from './Authactions';

export * from './EmployeeActions';

___________________________________________________________________
S17E11

in reducer --->index.js-->we have combinedReducer-->

export default combinedReducer({

auth: AuthReducer,
emplyoeeForm: EmployeeForm

})

_____________________________

in our form--->

import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';


<#InputTagForJSX
label=""
placeholder=""
value={this.props.name}
onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text})}
/>



const mapStateToProps =(state) =>{

const { name, phone, shift }= state.employeeForm;

return { name, phine, shift};

};

export default connect(mapStateToProps ,{employeeUpdate})(EmployeeCreate);


_____________________________________________________
S17E12

import {Picker} from 'react-native'

picker is like--->select tag in html

<Picker
selectedValue={this.props.shift}
onValueChange={value => this.props.employeeUpdate({ props: 'shift', value})}
>================>destructuring
<Picker.item label="" value="">
</Picker>



// by default picker has default 0 width

hence
<Picker style={{flex: 1}}


____________________________________________________________

S17E13

label to know what we are selecting----->

impoort { Text } from 'react-native';


const style = {
fontSize: 18,
paddingLeft: 20
}


//# flexDirection :'column'====>

//c style can have array style={[ObjAa,OBjb]}===>rightMost will override

_________________________________________________________

S18E1

























 

