'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .config(
        ['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
            function($stateProvider, $urlRouterProvider, JQ_CONFIG) {

                $urlRouterProvider
                    .otherwise('/optical/homePage');
                $stateProvider

                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'partials/app.html'
                    })
                    .state('app2', {
                        abstract: true,
                        url: '/app2',
                        templateUrl: 'partials/app2.html'
                    })
                    
                    .state('app.frl-dashboard', {
                        url: '/optical/dashboard',
                        templateUrl: 'partials/opt-dashboard.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                            function() {
                                                return $ocLazyLoad.load('js/controllers/frl-dashboard.js');
                                            }
                                        )
                                        .then(
                                          function(){
                                               return $ocLazyLoad.load('js/controllers/vectormap.js');
                                            }
                                          )/*.then(
                                          function(){
                                                return $ocLazyLoad.load('js/directives/ui-todowidget.js');
                                            }
                                         )*/
                                    ;
                                }
                            ]
                        }
                    })
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        //template: '<div ui-view class=""></div>',
                        templateUrl: 'partials/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function(uiLoad) {
                                    return uiLoad.load(['../bower_components/font-awesome/css/font-awesome.css', 'js/controllers/mail.js',
                                        'js/services/mail-service.js',
                                        JQ_CONFIG.moment
                                    ]);
                                }
                            ]
                        }
                    })
                    .state('app.mail.list', {
                        url: '/{fold}',
                        templateUrl: 'partials/mail-list.html'
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'partials/mail-compose.html'
                    })
                    .state('app.mail.view', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'partials/mail-view.html'
                    }) 
                    .state('app.frl-users', {
                        url: '/optical/users',
                        templateUrl: 'partials/frl-users.html'
                    })    
                    .state('app.frl-user-add', {
                        url: '/optical/user-add',
                        templateUrl: 'partials/frl-user-add.html'
                    })    
                    .state('app.frl-user-edit', {
                        url: '/optical/user-edit',
                        templateUrl: 'partials/frl-user-edit.html'
                    })
                       
                    .state('app.frl-buyers', {
                        url: '/optical/clients',
                        templateUrl: 'partials/opt-clients.html'
                    })    
                    .state('app.frl-buyer-add', {
                        url: '/optical/client-add',
                        templateUrl: 'partials/opt-clients-add.html'
                    })    
                    .state('app.frl-buyer-edit', {
                        url: '/optical/client-edit',
                        templateUrl: 'partials/opt-clients-edit.html'
                    })
                    .state("homePage", {
                        url: '/optical/homePage',
                        templateUrl: 'partials/homePage.html'
                    })
                    
//                    .state('app.frl-seller-add', {
//                        url: '/freelancing/seller-add',
//                        templateUrl: 'partials/frl-seller-add.html'
//                    })    
//                    .state('app.frl-seller-edit', {
//                        url: '/freelancing/seller-edit',
//                        templateUrl: 'partials/frl-seller-edit.html'
//                    })
                    .state('app.frl-report-sales', {
                        url: '/optical/report-sales',
                        templateUrl: 'partials/frl-report-sales.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/frl-report-sales.js');
                                        }
                                    );
                                }
                            ]
                        }
                    }) 
                    .state('app.frl-report-buyers', {
                        url: '/optical/report-clients',
                        templateUrl: 'partials/opt-report-clients.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load('chart.js').then(
                                        function() {
                                            return $ocLazyLoad.load('js/controllers/frl-report-buyers.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.frl-report-targets', {
                        url: '/optical/report-targets',
                        templateUrl: 'partials/frl-report-targets.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function($ocLazyLoad) {
                                    return $ocLazyLoad.load(['js/controllers/frl-report-targets.js']);
                                }
                            ]
                        }
                    })
//                    .state('app.frl-tickets', {
//                        url: '/optical/tickets',
//                        templateUrl: 'partials/frl-tickets.html'
//                    })    
//                    .state('app.frl-ticket-add', {
//                        url: '/optical/ticket-add',
//                        templateUrl: 'partials/frl-ticket-add.html'
//                    })    
                    .state('app.frl-ticket-edit', {
                        url: '/optical/ticket-edit',
                        templateUrl: '../opticalcvs/client/views/index_host.html'
                    })
                    .state('app.frl-invoices', {
                        url: '/optical/invoices',
                        templateUrl: 'partials/frl-invoices.html'
                    })    
                    .state('app.frl-invoice-add', {
                        url: '/optical/invoice-add',
                        templateUrl: 'partials/frl-invoice-add.html'
                    })    
                    .state('app.frl-invoice-edit', {
                        url: '/optical/invoice-edit',
                        templateUrl: 'partials/frl-invoice-edit.html'
                    })
                    .state('app.frl-invoice-view', {
                        url: '/optical/invoice-view',
                        templateUrl: 'partials/frl-invoice-view.html'
                    }) 
                    .state('app2.crm-dashboard', {
                        url: '/optical/client-dashboard',
                        templateUrl: 'partials/crm-dashboard.html'
                    })    
                    .state('app2.videochat', {
                        url: '/optical/videoChat/',
                        templateUrl: 'partials/videoChat1.html'
                    })    
                    .state('app2.clientInfo', {
                        url: '/optical/clientinfo/client:id',
                        templateUrl: 'partials/opt-clientInfo.html'
                    })
                    .state("app2.fileupload", {
                                url: '/optical/uploadfile',
                                templateUrl: 'partials/form-fileupload.html'
                     }) 
                .state('app2.crm-calendar', {
                        url: '/optical/calendar',
                        templateUrl: 'partials/crm-calendar.html',
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        JQ_CONFIG.fullcalendar.concat('js/controllers/crm-calendar.js')
                                    ).then(
                                        function() {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }
                            ]
                        }
                    })

                  
                
            }
        ]
    );
