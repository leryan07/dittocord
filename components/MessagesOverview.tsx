import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { Button, IconButton } from "react-native-paper";
import BaseHomeContentView from "./BaseHomeContentView";

export default function MessagesOverview() {
    const { t } = useTranslation();

    return (
        <BaseHomeContentView title={t('messages')} headerChildren={<HeaderActions />} />
    );
}

const HeaderActions = () => {
    const { t } = useTranslation();

    return (
        <>
            <IconButton
                icon={({ size, color }) => (
                    <Ionicons name="search-outline" size={size} color={color} />
                )}
                iconColor={Colors.white}
                containerColor={Colors.grayButtonVariant1}
                style={{ marginLeft: 0 }}
            />
            <Button
                icon={({ size, color }) => (
                    <Ionicons name="person-add" size={size} color={color} />
                )}
                buttonColor={Colors.grayButtonVariant1}
                mode="contained"
                style={{ flex: 1 }}>
                {t('addFriends')}
            </Button>
        </>
    );
}