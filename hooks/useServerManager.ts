import { generateClient } from 'aws-amplify/data';
import { useState } from 'react';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>()

export function useServerManager() {
    const [servers, setServers] = useState<Schema['Server']['type'][]>([]);
    const [selectedId, setSelectedId] = useState<string>('messages'); // Defaulting to messages when there are no servers

    const selectedServer = servers.find(s => s.id === selectedId);

    const deleteServer = async (id: string) => {
        const { errors } = await client.models.Server.delete({ id });

        if (errors) {
            console.error("An error occurred trying to delete a server.", errors);
            return;
        }
    };

    const createServer = async () => {
        const serverCount = (await client.models.Server.list()).data.length;
        const result = await client.models.Server.create({
            name: `Test Server ${serverCount + 1}`
        })

        if (result.errors || result.data?.id == null) {
            console.error("An error occurred trying to create a server.", result.errors);
            return;
        }
    };

    return {
        servers,
        setServers,
        selectedId,
        setSelectedId,
        selectedServer,
        createServer,
        deleteServer
    };
}