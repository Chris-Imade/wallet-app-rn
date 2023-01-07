import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Home from "../screens/Home";
import { colors } from '../components/colors';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Man from "../assets/man.png";

type RootStackParamsList = {
    Welcome: undefined;
    Home: undefined;
}

const RootStack: FunctionComponent = () => {

    const Stack = createNativeStackNavigator<RootStackParamsList>();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#ffffff00",

                        },
                        headerTransparent: true,
                        headerShadowVisible: false,
                        headerTintColor: colors.secondary,
                        headerRight: () => <Profile img={Man} imgContainerStyle={{ backgroundColor: colors.tertiary }} />,
                        headerRightContainerStyle: {
                            paddingRight: 25
                        },
                        headerLeftContainerStyle: {
                            paddingLeft: 10
                        }
                    }}
                    initialRouteName='Home'
                >
                    <Stack.Screen 
                        name="Home"
                        component={Home}
                        options={{
                            headerTitle: (props) => (
                                <Greeting mainText='Hey Jephthah' subText='Welcome back' {...props} />
                            ),
                            headerLeft: () => <></>,
                        }}
                    />
                    <Stack.Screen 
                        name="Welcome"
                        component={Welcome}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default RootStack;