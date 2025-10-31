import { Colors } from "@/constants/colors";
import { ReactNode } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

type BaseTextProps = {
    children: ReactNode;
    style?: TextStyle;
};

export default function BaseText({ children, style }: BaseTextProps) {
    return (
        <Text style={[styles.base, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    base: {
        color: Colors.white,
    },
});