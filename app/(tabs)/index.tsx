import BaseView from "@/components/BaseView";
import MessagesOverview from "@/components/MessagesOverview";
import ServerIconButton from "@/components/ServerIconButton";
import ServerOverview from "@/components/ServerOverview";
import { Colors } from "@/constants/colors";
import {
  DittoServer,
  useServerList
} from '@/hooks/userServerList';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { VirtualizedList } from "react-native";
import { Divider } from "react-native-paper";
import ServerModal from "../../components/ServerModal";

const getItem = (data: DittoServer[], index: number) => data[index];
const getItemCount = (data: DittoServer[]) => data.length;

export default function Index() {
  const [showServerModal, setShowServerModal] = useState(false);

  const {
    serverList,
    selectedId,
    selectedServer,
    setSelectedId,
    createServer,
    deleteServer,
  } = useServerList();

  return (
    <BaseView style={{
      flexDirection: 'row',
      backgroundColor: Colors.backgroundVariant2
    }}>
      <BaseView style={{
        backgroundColor: Colors.backgroundVariant2,
        rowGap: 3
      }}>
        <ServerIconButton
          icon={({ color, size }) => (
            <Ionicons name="chatbubble" size={size} color={color} />
          )}
          id='messages'
          selectedId={selectedId}
          onPress={
            () => setSelectedId('messages')
          }
        />
        <Divider style={{ width: 32, alignSelf: 'center' }} />
        <VirtualizedList
          data={serverList}
          renderItem={({ item }) =>
            <ServerIconButton
              id={item.id}
              selectedId={selectedId}
              icon={({ color, size }) => (
                <Ionicons name="server" size={size} color={color} />
              )}
              onPress={
                () => setSelectedId(item.id)
              }
            />
          }
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
          ListFooterComponent={
            <ServerIconButton
              icon={({ color, size }) => (
                <Ionicons name="add" size={size} color={color} />
              )}
              iconColor="green"
              id="addServer"
              selectedId={selectedId}
              onPress={() => setShowServerModal(true)}
            />
          }
        />
      </BaseView>

      <BaseView style={{
        flex: 4,
        borderTopLeftRadius: 25
      }}>
        {selectedId === 'messages' && <MessagesOverview />}
        {selectedId !== 'messages' &&
          <ServerOverview
            serverId={selectedServer?.id || ''}
            serverName={selectedServer?.title || ''}
            onDeleteServer={deleteServer} />
        }
      </BaseView>

      <ServerModal
        showModal={showServerModal}
        setShowModal={(visible) => setShowServerModal(visible)}
        onCreateServer={createServer} />
    </BaseView>
  );
}