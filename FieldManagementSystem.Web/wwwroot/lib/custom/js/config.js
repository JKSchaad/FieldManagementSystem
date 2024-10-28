'use strict';

window.config = {};

/*
|------------------------------------------------------------------------------
| App
|------------------------------------------------------------------------------
*/

window.config.app = {
    id: 'website.nectar.classic',
    version: '3.0.5',
    title: 'Nectar',
    tagline: 'Mobile Web App Kit',
    description: 'Build Beautiful & Performant Progressive Web Apps, Hybrid Apps & Desktop Apps.',
    logos: {
        logomarkLight: 'lib/img/logo.ClancyCore.trans.png',
        logomarkDark: 'lib/img/logo.ClancyCore.trans.png',
        logotypeLight: 'lib/img/logo.ClancyCore.trans.png',
        logotypeDark: 'lib/img/logo.ClancyCore.trans.png',
        logomarkSquareLight: 'lib/img/logo.ClancyCore.trans.png',
        logomarkSquareDark: 'lib/img/logo.ClancyCore.trans.png'
    },
    themeforestUrl: 'https://themeforest.net/item/nectar-mobile-web-app-kit/20466093?ref=pmsgz',
    gitbookUrl: 'https://pmsgz.gitbook.io/nectar'
}

/*
|------------------------------------------------------------------------------
| Add to Home Screen
|------------------------------------------------------------------------------
*/

window.config.a2hs = {
    enabled: true,
    autoPrompt: true,
    autoPromptDelay: 60000
}

/*
|------------------------------------------------------------------------------
| CoinCap API
|------------------------------------------------------------------------------
*/

window.config.coincap = {
    rootEndpoint: 'https://api.coincap.io/v2'
}

/*
|------------------------------------------------------------------------------
| CORS Proxy
|------------------------------------------------------------------------------
*/

window.config.cors = {
    proxy: Framework7.device.cordova ? 'https://nectar.website/demo/lib/custom/php/cors-proxy.php' : 'lib/custom/php/cors-proxy.php'
}

/*
|------------------------------------------------------------------------------
| Facebook
|------------------------------------------------------------------------------
*/

window.config.facebook = {
    appId: '2282002328754626'
}

/*
|------------------------------------------------------------------------------
| Google AdMob
|------------------------------------------------------------------------------
*/

window.config.admob = {
    enabled: true,
    ads: {
        banner: {
            ad: {
                android: {
                    id: 'ca-app-pub-3940256099942544/6300978111'
                },
                ios: {
                    id: 'ca-app-pub-3940256099942544/2934735716'
                }
            }
        },
        interstitial: {
            ad: {
                android: {
                    id: 'ca-app-pub-3940256099942544/1033173712'
                },
                ios: {
                    id: 'ca-app-pub-3940256099942544/4411468910'
                }
            }
        },
        interstitialVideo: {
            ad: {
                android: {
                    id: 'ca-app-pub-3940256099942544/8691691433'
                },
                ios: {
                    id: 'ca-app-pub-3940256099942544/5135589807'
                }
            }
        },
        rewarded: {
            ad: {
                android: {
                    id: 'ca-app-pub-3940256099942544/5224354917'
                },
                ios: {
                    id: 'ca-app-pub-3940256099942544/1712485313'
                }
            }
        },
        rewardedInterstitial: {
            ad: {
                android: {
                    id: 'ca-app-pub-3940256099942544/5354046379'
                },
                ios: {
                    id: 'ca-app-pub-3940256099942544/6978759866'
                }
            }
        }
    }
}

/*
|------------------------------------------------------------------------------
| Google Maps
|------------------------------------------------------------------------------
*/

window.config.googleMaps = {
    apiKey: 'AIzaSyCtiPGi_U05PWnEaFdu6SY62pxz57kBNvw'
}

/*
|------------------------------------------------------------------------------
| i18n
|------------------------------------------------------------------------------
*/

window.config.i18n = {
    enabled: true,
    languages: {
        en: {
            name: 'English',
            slug: 'english',
            code: 'en',
            locale: 'en-UK',
            dir: 'ltr',
            flag: 'https://flagcdn.com/gb.svg'
        },
        hi: {
            name: 'Hindi',
            slug: 'hindi',
            code: 'hi',
            locale: 'hi-IN',
            dir: 'ltr',
            flag: 'https://flagcdn.com/in.svg'
        },
        ar: {
            name: 'Arabic',
            slug: 'arabic',
            code: 'ar',
            locale: 'ar-AE',
            dir: 'rtl',
            flag: 'https://flagcdn.com/ae.svg'
        }
    },
    defaultLanguage: 'en',
    fallbackLanguage: 'en',
    namespaces: ['common']
}

/*
|------------------------------------------------------------------------------
| Layout
|------------------------------------------------------------------------------
*/

window.config.layout = {
    singleView: {
        sidebar: {
            enabled: true
        },
        tabbar: {
            enabled: true
        }
    },
    tabView: {
        sidebar: {
            enabled: true
        }
    },
    default: Framework7.device.cordova ? 'tabView' : 'singleView'
}

/*
|------------------------------------------------------------------------------
| Lottie
|------------------------------------------------------------------------------
*/

window.config.lottie = {
    assetUrl: Framework7.device.cordova ? 'lib/custom/lottie/' : `${location.origin + document.querySelector('base').getAttribute('href') + 'lib/custom/lottie/'}`
}

/*
|------------------------------------------------------------------------------
| Mailchimp
|------------------------------------------------------------------------------
*/

window.config.mailchimp = {
    subscribeUrl: 'https://gmail.us20.list-manage.com/subscribe/post-json',
    userId: '61e096fdff69bc5a03377380c',
    audienceId: 'edf9a19615'
}

/*
|------------------------------------------------------------------------------
| Navigation
|------------------------------------------------------------------------------
*/

window.config.navigation = {
    splash: {
        enabled: !Framework7.device.standalone && !Framework7.device.cordova
    },
    walkthrough: {
        enabled: false,
        showFirstTimeOnly: true
    },
    authentication: {
        required: false,
        guestAccess: false,
        ignoreRoutes: [
            //'/',
            //'/404/',
            //'/about/',
            //'/careers/', '/coming-soon/', '/contact/', '/cookie-policy/',
            //'/faq/', '/feedback/', '/forgot-password/',
            //'/home/',
            //'/login/',
            //'/pricing/', '/privacy-policy/',
            //'/select-language/', '/select-appearance/', '/sidebar/', '/signup/', '/splash/',
            //'/team/', '/terms/', '/testimonials/',
            //'/under-maintenance/',
            //'/verify-email/', '/verify-otp/',
            //'/walkthrough/'
        ]
    },
    home: {
        url: ''
    }
}

/*
|------------------------------------------------------------------------------
| REST Countries API
|------------------------------------------------------------------------------
*/

window.config.restCountries = {
    rootEndpoint: 'https://restcountries.com/v3.1'
}

/*
|------------------------------------------------------------------------------
| Telegram Comments
|------------------------------------------------------------------------------
*/

window.config.telegram = {
    siteId: '9exyE2HK'
}

/*
|------------------------------------------------------------------------------
| Theming
|------------------------------------------------------------------------------
*/

window.config.theming = {
    enabled: true,
    theme: 'auto',
    color: '#1877F2',
    mode: 'system'
}

/*
|------------------------------------------------------------------------------
| WordPress
|------------------------------------------------------------------------------
*/

window.config.wordpress = {
    url: 'https://techcrunch.com',
    type: 'org'
}

/*
|------------------------------------------------------------------------------
| Zooming
|------------------------------------------------------------------------------
*/

window.config.zooming = {
    enabled: true,
    levels: {
        small: {
            name: 'Small',
            slug: 'small',
            value: '90%'
        },
        normal: {
            name: 'Normal',
            slug: 'normal',
            value: '100%'
        },
        large: {
            name: 'Large',
            slug: 'large',
            value: '110%'
        }
    },
    defaultLevel: 'normal'
}