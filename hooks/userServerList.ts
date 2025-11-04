import { useState } from 'react';

export type DittoServer = {
    id: string;
    title: string;
};

export function useServerList(initialServers: DittoServer[] = []) {
    const [serverList, setServerList] = useState<DittoServer[]>(initialServers);
    const [selectedId, setSelectedId] = useState<string>('messages');

    const selectedServer = serverList.find(s => s.id === selectedId);

    const deleteServer = (id: string) => {
        setServerList(prev => {
            const updated = prev.filter(s => s.id !== id);

            if (updated.length > 0) {
                const nextIndex = Math.min(prev.findIndex(s => s.id === id), updated.length - 1);
                setSelectedId(updated[nextIndex].id);
            } else {
                setSelectedId('messages');
            }

            return updated;
        });
    };

    function createServer() {
        let serverNumber;

        setServerList(prev => {
            serverNumber = prev.length + 1;
            const newServer = {
                id: `server${serverNumber}`,
                title: `Server ${serverNumber}`,
            };
            return [...prev, newServer];
        });

        setSelectedId(`server${serverNumber}`);
    }


    return {
        serverList,
        selectedId,
        selectedServer,
        setSelectedId,
        createServer,
        deleteServer,
    };
}