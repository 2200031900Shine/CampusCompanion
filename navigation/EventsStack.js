import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import EventsScreen from '../screens/EventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator
      initialRouteName="EventsList"
      screenOptions={{
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name="EventsList" component={EventsScreen} options={{ title: 'Events' }} />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{
          title: 'Event Details',
          // custom simple fade-in transition
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                opacity: current.progress,
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
    </Stack.Navigator>
  );
}
