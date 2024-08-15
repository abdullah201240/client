// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShippingFast, faClipboardCheck, faUndoAlt, faCircleUser, faUser, faBoxOpen, faRetweet, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// export const NavLinks = [
//   {
//     label: 'ABOUT US', 
//     to: '/about-us'
//   },
//   {
//     label: 'HELP & SUPPORT',
//     isDropdown: true,
//     dropdownItems: [
//       { label: 'Shipping & Delivery', to: '/shipping-delivery', icon: <FontAwesomeIcon icon={faShippingFast} /> },
//       { label: 'Terms and Conditions', to: '/terms-conditions', icon: <FontAwesomeIcon icon={faClipboardCheck} /> },
//       { label: 'Refund and Return Policy', to: '/refund-returns', icon: <FontAwesomeIcon icon={faUndoAlt} /> },
//     ]
//   },
//   {
//     label: 'CONTACT US', 
//     to: '/contact-us'
//   },
//   { 
//     label: 'LOGIN', 
//     to: '/user/login' 
//   },
//   { 
//     label: 'SIGN UP', 
//     to: '/user/register' 
//   },
  
  
// ];



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faClipboardCheck, faUndoAlt, faCircleUser, faUser, faBoxOpen, faRetweet, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const NavLinks = [
  {
    label: 'ABOUT US',
    to: '/about-us',
  },
  {
    label: 'HELP & SUPPORT',
    isDropdown: true,
    dropdownItems: [
      { label: 'Shipping & Delivery', to: '/shipping-delivery', icon: <FontAwesomeIcon icon={faShippingFast} /> },
      { label: 'Terms and Conditions', to: '/terms-conditions', icon: <FontAwesomeIcon icon={faClipboardCheck} /> },
      { label: 'Refund and Return Policy', to: '/refund-returns', icon: <FontAwesomeIcon icon={faUndoAlt} /> },
    ],
  },
  {
    label: 'CONTACT US',
    to: '/contact-us',
  },
  {
    label: 'LOGIN',
    to: '/user/login',
  },
  {
    label: 'SIGN UP',
    to: '/user/register',
  },
  
];
