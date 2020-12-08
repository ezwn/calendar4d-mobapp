
const backendUri = "http://B85M:9080";

export const pullEntries = async (entries) => {
    try {
        const serverEntries = await (await fetch(`${backendUri}/entry`)).json();

        return entries.map(entry => {
            const serverEntry = serverEntries.find(serverEntry => serverEntry.id===entry.id);
            if (serverEntry) {
                if (serverEntry.deleted) {
                    return null;
                } else {
                    
                }

                return entry;
            }
            return entry;
        }).filter(entry => !!entry);


    } catch (error) {
        console.log("Backend not reachable.");
    }
};

export const pushEntries = async (entries) => {
    // console.log("useBackendSave");

    try {
        await fetch(`${backendUri}/entry/all`, {
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
