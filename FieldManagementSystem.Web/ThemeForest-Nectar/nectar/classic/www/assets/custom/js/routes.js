'use strict';

window.routes = [];

/*
|------------------------------------------------------------------------------
| Home Route (/)
|------------------------------------------------------------------------------
*/

window.routes.push({
    path: '/',
    async: function({to, from, resolve, reject}) {
        if (window.config.navigation.splash.enabled) {
            resolve({
                componentUrl: './partials/screens/splash.html'
            });
        }
        else if (window.config.navigation.walkthrough.enabled && (!window.config.navigation.walkthrough.showFirstTimeOnly || (window.config.navigation.walkthrough.showFirstTimeOnly && localStorage.getItem('Nectar_Walkthrough_Shown') == null))) {
            resolve({
                componentUrl: './partials/screens/walkthrough.html'
            });
        }
        else if (window.config.navigation.authentication.required && !window.config.navigation.authentication.guestAccess) {
            resolve({
                componentUrl: './partials/screens/login.html'
            });
        }
        else {
            if (window.config.layout.default == 'singleView' && window.config.layout.singleView.tabbar.enabled) {
                resolve({
                    componentUrl: './partials/tabbar.html'
                });
            }
            else {
                resolve({
                    componentUrl: window.config.navigation.home.url
                });
            }
        }
    }
});

/*
|------------------------------------------------------------------------------
| Sidebar Route (For Both The Single View Layout & Tab View Layout)
|------------------------------------------------------------------------------
*/

if (window.config.layout[window.config.layout.default].sidebar.enabled) {
    window.routes.push({
        path: '/sidebar',
        componentUrl: './partials/sidebar.html'
    });
}

/*
|------------------------------------------------------------------------------
| Tabbar Routes (For Single View Layout)
|------------------------------------------------------------------------------
*/

if (window.config.layout.default == 'singleView' && window.config.layout.singleView.tabbar.enabled) {
    window.routes.push({
        path: '/',
        alias: ['/home'],
        componentUrl: './partials/tabbar.html',
        tabs: [
            {
                id: 'tab-main',
                path: '/',
                componentUrl: window.config.navigation.home.url,
            },
            {
                id: 'tab-components',
                path: '/components',
                componentUrl: './partials/components.html'
            },
            {
                id: 'tab-screens',
                path: '/screens',
                componentUrl: './partials/screens.html'
            },
            {
                id: 'tab-integrations',
                path: '/integrations',
                componentUrl: './partials/integrations.html'
            },
            {
                id: 'tab-more',
                path: '/more',
                componentUrl: './partials/screens/settings.html'
            }
        ]
    });
}

/*
|------------------------------------------------------------------------------
| Appearance & Language Settings Routes
|------------------------------------------------------------------------------
*/

window.routes.push(
    {
        path: '/select-appearance',
        componentUrl: './partials/select-appearance.html'
    },
    {
        path: '/select-language',
        componentUrl: './partials/select-language.html'
    }
);

/*
|------------------------------------------------------------------------------
| Screens Routes
|------------------------------------------------------------------------------
*/

window.routes.push({
    path: '/screens',
    componentUrl: './partials/screens.html'
});

window.routes.push(
    {
        path: '/404',
        alias: ['/screens/404'],
        componentUrl: './partials/screens/404.html'
    },
    {
        path: '/about',
        alias: ['/screens/about'],
        componentUrl: './partials/screens/about.html'
    },
    {
        path: '/activity-feed',
        alias: ['/screens/activity-feed'],
        componentUrl: './partials/screens/activity-feed.html',
        beforeEnter: function({to, from, resolve, reject}) {
            app.preloader.show();
            if ('ShowMore' in window) {
                app.preloader.hide();
                resolve();
            }
            else {
                LazyLoad.js(['assets/vendor/show-more/showMore.min.js'], function() {
                    app.preloader.hide();
                    resolve();
                });
            }
        }
    },
    {
        path: '/articles-list',
        alias: ['/screens/articles-list'],
        componentUrl: './partials/screens/articles-list.html'
    },
    {
        path: '/articles-single',
        alias: ['/screens/articles-single'],
        componentUrl: './partials/screens/articles-single.html'
    },
    {
        path: '/businesses-list',
        alias: ['/screens/businesses-list'],
        componentUrl: './partials/screens/businesses-list.html'
    },
    {
        path: '/businesses-single',
        alias: ['/screens/businesses-single'],
        componentUrl: './partials/screens/businesses-single.html'
    },
    {
        path: '/careers',
        alias: ['/screens/careers'],
        componentUrl: './partials/screens/careers.html'
    },
    {
        path: '/cart',
        alias: ['/screens/cart'],
        componentUrl: './partials/screens/cart.html'
    },
    {
        path: '/chat',
        alias: ['/screens/chat'],
        componentUrl: './partials/screens/chat.html'
    },
    {
        path: '/checkout',
        alias: ['/screens/checkout'],
        componentUrl: './partials/screens/checkout.html'
    },
    {
        path: '/coming-soon',
        alias: ['/screens/coming-soon'],
        componentUrl: './partials/screens/coming-soon.html'
    },
    {
        path: '/contact',
        alias: ['/screens/contact'],
        componentUrl: './partials/screens/contact.html'
    },
    {
        path: '/cookie-policy',
        alias: ['/screens/cookie-policy'],
        componentUrl: './partials/screens/cookie-policy.html'
    },
    {
        path: '/dashboard',
        alias: ['/screens/dashboard'],
        componentUrl: './partials/screens/dashboard.html'
    },
    {
        path: '/events-calendar',
        alias: ['/screens/events-calendar'],
        componentUrl: './partials/screens/events-calendar.html'
    },
    {
        path: '/events-list',
        alias: ['/screens/events-list'],
        componentUrl: './partials/screens/events-list.html'
    },
    {
        path: '/events-single',
        alias: ['/screens/events-single'],
        componentUrl: './partials/screens/events-single.html'
    },
    {
        path: '/faq',
        alias: ['/screens/faq'],
        componentUrl: './partials/screens/faq.html'
    },
    {
        path: '/feedback',
        alias: ['/screens/feedback'],
        componentUrl: './partials/screens/feedback.html'
    },
    {
        path: '/forgot-password',
        alias: ['/screens/forgot-password'],
        componentUrl: './partials/screens/forgot-password.html',
        beforeEnter: function ({to, from, resolve, reject}) {
            if (!app.store.state.isUserLoggedIn) {
                resolve();
            }
            else {
                reject();
            }
        }
    },
    {
        path: '/home',
        alias: ['/screens/home'],
        componentUrl: './partials/screens/home.html'
    },
    {
        path: '/invite-earn',
        alias: ['/screens/invite-earn'],
        componentUrl: './partials/screens/invite-earn.html'
    },
    {
        path: '/jobs-list',
        alias: ['/screens/jobs-list'],
        componentUrl: './partials/screens/jobs-list.html'
    },
    {
        path: '/jobs-single',
        alias: ['/screens/jobs-single'],
        componentUrl: './partials/screens/jobs-single.html'
    },
    {
        path: '/leaderboard',
        alias: ['/screens/leaderboard'],
        componentUrl: './partials/screens/leaderboard.html'
    },
    {
        path: '/login',
        alias: ['/screens/login'],
        componentUrl: './partials/screens/login.html',
        beforeEnter: function ({to, from, resolve, reject}) {
            if (!app.store.state.isUserLoggedIn) {
                resolve();
            }
            else {
                reject();
            }
        }
    },
    {
        path: '/notifications',
        alias: ['/screens/notifications'],
        componentUrl: './partials/screens/notifications.html'
    },
    {
        path: '/poll',
        alias: ['/screens/poll'],
        componentUrl: './partials/screens/poll.html'
    },
    {
        path: '/pricing',
        alias: ['/screens/pricing'],
        componentUrl: './partials/screens/pricing.html'
    },
    {
        path: '/privacy-policy',
        alias: ['/screens/privacy-policy'],
        componentUrl: './partials/screens/privacy-policy.html'
    },
    {
        path: '/products-list',
        alias: ['/screens/products-list'],
        componentUrl: './partials/screens/products-list.html'
    },
    {
        path: '/products-single',
        alias: ['/screens/products-single'],
        componentUrl: './partials/screens/products-single.html'
    },
    {
        path: '/profile-setup',
        alias: ['/screens/profile-setup'],
        componentUrl: './partials/screens/profile-setup.html'
    },
    {
        path: '/recipes-list',
        alias: ['/screens/recipes-list'],
        componentUrl: './partials/screens/recipes-list.html'
    },
    {
        path: '/recipes-single',
        alias: ['/screens/recipes-single'],
        componentUrl: './partials/screens/recipes-single.html'
    },
    {
        path: '/settings',
        alias: ['/screens/settings'],
        componentUrl: './partials/screens/settings.html'
    },
    {
        path: '/signup',
        alias: ['/screens/signup'],
        componentUrl: './partials/screens/signup.html',
        beforeEnter: function ({to, from, resolve, reject}) {
            if (!app.store.state.isUserLoggedIn) {
                resolve();
            }
            else {
                reject();
            }
        }
    },
    {
        path: '/splash',
        alias: ['/screens/splash'],
        componentUrl: './partials/screens/splash.html'
    },
    {
        path: '/team',
        alias: ['/screens/team'],
        componentUrl: './partials/screens/team.html'
    },
    {
        path: '/terms',
        alias: ['/screens/terms'],
        componentUrl: './partials/screens/terms.html'
    },
    {
        path: '/testimonials',
        alias: ['/screens/testimonials'],
        componentUrl: './partials/screens/testimonials.html'
    },
    {
        path: '/under-maintenance',
        alias: ['/screens/under-maintenance'],
        componentUrl: './partials/screens/under-maintenance.html'
    },
    {
        path: '/users-list',
        alias: ['/screens/users-list'],
        componentUrl: './partials/screens/users-list.html'
    },
    {
        path: '/users-single',
        alias: ['/screens/users-single'],
        componentUrl: './partials/screens/users-single.html'
    },
    {
        path: '/verify-email',
        alias: ['/screens/verify-email'],
        componentUrl: './partials/screens/verify-email.html'
    },
    {
        path: '/verify-otp',
        alias: ['/screens/verify-otp'],
        componentUrl: './partials/screens/verify-otp.html'
    },
    {
        path: '/walkthrough',
        alias: ['/screens/walkthrough'],
        componentUrl: './partials/screens/walkthrough.html'
    },
    {
        path: '/wallet',
        alias: ['/screens/wallet'],
        componentUrl: './partials/screens/wallet.html'
    }
);

/*
|------------------------------------------------------------------------------
| Components
|------------------------------------------------------------------------------
*/

window.routes.push({
    path: '/components',
    componentUrl: './partials/components.html',
    routes: [
        {
            path: '/accordion',
            componentUrl: './partials/components/accordion.html'
        },
        {
            path: '/action-sheet',
            componentUrl: './partials/components/action-sheet.html'
        },
        {
            path: '/audio',
            componentUrl: './partials/components/audio.html'
        },
        {
            path: '/autocomplete',
            componentUrl: './partials/components/autocomplete.html'
        },
        {
            path: '/badge',
            componentUrl: './partials/components/badge.html'
        },
        {
            path: '/breadcrumb',
            componentUrl: './partials/components/breadcrumb.html'
        },
        {
            path: '/button',
            componentUrl: './partials/components/button.html'
        },
        {
            path: '/card',
            componentUrl: './partials/components/card.html'
        },
        {
            path: '/chart',
            componentUrl: './partials/components/chart.html'
        },
        {
            path: '/checkbox',
            componentUrl: './partials/components/checkbox.html'
        },
        {
            path: '/chip',
            componentUrl: './partials/components/chip.html'
        },
        {
            path: '/color-picker',
            componentUrl: './partials/components/color-picker.html'
        },
        {
            path: '/content-block',
            componentUrl: './partials/components/content-block.html'
        },
        {
            path: '/data-table',
            componentUrl: './partials/components/data-table.html'
        },
        {
            path: '/date-time-picker',
            componentUrl: './partials/components/date-time-picker.html'
        },
        {
            path: '/dialog',
            componentUrl: './partials/components/dialog.html'
        },
        {
            path: '/dropcap',
            componentUrl: './partials/components/dropcap.html'
        },
        {
            path: '/elevation',
            componentUrl: './partials/components/elevation.html'
        },
        {
            path: '/embed',
            componentUrl: './partials/components/embed.html'
        },
        {
            path: '/empty-state',
            componentUrl: './partials/components/empty-state.html'
        },
        {
            path: '/expandable-card',
            componentUrl: './partials/components/expandable-card.html'
        },
        {
            path: '/flip-card',
            componentUrl: './partials/components/flip-card.html'
        },
        {
            path: '/floating-action-button',
            componentUrl: './partials/components/floating-action-button.html',
            routes: [
                {
                    path: '/default',
                    componentUrl: './partials/components/fab-default.html'
                },
                {
                    path: '/extended',
                    componentUrl: './partials/components/fab-extended.html'
                },
                {
                    path: '/speed-dial',
                    componentUrl: './partials/components/fab-speed-dial.html'
                },
                {
                    path: '/morph',
                    componentUrl: './partials/components/fab-morph.html'
                }
            ]
        },
        {
            path: '/form-input',
            componentUrl: './partials/components/form-input.html'
        },
        {
            path: '/form-validator',
            componentUrl: './partials/components/form-validator.html'
        },
        {
            path: '/gauge',
            componentUrl: './partials/components/gauge.html'
        },
        {
            path: '/grid',
            componentUrl: './partials/components/grid.html'
        },
        {
            path: '/icon',
            componentUrl: './partials/components/icon.html'
        },
        {
            path: '/image',
            componentUrl: './partials/components/image.html'
        },
        {
            path: '/image-compare',
            componentUrl: './partials/components/image-compare.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('juxtapose' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/juxtapose/juxtapose.min.js'], function() {
                        LazyLoad.css(['assets/vendor/juxtapose/juxtapose.min.css'], function() {
                            app.preloader.hide();
                            resolve();
                        });
                    });
                }
            }
        },
        {
            path: '/image-hotspot',
            componentUrl: './partials/components/image-hotspot.html'
        },
        {
            path: '/infinite-scroll',
            componentUrl: './partials/components/infinite-scroll.html'
        },
        {
            path: '/keypad',
            componentUrl: './partials/components/keypad.html'
        },
        {
            path: '/line-divider',
            componentUrl: './partials/components/line-divider.html'
        },
        {
            path: '/list-index',
            componentUrl: './partials/components/list-index.html'
        },
        {
            path: '/list-view',
            componentUrl: './partials/components/list-view.html'
        },
        {
            path: '/marquee',
            componentUrl: './partials/components/marquee.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('jQuery' in window && jQuery.isFunction(jQuery.fn.marquee)) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/jquery-marquee/jquery.marquee.min.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/menu',
            componentUrl: './partials/components/menu.html'
        },
        {
            path: '/menu-list',
            componentUrl: './partials/components/menu-list.html'
        },
        {
            path: '/navbar',
            componentUrl: './partials/components/navbar.html',
            routes: [
                {
                    path: '/static',
                    componentUrl: './partials/components/navbar-static.html'
                },
                {
                    path: '/fixed',
                    componentUrl: './partials/components/navbar-fixed.html'
                },
                {
                    path: '/hide-on-scroll',
                    componentUrl: './partials/components/navbar-hide-on-scroll.html'
                },
                {
                    path: '/transparent',
                    componentUrl: './partials/components/navbar-transparent.html'
                },
                {
                    path: '/large-title',
                    componentUrl: './partials/components/navbar-large-title.html'
                },
                {
                    path: '/transparent-large-title',
                    componentUrl: './partials/components/navbar-transparent-large-title.html'
                },
                {
                    path: '/subtitle',
                    componentUrl: './partials/components/navbar-subtitle.html'
                },
            ]
        },
        {
            path: '/note',
            componentUrl: './partials/components/note.html'
        },
        {
            path: '/notification',
            componentUrl: './partials/components/notification.html'
        },
        {
            path: '/pagination',
            componentUrl: './partials/components/pagination.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('purePajinate' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/pure-pajinate/purePajinate.min.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/photo-browser',
            componentUrl: './partials/components/photo-browser.html'
        },
        {
            path: '/picker',
            componentUrl: './partials/components/picker.html'
        },
        {
            path: '/popover',
            componentUrl: './partials/components/popover.html'
        },
        {
            path: '/popup',
            componentUrl: './partials/components/popup.html'
        },
        {
            path: '/preloader',
            componentUrl: './partials/components/preloader.html'
        },
        {
            path: '/progress-bar',
            componentUrl: './partials/components/progress-bar.html'
        },
        {
            path: '/pull-to-refresh',
            componentUrl: './partials/components/pull-to-refresh.html'
        },
        {
            path: '/quote',
            componentUrl: './partials/components/quote.html'
        },
        {
            path: '/radio',
            componentUrl: './partials/components/radio.html'
        },
        {
            path: '/range-slider',
            componentUrl: './partials/components/range-slider.html'
        },
        {
            path: '/rating',
            componentUrl: './partials/components/rating.html'
        },
        {
            path: '/ribbon',
            componentUrl: './partials/components/ribbon.html'
        },
        {
            path: '/searchbar',
            componentUrl: './partials/components/searchbar.html',
            routes: [
                {
                    path: '/static',
                    componentUrl: './partials/components/searchbar-static.html'
                },
                {
                    path: '/fixed',
                    componentUrl: './partials/components/searchbar-fixed.html'
                },
                {
                    path: '/expandable',
                    componentUrl: './partials/components/searchbar-expandable.html'
                }
            ]
        },
        {
            path: '/sheet-modal',
            componentUrl: './partials/components/sheet-modal.html'
        },
        {
            path: '/show-more-less',
            componentUrl: './partials/components/show-more-less.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('ShowMore' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/show-more/showMore.min.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/side-panel',
            componentUrl: './partials/components/side-panel.html'
        },
        {
            path: '/signature-pad',
            componentUrl: './partials/components/signature-pad.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('SignaturePad' in window && 'saveAs' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/signature-pad/signature_pad.umd.min.js', 'assets/vendor/file-saver/FileSaver.min.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/skeleton',
            componentUrl: './partials/components/skeleton.html'
        },
        {
            path: '/smart-select',
            componentUrl: './partials/components/smart-select.html'
        },
        {
            path: '/sortable-list',
            componentUrl: './partials/components/sortable-list.html'
        },
        {
            path: '/stepper',
            componentUrl: './partials/components/stepper.html'
        },
        {
            path: '/subnavbar',
            componentUrl: './partials/components/subnavbar.html',
            routes: [
                {
                    path: '/static',
                    componentUrl: './partials/components/subnavbar-static.html'
                },
                {
                    path: '/fixed',
                    componentUrl: './partials/components/subnavbar-fixed.html'
                },
                {
                    path: '/large-title',
                    componentUrl: './partials/components/subnavbar-large-title.html'
                }
            ]
        },
        {
            path: '/swipeout',
            componentUrl: './partials/components/swipeout.html'
        },
        {
            path: '/swiper-slider',
            componentUrl: './partials/components/swiper-slider.html'
        },
        {
            path: '/syntax-highlighter',
            componentUrl: './partials/components/syntax-highlighter.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('hljs' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/highlight/highlight.min.js'], function() {
                        LazyLoad.css(['assets/vendor/highlight/default.min.css'], function() {
                            app.preloader.hide();
                            resolve();
                        });
                    });
                }
            }
        },
        {
            path: '/tab',
            componentUrl: './partials/components/tab.html',
            routes: [
                {
                    path: '/static',
                    componentUrl: './partials/components/tabs-static.html'
                },
                {
                    path: '/animated',
                    componentUrl: './partials/components/tabs-animated.html'
                },
                {
                    path: '/swipeable',
                    componentUrl: './partials/components/tabs-swipeable.html'
                },
                {
                    path: '/scrollable',
                    componentUrl: './partials/components/tabs-scrollable.html'
                },
                {
                    path: '/routable',
                    componentUrl: './partials/components/tabs-routable.html',
                    tabs: [
                        {
                            id: 'tab-home',
                            path: '/',
                            componentUrl: './partials/components/tabs-routable-home.html'
                        },
                        {
                            id: 'tab-apps',
                            path: '/apps',
                            componentUrl: './partials/components/tabs-routable-apps.html'
                        },
                        {
                            id: 'tab-games',
                            path: '/games',
                            componentUrl: './partials/components/tabs-routable-games.html'
                        },
                        {
                            id: 'tab-movies',
                            path: '/movies',
                            componentUrl: './partials/components/tabs-routable-movies.html'
                        }
                    ]
                }
            ]
        },
        {
            path: '/text-editor',
            componentUrl: './partials/components/text-editor.html'
        },
        {
            path: '/timeline',
            componentUrl: './partials/components/timeline.html',
            routes: [
                {
                    path: '/vertical',
                    componentUrl: './partials/components/timeline-vertical.html'
                },
                {
                    path: '/horizontal',
                    componentUrl: './partials/components/timeline-horizontal.html'
                },
                {
                    path: '/calendar',
                    componentUrl: './partials/components/timeline-calendar.html'
                }
            ]
        },
        {
            path: '/timer',
            componentUrl: './partials/components/timer.html'
        },
        {
            path: '/toast',
            componentUrl: './partials/components/toast.html'
        },
        {
            path: '/toggle',
            componentUrl: './partials/components/toggle.html'
        },
        {
            path: '/toolbar',
            componentUrl: './partials/components/toolbar.html',
            routes: [
                {
                    path: '/static',
                    componentUrl: './partials/components/toolbar-static.html'
                },
                {
                    path: '/fixed',
                    componentUrl: './partials/components/toolbar-fixed.html'
                },
                {
                    path: '/hide-on-scroll',
                    componentUrl: './partials/components/toolbar-hide-on-scroll.html'
                },
                {
                    path: '/multiple',
                    componentUrl: './partials/components/toolbar-multiple.html'
                }
            ]
        },
        {
            path: '/tooltip',
            componentUrl: './partials/components/tooltip.html'
        },
        {
            path: 'tour-guide',
            componentUrl: './partials/components/tour-guide.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('Shepherd' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/shepherd/shepherd.min.js'], function() {
                        LazyLoad.css(['assets/vendor/shepherd/shepherd.min.css'], function() {
                            app.preloader.hide();
                            resolve();
                        });
                    });
                }
            }
        },
        {
            path: '/tree-view',
            componentUrl: './partials/components/tree-view.html'
        },
        {
            path: '/video',
            componentUrl: './partials/components/video.html'
        },
        {
            path: '/virtual-list',
            componentUrl: './partials/components/virtual-list.html'
        }
    ]
});

/*
|------------------------------------------------------------------------------
| Web APIs
|------------------------------------------------------------------------------
*/

window.routes.push({
    path: '/web-apis',
    componentUrl: './partials/web-apis.html',
    routes: [
        {
            path: '/app-badging',
            componentUrl: './partials/web-apis/app-badging.html'
        },
        {
            path: '/app-shortcuts',
            componentUrl: './partials/web-apis/app-shortcuts.html'
        },
        {
            path: '/battery-status',
            componentUrl: './partials/web-apis/battery-status.html'
        },
        {
            path: '/clipboard',
            componentUrl: './partials/web-apis/clipboard.html'
        },
        {
            path: '/contact-picker',
            componentUrl: './partials/web-apis/contact-picker.html'
        },
        {
            path: '/device-memory',
            componentUrl: './partials/web-apis/device-memory.html'
        },
        {
            path: '/device-orientation',
            componentUrl: './partials/web-apis/device-orientation.html'
        },
        {
            path: '/file',
            componentUrl: './partials/web-apis/file.html'
        },
        {
            path: '/fullscreen',
            componentUrl: './partials/web-apis/fullscreen.html'
        },
        {
            path: '/geolocation',
            componentUrl: './partials/web-apis/geolocation.html'
        },
        {
            path: '/get-installed-related-apps',
            componentUrl: './partials/web-apis/get-installed-related-apps.html'
        },
        {
            path: '/html-media-capture',
            componentUrl: './partials/web-apis/html-media-capture.html'
        },
        {
            path: '/local-storage',
            componentUrl: './partials/web-apis/local-storage.html'
        },
        {
            path: '/network-information',
            componentUrl: './partials/web-apis/network-information.html'
        },
        {
            path: '/notifications',
            componentUrl: './partials/web-apis/notifications.html'
        },
        {
            path: '/online-offline-status',
            componentUrl: './partials/web-apis/online-offline-status.html'
        },
        {
            path: '/page-visibility',
            componentUrl: './partials/web-apis/page-visibility.html'
        },
        {
            path: '/permissions',
            componentUrl: './partials/web-apis/permissions.html'
        },
        {
            path: '/picture-in-picture',
            componentUrl: './partials/web-apis/picture-in-picture.html'
        },
        {
            path: '/quota-estimation',
            componentUrl: './partials/web-apis/quota-estimation.html'
        },
        {
            path: '/screen-orientation',
            componentUrl: './partials/web-apis/screen-orientation.html'
        },
        {
            path: '/screen-wake-lock',
            componentUrl: './partials/web-apis/screen-wake-lock.html'
        },
        {
            path: '/server-sent-events',
            componentUrl: './partials/web-apis/server-sent-events.html'
        },
        {
            path: '/session-storage',
            componentUrl: './partials/web-apis/session-storage.html'
        },
        {
            path: '/vibration',
            componentUrl: './partials/web-apis/vibration.html'
        },
        {
            path: '/web-share',
            componentUrl: './partials/web-apis/web-share.html'
        }
    ]
});

/*
|------------------------------------------------------------------------------
| Cordova Plugins
|------------------------------------------------------------------------------
*/

window.routes.push({
    path: '/cordova-plugins',
    componentUrl: './partials/cordova-plugins.html',
    routes: [
        {
            path: '/battery-status',
            componentUrl: './partials/cordova-plugins/battery-status.html'
        },
        {
            path: '/build-info',
            componentUrl: './partials/cordova-plugins/build-info.html'
        },
        {
            path: '/camera',
            componentUrl: './partials/cordova-plugins/camera.html'
        },
        {
            path: '/contacts-info',
            componentUrl: './partials/cordova-plugins/contacts-info.html'
        },
        {
            path: '/device',
            componentUrl: './partials/cordova-plugins/device.html'
        },
        {
            path: '/dialogs',
            componentUrl: './partials/cordova-plugins/dialogs.html'
        },
        {
            path: '/fingerprint-authentication',
            componentUrl: './partials/cordova-plugins/fingerprint-authentication.html'
        },
        {
            path: '/geolocation',
            componentUrl: './partials/cordova-plugins/geolocation.html'
        },
        {
            path: '/in-app-browser',
            componentUrl: './partials/cordova-plugins/in-app-browser.html'
        },
        {
            path: '/media-capture',
            componentUrl: './partials/cordova-plugins/media-capture.html'
        },
        {
            path: '/network-information',
            componentUrl: './partials/cordova-plugins/network-information.html'
        },
        {
            path: '/social-sharing',
            componentUrl: './partials/cordova-plugins/social-sharing.html'
        },
        {
            path: '/splash-screen',
            componentUrl: './partials/cordova-plugins/splash-screen.html'
        },
        {
            path: '/status-bar',
            componentUrl: './partials/cordova-plugins/status-bar.html'
        },
        {
            path: '/sqlite',
            componentUrl: './partials/cordova-plugins/sqlite.html'
        },
        {
            path: '/vibration',
            componentUrl: './partials/cordova-plugins/vibration.html'
        }
    ]
});

/*
|------------------------------------------------------------------------------
| Integrations
|------------------------------------------------------------------------------
*/

window.routes.push({
    path: '/integrations',
    componentUrl: './partials/integrations.html',
    routes: [
        {
            path: '/alasql',
            componentUrl: './partials/integrations/alasql.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('alasql' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/alasql/alasql.min.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/disqus',
            componentUrl: './partials/integrations/disqus.html'
        },
        {
            path: '/embedly',
            componentUrl: './partials/integrations/embedly.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('embedly' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['https://cdn.embedly.com/widgets/platform.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/facebook-comments',
            componentUrl: './partials/integrations/facebook-comments.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                LazyLoad.js([`https://connect.facebook.net/${(app.i18n.currentLanguage().locale).replace(/-/g, '_')}/sdk.js`], function() {
                    app.preloader.hide();
                    resolve();
                });
            }
        },
        {
            path: '/google-admob',
            componentUrl: './partials/integrations/google-admob.html'
        },
        {
            path: '/google-maps',
            componentUrl: './partials/integrations/google-maps.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('google' in window && 'maps' in window.google) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['https://maps.googleapis.com/maps/api/js?key=' + app.config.googleMaps.apiKey + '&language=' + app.i18n.currentLanguage().code + '&libraries=places'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/google-sheets',
            componentUrl: './partials/integrations/google-sheets.html'
        },
        {
            path: '/gravatar',
            componentUrl: './partials/integrations/gravatar.html'
        },
        {
            path: '/lottie',
            componentUrl: './partials/integrations/lottie.html'
        },
        {
            path: '/mailchimp',
            componentUrl: './partials/integrations/mailchimp.html'
        },
        {
            path: '/qr-code',
            componentUrl: './partials/integrations/qr-code.html',
            routes: [
                {
                    path: '/create',
                    componentUrl: './partials/integrations/qr-code/create.html',
                    beforeEnter: function({to, from, resolve, reject}) {
                        app.preloader.show();
                        if ('QRCode' in window) {
                            app.preloader.hide();
                            resolve();
                        }
                        else {
                            LazyLoad.js(['assets/vendor/easy-qrcode/easy.qrcode.min.js'], function() {
                                app.preloader.hide();
                                resolve();
                            });
                        }
                    }
                },
                {
                    path: '/read',
                    componentUrl: './partials/integrations/qr-code/read.html',
                    beforeEnter: function({to, from, resolve, reject}) {
                        app.preloader.show();
                        if ('QrScanner' in window) {
                            app.preloader.hide();
                            resolve();
                        }
                        else {
                            LazyLoad.js(['assets/vendor/qr-scanner/qr-scanner.umd.min.js'], function() {
                                app.preloader.hide();
                                resolve();
                            });
                        }
                    }
                }
            ]
        },
        {
            path: '/rss',
            componentUrl: './partials/integrations/rss.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('RSSParser' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['assets/vendor/rss-parser/rss-parser.min.js'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/telegram-comments',
            componentUrl: './partials/integrations/telegram-comments.html'
        },
        {
            path: '/youtube',
            componentUrl: './partials/integrations/youtube.html',
            beforeEnter: function({to, from, resolve, reject}) {
                app.preloader.show();
                if ('YT' in window) {
                    app.preloader.hide();
                    resolve();
                }
                else {
                    LazyLoad.js(['https://www.youtube.com/iframe_api'], function() {
                        app.preloader.hide();
                        resolve();
                    });
                }
            }
        },
        {
            path: '/wordpress',
            componentUrl: './partials/integrations/wordpress.html',
            routes: [
                {
                    path: '/home',
                    componentUrl: './partials/integrations/wordpress/home.html'
                },
                {
                    path: '/categories',
                    componentUrl: './partials/integrations/wordpress/categories.html',
                    routes: [
                        {
                            path: '/:category_slug/:category_id',
                            componentUrl: './partials/integrations/wordpress/posts.html'
                        }
                    ]
                },
                {
                    path: '/tags',
                    componentUrl: './partials/integrations/wordpress/tags.html',
                    routes: [
                        {
                            path: '/:tag_slug/:tag_id',
                            componentUrl: './partials/integrations/wordpress/posts.html'
                        }
                    ]
                },
                {
                    path: '/posts',
                    componentUrl: './partials/integrations/wordpress/posts.html',
                    routes: [
                        {
                            path: '/:post_slug/:post_id',
                            componentUrl: './partials/integrations/wordpress/post.html'
                        }
                    ]
                },
                {
                    path: '/pages',
                    componentUrl: './partials/integrations/wordpress/pages.html',
                    routes: [
                        {
                            path: '/:page_slug/:page_id',
                            componentUrl: './partials/integrations/wordpress/page.html'
                        }
                    ]
                },
                {
                    path: '/authors',
                    componentUrl: './partials/integrations/wordpress/authors.html',
                    routes: [
                        {
                            path: '/:author_slug/:author_id',
                            componentUrl: './partials/integrations/wordpress/posts.html'
                        },
                        {
                            path: '/:author_slug/:author_id/pages',
                            componentUrl: './partials/integrations/wordpress/pages.html'
                        }
                    ]
                }
            ]
        }
    ]
});

/*
|------------------------------------------------------------------------------
| Add Your Routes Here
|------------------------------------------------------------------------------
*/

/*
window.routes.push({

});
*/