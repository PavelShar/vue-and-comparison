module.exports = {
    title: 'Vue Comparison',
    description: 'Sliding table for convenient items comparison',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/guide/installation' },

        ],
        sidebar: {
            '/guide/' : [
                {
                    collapsable: false,
                    children: [
                        'installation',
                        'props',
                        'slots',
                        'events',
                        'examples'
                    ]
                }
            ]
        },
        repo: 'PavelShar/vue-and-comparison',
    },
    base: "/vue-and-comparison/"
}