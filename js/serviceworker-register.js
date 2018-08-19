if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./serviceworker.js')
	.then((register) => {
		console.log('Service Worker Registration done', register);
	})
	.catch((error) => {
		console.log('Service Worker Registration failed!',error);
	});
}