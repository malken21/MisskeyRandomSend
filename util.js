function sendPostRequest(url, payload) {
    const options = {
        "method": "post",
        "contentType": "application/json",
        "payload": JSON.stringify(payload)
    };
    try {
        const response = UrlFetchApp.fetch(url, options);
        return response.getContentText();
    } catch (err) {
        return err;
    }
}

function toCalculationList(list) {
    return list.map(item => {
        return item[0];
    }).filter(Boolean);
}
function toSheetList(list) {
    return list.map(item => {
        return [item];
    });
}

function sendNote(text) {
    const payload = {
        i: TOKEN,
        text: text,
        visibility: Visibility
    };
    Logger.log(sendPostRequest(MisskeyURL + "/api/notes/create", payload));
}