import Announcement from '@/views/admin/Announcement'
import Auth from '@/views/admin/Auth'
import Group from '@/views/admin/Group'
import User from '@/views/admin/User'
import Menu from '@/views/admin/Menu'

export default [
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/views/layout/MainLayout.vue'),
        children: [
            {
                path: '/admin/announcement',
                name: '공지사항관리',
                component: Announcement,
                meta: {
                    groupName: "관리자",
                },
            },
            {
                path: '/admin/Auth',
                name: '권한관리',
                component: Auth,
                meta: {
                    groupName: "관리자",
                },
            },
            {
                path: '/admin/group',
                name: '그룹관리',
                component: Group,
                meta: {
                    groupName: "관리자",
                },
            },
            {
                path: '/admin/menu',
                name: '메뉴관리',
                component: Menu,
                meta: {
                    groupName: "관리자",
                },
            },
            {
                path: '/admin/user',
                name: '사용자관리',
                component: User,
                meta: {
                    groupName: "관리자",
                },
            },
        ]
    },
]