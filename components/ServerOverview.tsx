import { Colors } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import { Button, IconButton } from "react-native-paper";
import BaseHomeContentView from "./BaseHomeContentView";

type ServerOverviewProp = {
    serverId: string,
    serverName: string,
    onDeleteServer: (id: string) => void
};

type ServerHeaderActionsProp = {
    serverId: string,
    onDeleteServer: (id: string) => void
};

export default function ServerOverview({
    serverId,
    serverName,
    onDeleteServer
}: ServerOverviewProp) {
    return (
        <BaseHomeContentView
            title={serverName}
            headerChildren={
                <HeaderActions
                    serverId={serverId}
                    onDeleteServer={onDeleteServer} />}
        />
    );
}

const HeaderActions = ({
    serverId,
    onDeleteServer
}: ServerHeaderActionsProp) => {
    const { t } = useTranslation();

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
                    () => {
                        onDeleteServer(serverId);
                    }
                } />
        </>
    );
}