import Charge from '@/views/dist/Charge'
import ChargeHistory from '@/views/dist/ChargeHistory'
import Refund from '@/views/dist/Refund'
import RefundHistory from '@/views/dist/RefundHistory'

export default [
    {
        path: '/dist/',
        name: 'distributor',
        component: () => import('@/views/layout/DistLayout.vue'),
        children: [
            {
                path: '/dist/Charge',
                name: '고객  선불 충전',
                component: Charge,
                meta: {
                    groupName: "충전",
                },
            },
            {
                path: '/dist/chargehistory',
                name: '충전 내역 조회',
                component: ChargeHistory,
                meta: {
                    groupName: "충전",
                },
            },
            {
                path: '/dist/refund',
                name: '예치금 환불 요청',
                component: Refund,
                meta: {
                    groupName: "충전",
                },
          },
            {
                path: '/dist/refundhistory',
                name: '예치금 환불 요청 내역',
                component: RefundHistory,
                meta: {
                    groupName: "충전",
                },
            }
        ]
    },
]