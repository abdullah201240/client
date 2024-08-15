import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faClipboardCheck, faUndoAlt, faCircleUser, faUser, faBoxOpen, faRetweet, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const UserNavLinks = [
  {
    label: 'ABOUT US',
    to: '/about-us'
  },
  {
    label: 'HELP & SUPPORT',
    isDropdown: true,
    dropdownItems: [
      { label: 'Shipping & Delivery', to: '/shipping-delivery', icon: <FontAwesomeIcon icon={faShippingFast} /> },
      { label: 'Terms and Conditions', to: '/terms-conditions', icon: <FontAwesomeIcon icon={faClipboardCheck} /> },
      { label: 'Refund and Return Policy', to: '/refund-returns', icon: <FontAwesomeIcon icon={faUndoAlt} /> },
    ]
  },
  {
    label: 'CONTACT US',
    to: '/contact-us'
  },
  {
    
    isDropdown: true, 
    icon: <FontAwesomeIcon icon={faCircleUser} style={{ fontSize: '24px', display: 'block' }} />,
    dropdownItems: [
      { label: 'My Account', to: '/user/account', icon: <FontAwesomeIcon icon={faUser} /> },
      { label: 'My Orders', to: '/user/orders', icon: <FontAwesomeIcon icon={faBoxOpen} /> },
      { label: 'My Return & Cancellations', to: '/user/returns', icon: <FontAwesomeIcon icon={faRetweet} /> },
      { label: 'Logout', to: '/user/logout', icon: <FontAwesomeIcon icon={faSignOutAlt} /> },
    ]
  }
  
];
