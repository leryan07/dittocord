import BaseView from "@/components/BaseView";
import MessagesOverview from "@/components/MessagesOverview";
import ServerIconButton from "@/components/ServerIconButton";
import ServerOverview from "@/components/ServerOverview";
import { Colors } from "@/constants/colors";
import {
  useServerManager
} from '@/hooks/useServerManager';
import Ionicons from '@expo/vector-icons/Ionicons';
import { generateClient } from "aws-amplify/data";
import { useEffect, useRef, useState } from "react";
import { VirtualizedList } from "react-native";
import { Divider } from "react-native-paper";
import type { Schema } from "../../amplify/data/resource";
import ServerModal from "../../components/ServerModal";

const client = generateClient<Schema>();

const getItem = (data: Schema['Server']['type'][], index: number) => data[index];
const getItemCount = (data: Schema['Server']['type'][]) => data.length;

export default function Index() {
  const [showServerModal, setShowServerModal] = useState(false);

  const {
    servers,
    setServers,
    selectedId,
    selectedServer,
    setSelectedId,
  } = useServerManager();

  const prevServerIdsRef = useRef<string[]>([]);

  useEffect(() => {
    const sub = client.models.Server.observeQuery().subscribe({
      next: ({ items }) => {
        const sortedItems = items.slice().sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setServers(sortedItems);

        const currentIds = sortedItems.map(item => item.id);
        const prevIds = prevServerIdsRef.current;
        const prevIdSet = new Set(prevIds);

        const hasAdded = currentIds.filter(id => !prevIdSet.has(id)).length > 0;
        const hasRemoval = prevIds.length > currentIds.length;

        if (items.length === 0) {
          setSelectedId('messages');
        } else if (hasAdded || hasRemoval) {
          setSelectedId(currentIds[0]);
        }

        prevServerIdsRef.current = currentIds;
      },
    });

    return () => sub.unsubscribe();
  }, []);

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
          data={servers}
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
            serverName={selectedServer?.name || ''} />
        }
      </BaseView>

      <ServerModal
        showModal={showServerModal}
        setShowModal={(visible) => setShowServerModal(visible)} />
    </BaseView>
  );
}