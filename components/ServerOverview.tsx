import { Colors } from "@/constants/colors";
import { useServerManager } from "@/hooks/useServerManager";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { Button, IconButton } from "react-native-paper";
import BaseHomeContentView from "./BaseHomeContentView";

type ServerOverviewProp = {
    serverId: string,
    serverName: string
};

type ServerHeaderActionsProp = {
    serverId: string
};

export default function ServerOverview({
    serverId,
    serverName
}: ServerOverviewProp) {
    return (
        <BaseHomeContentView
            title={serverName}
            headerChildren={
                <HeaderActions
                    serverId={serverId} />}
        />
    );
}

const HeaderActions = ({
    serverId,
}: ServerHeaderActionsProp) => {
    const { t } = useTranslation();
    const { deleteServer } = useServerManager();

    return (
        <>
            <Button
                icon={({ size, color }) => (
                    <Ionicons name="search" size={size} color={color} />
                )}
                buttonColor={Colors.grayButtonVariant1}
                mode="contained"
                style={{ flex: 1 }}>
                {t('search')}
            </Button>
            <IconButton
                icon={({ size, color }) => (
                    <Ionicons name="trash" size={size} color={color} />
                )}
                iconColor={Colors.red}
                containerColor={Colors.grayButtonVariant1}
                onPress={
                    () => deleteServer(serverId)
                } />
        </>
    );
}