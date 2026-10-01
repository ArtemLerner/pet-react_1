export interface MenuType {
    label: string,
    path: string
}


export const MENU: MenuType[] = [
    {label: "Авто з США", path: "/usa-cars"},
    {label: "Відстежити авто", path: "/track"},
    {label: "Авто В наявності", path: "/in-stock"},
    {label: "Ремонт", path: "/repair"},
    {label: "Кредит", path: "/credit"},
    {label: "Про нас", path: "/about"},
    {label: "Відгуки", path: "/reviews"},
    {label: "Розмитнення", path: "/customs"},
]
