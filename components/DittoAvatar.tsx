import { Colors } from "@/constants/colors";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    circularDefault: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        zIndex: 1,
        borderColor: Colors.backgroundDefault,
        borderWidth: 5,
        overflow: 'hidden',
        top: -50
    },
    circularTabBarIcon: {
        width: 24,
        height: 24,
        top: 0,
        borderWidth: 0,
        position: 'relative'
    }
});

type DittoAvatarProps = {
    isTabBarIcon?: Boolean
}

export default function DittoAvatar({ isTabBarIcon }: DittoAvatarProps) {

    return (
        <Image
            source={require('../assets/images/ditto-pokemon.jpeg')}
            style={[styles.circularDefault, isTabBarIcon && styles.circularTabBarIcon]} />
    )
}