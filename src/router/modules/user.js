import UserInfo from '@/views/user/UserInfo'
import PasswordInfo from '@/views/user/PasswordInfo'

export default [
    {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/userinfo/userinfo',
                name: '내정보',
                component: UserInfo,
                meta: {
                    groupName: "사용자정보",
                },
            },
            {
                path: '/userinfo/passwordinfo',
                name: '비밀번호 변경',
                component: PasswordInfo,
                meta: {
                    groupName: "사용자정보",
                },
            }
        ]
    },
]