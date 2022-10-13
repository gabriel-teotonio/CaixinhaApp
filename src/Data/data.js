import { MdSpaceDashboard, MdPayments } from 'react-icons/md'
import { HiUsers,  } from 'react-icons/hi'
import { RiUserSharedFill,  } from 'react-icons/ri'



export const sidebarData = [
    {
        path: 'Inicio',
        icon: MdSpaceDashboard,
        heading:'Overview'
    },
    {
        path: 'Usuarios',
        icon: HiUsers,
        heading:'Usuários'
    },
    {
        path: 'Pagamentos',
        icon: MdPayments,
        heading:'Pagamentos'
    },
    {
        path: 'Emprestimos',
        icon: RiUserSharedFill,
        heading:'Empréstimos'
    }
]

export const headerOverviewData = [
    {
        icon:'',
        TransactionMounth: 1200,
        heading:'Pagamentos do mês'
    },
    {
        icon:'',
        TransactionMounth: 860,
        heading:'Empréstimos do mês'
    }
]