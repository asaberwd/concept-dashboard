import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const AddProduct = React.lazy(() => import('./views/Buttons/AddProduct'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Products = React.lazy(() => import('./views/Buttons/Products'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const AddUser = React.lazy(() => import('./views/Roles/AddUser'));
const ViewUsers = React.lazy(() => import('./views/Roles/Users'));
const FontAwesome = React.lazy(() => import('./views/Roles/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Roles/SimpleLineIcons'));
const Lead = React.lazy(() => import('./views/Lead/Lead'));
const Badges = React.lazy(() => import('./views/Lead/Badges'));
const UploadLead = React.lazy(() => import('./views/Lead/UploadLead'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const ViewUser = React.lazy(() => import('./views/Roles/Users/User'));
const ViewLead = React.lazy(() => import('./views/Lead/Lead/LeadInfo'));
const AddLead = React.lazy(() => import('./views/Lead/AddLead'));
const AddCompany = React.lazy(() => import('./views/Lead/AddCompany'));

const Orders = React.lazy(() => import('./views/Orders/Orders'));
const AddOrder = React.lazy(() => import('./views/Orders/AddOrder'));
const SingleOrder = React.lazy(() => import('./views/Orders/Orders/OrderData'));





// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },

  { path: '/product', exact: true, name: 'Product', component: Products },
  { path: '/product/products', name: 'Products', component: Products },
  { path: '/product/addproduct', name: 'Add Product', component: AddProduct },
  { path: '/product/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/product/brand-buttons', name: 'Brand Buttons', component: BrandButtons },


  { path: '/orders', exact: true, name: 'orders', component: Orders },
  { path: '/orders/orders', name: 'view orders', component: Orders },
  { path: '/orders/addorder', name: 'Add Order', component: AddOrder },


  { path: '/roles', exact: true, name: 'Icons', component: ViewUsers },
  { path: '/roles/adduser', name: 'CoreUI Icons', component: AddUser },
  { path: '/roles/viewusers', name: 'ViewUsers', component: ViewUsers },
  { path: '/roles/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/roles/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/lead', exact: true, name: 'Lead', component: Lead },
  { path: '/lead/lead', name: 'Lead', component: Lead },
  { path: '/lead/addlead', name: 'Lead', component: AddLead },
  { path: '/lead/badges', name: 'Badges', component: Badges },
  { path: '/lead/uploadlead', name: 'UploadLead', component: UploadLead },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'Users Details', component: User },
  { path: '/user/:id', exact: true, name: 'View User Details', component: ViewUser },
  { path: '/lead/addcompany', exact: true, name: 'Add New Company', component: AddCompany },
  { path: '/lead/:id', exact: true, name: 'View Lead Details', component: ViewLead },
  { path: '/order/:id', exact: true, name: 'View Order Details', component: SingleOrder },


];

export default routes;
