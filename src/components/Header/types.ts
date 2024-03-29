export interface NavItem {
  label: string;
  path: string;
}

export interface NavProps {
  items: Array<NavItem>;
  activePath: string;
  linkColor: string;
  activeLinkColor: string;
}
