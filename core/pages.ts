import { LuUsers } from 'react-icons/lu'
import { MdSpaceDashboard } from 'react-icons/md'

export const PAGES = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: MdSpaceDashboard,
    regex: /^\/dashboard$/,
  },
  {
    title: 'Membros',
    path: '/dashboard/members',
    icon: LuUsers,
    regex: /^\/dashboard\/members/,
  },
]
