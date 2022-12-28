/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    About: [
        {
            type: 'doc',
            id: 'about/humhub'
        },
        {
            type: 'category',
            label: 'Release Notes',
            items: [
                'about/releasenotes/release_notes',
                'about/releasenotes/release_notes_1_13',
                'about/releasenotes/release_notes_1_12',
                'about/releasenotes/release_notes_1_11',
                'about/releasenotes/release_notes_1_10',
                'about/releasenotes/release_notes_1_9',
                'about/releasenotes/release_notes_1_8',
                'about/releasenotes/release_notes_1_7',
                'about/releasenotes/release_notes_1_6',
                'about/releasenotes/release_notes_1_5'
            ]
        },
        {
            type: 'doc',
            id: 'about/contribution'
        },
        {
            type: 'doc',
            id: 'about/support'
        },
        {
            type: 'link',
            label: 'License',
            href: 'https://www.humhub.com/en/licences'
        },

       /* 'Release Notes': [
            'about/spaces',
        ],
        'Contribution': [
            'about/humhub',
        ],*/
    ],
    Administration: {
        'Introduction': [
            'admin/introduction',
        ],
        'Installation': [
            'admin/requirements',
            'admin/server-setup',
            'admin/installation',
        ],
        'Configuration': [
            'admin/advanced-configuration',
            'admin/config-options',
            'admin/authentication',
            'admin/ldap',
            'admin/performance',
            'admin/search',
            'admin/uploads',
            'admin/cron-jobs',
            'admin/asynchronous-tasks',
            'admin/permissions',
            'admin/redis',
            'admin/reverse-proxy',
            'admin/logging',
            'admin/translations',
            'admin/security',
        ],
        'Maintenance': [
            'admin/backup',
            'admin/console',
            'admin/modules',
            'admin/troubleshooting'
        ],
        'Updating': [
            'admin/updating',
            'admin/updating-migration2',
        ],        
    },
    Developement: {
        'Introduction': [
            'develop/overview',
            'develop/environment',
            'develop/coding-standards',
            'develop/build',
            'develop/modules-migrate',
            'develop/pull-requests',
        ],
        'Module Development': [
            'develop/modules',
            'develop/modules-base-class',
            'develop/modules-event-handler',
            'develop/modules-git',
            'develop/testing',

        ],
        'Basic Concepts': [
            'develop/models',
            'develop/modules-users',
            'develop/content',
            'develop/stream',
            'develop/events',
            'develop/module-settings',
            'develop/permissions',
            'develop/notifications',
            'develop/activities',
            'develop/files',
            'develop/widgets',
            'develop/menus',
            'develop/snippet',
            'develop/i18n',
        ],
        'Frontend Development': [
            'develop/javascript-index',
            'develop/javascript-actions',
            'develop/javascript-components',
            'develop/javascript-uiadditions',
            'develop/javascript-client',
        ],
        'Advanced Topics': [
            'develop/embedded-themes',
            'develop/authentication',
            'develop/live',
            'develop/search',
            'develop/security',
            'develop/console',
            'develop/oembed',
        ],
        'Rest API': [
            {
                type: 'link',
                label: 'Documentation',
                href: 'https://www.humhub.com/en/marketplace/rest/#Manual'
            },
            {
                type: 'link',
                label: 'GitHub Repository',
                href: 'https://github.com/humhub/humhub-modules-rest'
            }
        ]
    },
    Theming: {
        'Introduction': [
            'theme/overview',
            'theme/structure',
            'theme/css',
            'theme/views',
            'theme/tutorial',
            'theme/migrate',
        ],
        'Special Topics': [
            'theme/javascript',
            'theme/module',
            'theme/assets',
            'theme/mail',
            'theme/default-images',
        ]
    },
    Professional: {
        'Overview': [
            'professional-edition/pe-intro',
            'professional-edition/features',
            'professional-edition/support',
            'professional-edition/licence',
            'professional-edition/saas',
            'professional-edition/ee',
        ]
    },
/*
    User: {
        'Overview': [
//            'user/gettingstarted',
        ]
    }    
*/
};
