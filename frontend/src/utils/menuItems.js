import { dashboard, expenses, transactionIcon, trends } from "../utils/icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        path: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transactionIcon,
        path: '/transactions'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trends,
        path: '/incomes'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        path: '/expenses'
    }
];