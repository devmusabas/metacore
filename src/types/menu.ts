export type MenuItem = {
  title: string;
  href?: string;
  submenu?: Record<string, MenuItem>;
};
