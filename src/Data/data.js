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

export const recentTransactionsData = [
    {
        name: 'Jucelino kubikest',
        typeTransaction:'payment',
        valueTransaction: 60
    },
    {
        name: 'Fernando veloz',
        typeTransaction:'payment',
        valueTransaction: 120
    },
    {
        name: 'Jaqueline linguaruda',
        typeTransaction:'loan',
        valueTransaction: 200
    },
    {
        name: 'Biro',
        typeTransaction:'loan',
        valueTransaction: 60
    },
    {
        name: 'Rosa maria',
        typeTransaction:'payment',
        valueTransaction: 160
    },
]


export const totalTransactionsData = [
    {
        headingTotal:'Total Caixinha',
        valueTotalTransactions:1200
    },
    {
        headingTotal:'Total Pagamentos',
        valueTotalPayments:2000
    },
    {
        headingTotal:'Total Empréstimos',
        valueTotalLoans:800
    },
]
