export const newUvValue = (data) => ({
    type: 'SENSOR_UV_NEW_VALUE',
    timestamp: data.t,
    value: data.v
});

export const newTempValue = (data) => ({
    type: 'SENSOR_TEMP_NEW_VALUE',
    timestamp: data.t,
    value: data.v
});

export const newHumValue = (data) => ({
    type: 'SENSOR_HUM_NEW_VALUE',
    timestamp: data.t,
    value: data.v
});

export const newRFIDValue = (data) => ({
    type: 'SENSOR_RFID_NEW_VALUE',
    timestamp: data.t,
    value: data.v
});

export const newGpsValue = (data) => ({
    type: 'SENSOR_GPS_NEW_VALUE',
    timestamp: data.t,
    value: data.v
});