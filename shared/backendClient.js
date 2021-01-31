
export const pullEntries = async (fetch, entries) => {
    try {
        let changed = false;
        const serverEntries = await (await fetch(`/entry`)).json();

        // delete locally server side deleted entries
        let modifiedEntries = entries.map(entry => {
            const serverEntry = serverEntries.find(serverEntry => serverEntry.id===entry.id);
            if (serverEntry) {
                if (serverEntry.deleted) {
                    changed = true;
                    return null;
                } else {
                    
                }
                return entry;
            }
            return entry;
        }).filter(entry => !!entry);

        // find new entries from server
        const newEntries = serverEntries
            .filter(serverEntry => !serverEntry.deleted)
            .filter(serverEntry => !modifiedEntries.some(modifiedEntry => modifiedEntry.id === serverEntry.id));

        if (newEntries.length) {
            changed = true;
            modifiedEntries = [...modifiedEntries, ...newEntries];
        }

        if (changed)
            return modifiedEntries;
        else
            return entries;
    } catch (error) {
        console.log("Backend not reachable.");
        return entries;
    }
};

export const pushEntries = async (fetch, entries) => {
    // console.log("pushEntries", entries);

    try {
        await fetch(`/entry/all`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(entries)
        });
    } catch (error) {
        console.log("Backend not reachable.");
    }
};
