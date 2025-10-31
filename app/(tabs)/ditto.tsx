import BaseText from "@/components/BaseText";
import BaseView from "@/components/BaseView";
import CardView from "@/components/CardView";
import DittoAvatar from "@/components/DittoAvatar";
import { Colors } from "@/constants/colors";
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    cardTitleText: {
        color: Colors.cardTitleText
    },
    cardBodyText: {
        color: Colors.cardBodyText
    }
});

export default function DittoScreen() {
    const { t } = useTranslation();

    return (
        <BaseView>
            <View style={{ flex: 1, backgroundColor: Colors.dittoPink }} />
            <BaseView style={{ flex: 6, marginHorizontal: 10 }}>
                <DittoAvatar />
                <BaseView style={{ marginTop: 60, marginHorizontal: 5, rowGap: 20 }}>
                    <BaseText style={{ fontSize: 30 }}>{t('ditto')}</BaseText>
                    <CardView style={{ rowGap: 15 }}>
                        <Text style={styles.cardTitleText}>{t('about')}</Text>
                        <Text style={styles.cardBodyText}>{t('aboutDitto')}</Text>
                    </CardView>
                </BaseView>
            </BaseView>
        </BaseView>
    );
}
