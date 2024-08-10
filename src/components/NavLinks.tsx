import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faClipboardCheck, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

export const NavLinks = [
  {
    label: 'Help & Support',
    isDropdown: true,
    dropdownItems: [
      { label: 'Shipping & Delivery', to: '/shipping-delivery', icon: <FontAwesomeIcon icon={faShippingFast} /> },
      { label: 'Terms and Conditions', to: '/terms-conditions', icon: <FontAwesomeIcon icon={faClipboardCheck} /> },
      { label: 'Refund and Return Policy', to: '/refund-returns', icon: <FontAwesomeIcon icon={faUndoAlt} /> },
    ],
  },
  { label: 'LOGIN', href: '#' },
  { label: 'SIGN UP', href: '#' },
];
