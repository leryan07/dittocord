import BaseText from "@/components/BaseText";
import BaseView from "@/components/BaseView";
import { useTranslation } from "react-i18next";

export default function NotificationsScreen() {
    const { t } = useTranslation();

    return (
        <BaseView style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <BaseText style={{ fontSize: 20, fontWeight: 'bold' }}>
                {t('emptyPlaceholderTitle')}
            </BaseText>
            <BaseText style={{ marginTop: 10 }}>
                {t('emptyNotificationsMessage')}
            </BaseText>
        </BaseView>
    );
}