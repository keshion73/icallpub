import Policy from '@/views/policy/Policy'
import Rateplan from '@/views/policy/Rateplan'
import Refund from '@/views/policy/Refund'

export default [
    {
        path: '/policy',
        name: 'policy',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/policy/policy',
                name: '정책관리',
                component: Policy,
                meta: {
                    groupName: "정책/요금",
                },
            },
            {
                path: '/policy/rateplan',
                name: '요금제관리',
                component: Rateplan,
                meta: {
                    groupName: "정책/요금",
                },
            },
            {
                path: '/policy/refund',
                name: '환불관리',
                component: Refund,
                meta: {
                    groupName: "정책/요금",
                },
            }
        ]
    },
]