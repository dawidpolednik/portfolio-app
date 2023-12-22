import { NavigationSectionName } from './NavigationSectionName';

export interface MenuItem {
  id: number;
  name: string;
  toNavigate: NavigationSectionName;
}
