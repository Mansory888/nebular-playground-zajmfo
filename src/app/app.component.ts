import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TreeNode<T> {
  data: T | string;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  roles: { [role: string]: boolean };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  allColumns = ['admin', 'user'];

  data: TreeNode<FSEntry>[] = [
    {
      data: 'View',
      children: [
        {
          data: {
            name: 'VIEW_ASSET_INCULDED_SERVICES',
            roles: { admin: false, user: false },
          },
        },
        {
          data: {
            name: 'VIEW_CUSTOMER_REPORTS',
            roles: { admin: false, user: false },
          },
        },
        {
          data: {
            name: 'VIEW_ESP_ASSET',
            roles: { admin: false, user: false },
          },
        },
      ],
    },
    {
      data: 'EDIT',
      children: [
        {
          data: {
            name: 'EDIT_SOMETHING',
            roles: { admin: false, user: false },
          },
        },
      ],
    },
    {
      data: 'Create',
      children: [
        {
          data: {
            name: 'VIEW_ASSET_INCULDED_SERVICES',
            roles: { admin: false, user: false },
          },
        },
        {
          data: {
            name: 'VIEW_CUSTOMER_REPORTS',
            roles: { admin: false, user: false },
          },
        },
        {
          data: {
            name: 'VIEW_ESP_ASSET',
            roles: { admin: false, user: false },
          },
        },
      ],
    },
  ];
}
