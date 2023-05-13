import Calculate from '@/views/calculate/Calculate'

export default [
    {
        path: '/calculate',
        name: 'calculate',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/calculate/calculate',
                name: '정산관리',
                component: Calculate,
                meta: {
                    groupName: "정산",
                },
            }
        ]
    },
]