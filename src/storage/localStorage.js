// Save data to local storage
export const saveToLocalStorage = (key, data) => {
    try {
        const serializedData = JSON.stringify(data);

        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.log('Error saving to Local Storage: ', error);
    }
};

// Load data from local storage
export const loadFromLocalStorage = (key, defaultValue) => {
    try {
        const serializedData = localStorage.getItem(key);

        if (serializedData === null) {
            return defaultValue;
        }

        return JSON.parse(serializedData);
    } catch (error) {
        console.log('Error saving to Local Storage: ', error);

        return defaultValue;
    }
}