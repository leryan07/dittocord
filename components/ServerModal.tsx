import { Colors } from '@/constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { Modal } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BaseText from './BaseText';

type ServerModalProps = {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    onCreateServer: () => void;
};

export default function ServerModal({
    showModal,
    setShowModal,
    onCreateServer
}: ServerModalProps) {
    const { t } = useTranslation();

    return (
        <Modal
            animationType="slide"
            visible={showModal}
            presentationStyle='fullScreen'
            statusBarTranslucent={true}
            backdropColor={Colors.backgroundDefault}
            onRequestClose={() => {
                setShowModal(!showModal);
            }}>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <IconButton
                        icon={({ size, color }) => (
                            <Ionicons name='close' size={size} color={color} />
                        )}
                        iconColor={Colors.white}
                        onPress={() => {
                            setShowModal(false);
                        }} />
                    <BaseText style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        textAlign: 'center'
                    }}>
                        {t('createYourServer')}
                    </BaseText>
                    <Button
                        style={{ marginHorizontal: 8, padding: 12, marginTop: 16 }}
                        icon={({ size, color }) => (
                            <Ionicons name='add' size={size} color={color} />
                        )}
                        textColor={Colors.white}
                        labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
                        contentStyle={{ justifyContent: 'flex-start' }}
                        onPress={
                            () => {
                                onCreateServer();
                                setShowModal(false)
                            }
                        }
                        buttonColor={Colors.serverIconContainer}>
                        {t('createMyOwn')}
                    </Button>
                </SafeAreaView>
            </SafeAreaProvider>
        </Modal>
    );
}
