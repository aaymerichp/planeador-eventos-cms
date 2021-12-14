import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Productos',
    isTitle: true,
  },
  {
    label: 'Ver productos',
    icon: 'layout',
    link: 'products'
  },
  {
    label: 'Agregar productos',
    icon: 'file-plus',
    link: 'new-product'
  },
  {
    label: 'Proveedores',
    isTitle: true,
  },
  {
    label: 'Ver proveedores',
    icon: 'layout',
    link: 'providers'
  },
  {
    label: 'Agregar proveedores',
    icon: 'file-plus',
    link: 'new-provider'
  },
  {
    label: 'Servicios',
    isTitle: true,
  },
  {
    label: 'Ver servicios',
    icon: 'layout',
    link: 'services'
  },
  {
    label: 'Agregar servicios',
    icon: 'file-plus',
    link: 'new-service'
  },
  // {
  //   label: 'Suscripciones',
  //   isTitle: true,
  // },
  // {
  //   label: 'Ver suscripciones',
  //   icon: 'layout',
  //   link: 'suscriptions'
  // },
  // {
  //   label: 'Agregar suscripciones',
  //   icon: 'file-plus',
  //   link: 'new-suscription'
  // }
];
