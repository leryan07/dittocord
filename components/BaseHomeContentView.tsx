import { ReactNode } from "react";
import { View } from "react-native";
import BaseText from "./BaseText";
import BaseView from "./BaseView";

type BaseHomeContentViewProps = {
    title: string,
    headerChildren: ReactNode;
};

export default function BaseHomeContentView({
    title,
    headerChildren
}: BaseHomeContentViewProps) {
    return (
        <BaseView style={{ margin: 20 }}>
            <BaseText style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</BaseText>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                {headerChildren}
            </View>
        </BaseView>
    );
}