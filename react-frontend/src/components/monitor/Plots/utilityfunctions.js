export function findFirstMeasurementsIndexes(data) {
    const firstMeasurementsIndexes = [];
    let currentDate = null;

    data.forEach((measurement, index) => {
        // Extract the date part from the timestamp
        const date = measurement.timestamp.split(' ')[0];

        // Check if the date has changed
        if (date !== currentDate) {
            // Store the index of the first measurement of the new date
            firstMeasurementsIndexes.push(index);
            currentDate = date;
        }
    });

    return firstMeasurementsIndexes;
}