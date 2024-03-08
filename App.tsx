import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavi from "./tab/tabNavigator";
import BuildingTypePage from "./screen/buildingType";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='tabNav' component={TabNavi} />
                {/* building type */}
                <Stack.Screen name='process' component={BuildingTypePage} />
                <Stack.Screen name='stage' component={BuildingTypePage} />
                <Stack.Screen name='penal' component={BuildingTypePage} />
                <Stack.Screen name='idc' component={BuildingTypePage} />
                <Stack.Screen name='pfs' component={BuildingTypePage} />
                <Stack.Screen name='pixCollage' component={BuildingTypePage} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}