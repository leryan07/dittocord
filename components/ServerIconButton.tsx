import { Colors } from '@/constants/colors';
import { View, ViewStyle } from 'react-native';
import type { IconButtonProps } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import BaseView from './BaseView';

export type ServerIconButtonProps = {
    id: string;
    selectedId: string;
    icon: IconButtonProps['icon'];
    size?: number;
    iconColor?: string;
    containerColor?: string;
    onPress?: () => void;
    style?: ViewStyle
};

const ServerIconButton = ({
    id,
    selectedId,
    icon,
    size = 28,
    iconColor = Colors.serverIconColor,
    onPress,
    style
}: ServerIconButtonProps) => {
    const isSelected = id === selectedId;
    const containerColor = isSelected ? Colors.dittoPink : Colors.serverIconContainer
    const borderRadius = isSelected ? 15 : 50

    return (
        <BaseView style={{
            flexDirection: 'row',
            flex: 0,
            backgroundColor: Colors.backgroundVariant2,
            justifyContent: 'center',
        }}>
            {isSelected && <View style={{
                width: 10,
                height: 48,
                borderRadius: 10,
                backgroundColor: Colors.white,
                top: '50%',
                left: -5,
                position: 'absolute',
                transform: [{ translateY: -24 }]
            }} />
            }
            <IconButton
                icon={icon}
                size={size}
                iconColor={iconColor}
                containerColor={containerColor}
                onPress={onPress}
                style={{
                    borderRadius,
                    width: 48,
                    height: 48,
                    alignSelf: 'center',
                    ...style
                }}
            />
        </BaseView>
    );
};

export default ServerIconButton;
