import { Colors } from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type BaseViewProps = {
    children?: ReactNode,
    style?: ViewStyle
};

export default function BaseView({ children, style }: BaseViewProps) {
    return (
        <View style={[styles.base, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: Colors.backgroundDefault,
    }
});