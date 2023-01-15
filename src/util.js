export const setIfExists = (object, key, value) => {
    if (!object || !key) {
        return;
    }

    if (key in object) {
        object[key] = value;
    }
}

export const setAllIfExist = (object, mapping) => {
    if (!object || !mapping) {
        return;
    }

    for (var key in mapping) {
        setIfExists(object, key, mapping[key]);
    }
}
