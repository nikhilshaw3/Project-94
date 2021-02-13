import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ExerciseScreen from '../screens/ExerciseScreen';
import ImportantTerms  from '../screens/ImportantTermsScreen';
import DetailScreen from '../screens/DetailsScreen'

export const AppStackNavigator = createStackNavigator({
    ImportantTerms : {
        screen : ImportantTerms,
        navigationOptions:{
          headerShown : false
        }
      },
    ExerciseScreen : {
    screen : ExerciseScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  DetailScreen : {
    screen : DetailScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'ImportantTerms'
  }
);
