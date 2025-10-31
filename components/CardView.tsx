import { Colors } from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.backgroundVariant1,
        padding: 15,
        borderRadius: 10
    }
});

type CardViewProps = {
    children: ReactNode,
    style?: ViewStyle
}

export default function CardView({ children, style }: CardViewProps) {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
}