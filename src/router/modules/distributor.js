import Agency from '@/views/distributor/Agency'
import CodeGrant from '@/views/distributor/CodeGrant'
import Usim from '@/views/distributor/Usim'

export default [
    {
        path: '/distributor',
        name: 'distributor',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/distributor/agency',
                name: '대리점관리',
                component: Agency,
                meta: {
                    groupName: "총판/대리점",
                },
            },
            {
                path: '/distributor/codegrant',
                name: '대리점 코드부여',
                component: CodeGrant,
                meta: {
                    groupName: "대리점 코드부여",
                },
            },
            {
                path: '/distributor/usim',
                name: '대리점유심칩관리',
                component: Usim,
                meta: {
                    groupName: "총판/대리점",
                },
            }
        ]
    },
]