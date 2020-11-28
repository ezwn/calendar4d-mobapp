
export const useBackendSave = async (measures) => {
    // console.log("useBackendSave");

    try {
        await fetch("http://B85M:8080/entry/all", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(measures)
        });
    } catch(error) {
        console.log("Backend not reachable.");
    }
};
