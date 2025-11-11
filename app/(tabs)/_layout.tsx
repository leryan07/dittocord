import { Tabs } from 'expo-router';

import DittoAvatar from '@/components/DittoAvatar';
import { Colors } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
    const { t } = useTranslation();

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.backgroundVariant1
                },
                tabBarActiveTintColor: Colors.white,
                headerStyle: {
                    backgroundColor: Colors.backgroundDefault,
                },
                headerTintColor: Colors.white,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: t('home'),
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='home-sharp' color={color} size={24} />
                    ),
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: Colors.backgroundVariant2,
                    },
                    headerStatusBarHeight: 0
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: t('notifications'),
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='notifications-sharp' color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ditto"
                options={{
                    title: t('ditto'),
                    tabBarIcon: () => (
                        <DittoAvatar isTabBarIcon={true} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
