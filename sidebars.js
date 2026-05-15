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
                'about/releasenotes/release_notes_1_18',
                'about/releasenotes/release_notes_1_17',
                'about/releasenotes/release_notes_1_16',
                'about/releasenotes/release_notes_1_15'
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
            'admin/dot-env',
            'admin/config-options',
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
            'admin/updating-migration',
        ],        
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
