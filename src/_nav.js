export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    /*{
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },*/
    {
      name: 'Product',
      url: '/product',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Products',
          url: '/product/products',
          icon: 'icon-cursor',
        },
        {
          name: 'Add Product',
          url: '/product/addproduct',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/product/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/product/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'orders',
      url: '/orders',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Orders',
          url: '/orders/orders',
          icon: 'icon-cursor',
        },
        {
          name: 'Add order',
          url: '/orders/addorder',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Roles',
      url: '/roles',
      icon: 'icon-star',
      children: [
        {
          name: 'AddUser',
          url: '/roles/AddUser',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Users',
          url: '/roles/viewUsers',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/roles/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/roles/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Lead',
      url: '/Lead',
      icon: 'icon-bell',
      children: [
        {
          name: 'Lead',
          url: '/lead/lead',
          icon: 'icon-bell',
        },
        {
          name: 'AddLead',
          url: '/lead/addlead',
          icon: 'icon-bell',
        },
        {
          name: 'AddCompany',
          url: '/lead/addcompany',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/lead/badges',
          icon: 'icon-bell',
        },
        {
          name: 'UploadLead',
          url: '/lead/uploadlead',
          icon: 'icon-bell',
        },
      ],
    },
    /*{
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart',
    }, 
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },*/
    {
      divider: true,
    },
    /*{
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Disabled',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },*/
  ],
};
