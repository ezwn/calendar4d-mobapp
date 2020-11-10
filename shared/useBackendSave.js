
export const useBackendSave = async (measures) => {
    // console.log("useBackendSave");

    try {
        await fetch("http://B85M:8080/entry/all", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(measures.map(mes => ({
                id: mes.id,
                time: mes.time,
                type: mes.type,
                subject: mes.subject,
                duration: mes.duration
            })))
        });
    } catch(error) {
        console.log("Backend not reachable.");
    }
};
