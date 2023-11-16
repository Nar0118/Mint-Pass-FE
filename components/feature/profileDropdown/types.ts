export interface IProfileDropdown {
  id: number;
  label: string;
}

export type ProfileDropdownProps = {
  username: string;
  items: Array<IProfileDropdown>;
};
