import History from '@/views/amount/History'
import Deposit from '@/views/deposit/Deposit'
import Refund from '@/views/amount/Refund'

export default [
    {
        path: '/amount',
        name: 'amount',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/amount/history',
                name: '입출금내역관리',
                component: History,
                meta: {
                    groupName: "금액/예치금",
                },
            },
            {
                path: '/amount/deposit',
                name: '예치금관리',
                component: Deposit,
                meta: {
                    groupName: "금액/예치금",
                },
            },
            {
                path: '/amount/refund',
                name: '예치금 환불요청 조회',
                component: Refund,
                meta: {
                    groupName: "금액/예치금",
                },
            }
        ]
    },
]