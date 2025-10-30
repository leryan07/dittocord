import BaseText from "@/components/BaseText";
import BaseView from "@/components/BaseView";

export default function NotificationsScreen() {
    return (
        <BaseView style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <BaseText style={{ fontSize: 20, fontWeight: 'bold' }}>
                Nothing here yet
            </BaseText>
            <BaseText style={{ marginTop: 10 }}>
                Come back for notifications on events, streams, and more.
            </BaseText>
        </BaseView>
    );
}