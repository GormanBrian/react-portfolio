export interface NavItem {
  label: string;
  path: string;
}

export interface NavProps {
  items: Array<NavItem>;
}
