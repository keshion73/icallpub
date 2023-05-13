import OpeningSearch from '@/views/opening/OpeningSearch'
import OpeningReg from '@/views/opening/OpeningReg'
import OpeningReqSearch from '@/views/opening/OpeningReqSearch'
import OpeningroomAgencySearch from '@/views/opening/OpeningroomAgencySearch'

export default [
    {
        path: '/opening',
        name: 'OpeningSearch',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/opening/search',
                name: '개통조회',
                component: OpeningSearch,
                meta: {
                    groupName: "개통",
                },
            },
            {
                path: '/opening/reg',
                name: '개통등록',
                component: OpeningReg,
                meta: {
                    groupName: "개통",
                },
            },
            {
                path: '/opening/reqsearch',
                name: '개통요청조회',
                component: OpeningReqSearch,
                meta: {
                    groupName: "개통",
                },
            },
            {
                path: '/opening/agencysearch',
                name: '대리점조회',
                component: OpeningroomAgencySearch,
                meta: {
                    groupName: "개통",
                },
            },
        ]
    },
]