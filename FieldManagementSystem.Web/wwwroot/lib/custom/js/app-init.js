// Flag to prevent multiple initializations
if (!window.isAppInitialized) {
    window.isAppInitialized = false;
}

window.addEventListener('DOMContentLoaded', function () {
    if (!window.isAppInitialized) {
        if ('cordova' in window && cordova.platformId === 'android') {
            const ANDROID_WEBVIEW_MIN_VER = 71;
            const GOOGLE_CHROME_MIN_VER = 71;

            // Error Handler
            const handleWebViewError = (webViewName, packageName) => {
                navigator.notification.alert(
                    `You're using an outdated version of ${webViewName}. Please update it from the Play Store and then open the app again.`,
                    function () {
                        navigator.app.exitApp();
                        if (packageName) {
                            window.plugins.webViewChecker.openGooglePlayPage(packageName);
                        }
                    },
                    'Alert',
                    'OK'
                );
            };

            // Device Ready Event
            document.addEventListener('deviceready', function () {
                window.plugins.webViewChecker.isAndroidWebViewEnabled()
                    .then(isEnabled => {
                        if (isEnabled) {
                            window.plugins.webViewChecker.getAndroidWebViewPackageInfo()
                                .then(packageInfo => {
                                    if (parseInt(packageInfo.versionName.split('.')[0]) < ANDROID_WEBVIEW_MIN_VER) {
                                        handleWebViewError('Android WebView', packageInfo.packageName);
                                    } else {
                                        app.init();
                                        window.isAppInitialized = true;
                                    }
                                })
                                .catch(() => handleWebViewError('Android WebView'));
                        } else {
                            window.plugins.webViewChecker.getCurrentWebViewPackageInfo()
                                .then(packageInfo => {
                                    if (parseInt(packageInfo.versionName.split('.')[0]) < GOOGLE_CHROME_MIN_VER) {
                                        handleWebViewError('Google Chrome', packageInfo.packageName);
                                    } else {
                                        app.init();
                                        window.isAppInitialized = true;
                                    }
                                })
                                .catch(() => handleWebViewError('Google Chrome'));
                        }
                    })
                    .catch(() => handleWebViewError('Android WebView'));
            });
        } else {
            app.init();
            window.isAppInitialized = true;
        }
    }
});
