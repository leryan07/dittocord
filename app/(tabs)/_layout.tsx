import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#2D2D37'
                },
                tabBarActiveTintColor: '#FFF',
                headerStyle: {
                    backgroundColor: '#1C1D22',
                },
                headerTintColor: '#FFF',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='home-sharp' color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='notifications-sharp' color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="you"
                options={{
                    title: 'You',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='person-circle-sharp' color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
