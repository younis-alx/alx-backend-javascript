function handleResponseFromAPI(promise) {
    promise.then((response) => {
        console.log('Got a response from the API');
        return response;
    }).then((response) => {
        if (response.status === 200 && response.body === 'success') {
            return { status: 200, body: 'success' };
        } else {
            return {};
        }
    }).catch((error) => {
        console.error('Error:', error);
        return {};
    });
}