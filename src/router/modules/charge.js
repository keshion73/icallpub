import Charge from '@/views/charge/ChargeHistory'
import ChargeStatistics from '@/views/charge/ChargeStatistics'
import ChargeRateInfo from '@/views/charge/ChargeRateInfo'

export default [
    {
        path: '/charge',
        name: 'charge',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/charge/chargehistory',
                name: '충전내역조회',
                component: Charge,
                meta: {
                    groupName: "충전",
                },
            },
            {
                path: '/charge/chargestatistics',
                name: '충전 통계',
                component: ChargeStatistics,
                meta: {
                    groupName: "충전",
                },
            },
            {
                path: '/charge/chargerateinfo',
                name: '충전업체요율',
                component: ChargeRateInfo,
                meta: {
                    groupName: "충전",
                },
            }
        ]
    },
]