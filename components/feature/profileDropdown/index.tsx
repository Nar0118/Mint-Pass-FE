import React, { useState } from 'react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IProfileDropdown, ProfileDropdownProps } from './types';

import styles from './profileDropdown.module.scss';

export const ProfileDropdown = ({ username, items }: ProfileDropdownProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleActive = (id: number): void => {
    setActiveItem(id);
  };

  return (
    <div className={styles.container}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className={styles.content}>
            <img src="/icons/profile.svg" alt="profile" /> {username}
            <img src="/icons/profileDropdown.svg" alt="profileDropdown" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenuContent className={styles.dropdownMenuContent}>
          {items.map((item: IProfileDropdown) => (
            <DropdownMenuItem
              key={item.id}
              className={`${styles.item} 
                        ${styles[activeItem === item.id ? 'active' : '']}`}
              onClick={() => handleActive(item.id)}
            >
              <div dangerouslySetInnerHTML={{ __html: item.label }} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu.Root>
    </div>
  );
};
