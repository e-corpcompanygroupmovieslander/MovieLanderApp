import { CONDITION } from "../CONDITION/Condition.js";

const DEJSON = (STORAGE, KEY, callback) => {
    let JSONDATA = '';

    // Assuming CONDITION function handles asynchronous retrieval of data
    CONDITION(
        STORAGE,
        () => {
            JSONDATA = localStorage.getItem(KEY);
            return JSONDATA;
        },
        () => {
            JSONDATA = sessionStorage.getItem(KEY);
            return JSONDATA;
        }
    );

    // Check if JSONDATA is not empty before parsing
    if (JSONDATA) {
        let data = JSON.parse(JSONDATA);
        return callback(data);
    } else {
        console.error('No data found in storage');
        return null;
    }
}

export { DEJSON };
