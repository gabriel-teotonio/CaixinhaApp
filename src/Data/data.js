import { MdSpaceDashboard, MdPayments } from 'react-icons/md'
import { HiUsers,  } from 'react-icons/hi'
import { RiUserSharedFill,  } from 'react-icons/ri'



export const sidebarData = [
    {
        path: '/Overview',
        icon: MdSpaceDashboard,
        heading:'Overview'
    },
    {
        path: '/Users',
        icon: HiUsers,
        heading:'Usuários'
    },
    {
        path: '/Payments',
        icon: MdPayments,
        heading:'Pagamentos'
    },
    {
        path: '/Loans',
        icon: RiUserSharedFill,
        heading:'Empréstimos'
    }
]