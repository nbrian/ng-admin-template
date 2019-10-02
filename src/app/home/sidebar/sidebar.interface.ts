export interface SidebarItem {
    icon: any;
    name: string;
    url: string;
    children?: Array<SidebarItem>;
}