import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div style={{ display: 'flex', height: '100vh', overflowY: 'auto' }}>
      <CDBSidebar textColor="black" backgroundColor="white" className={''} breakpoint={0} toggled={false} minWidth={''} maxWidth={''}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'black' }}>
            <img src={Logo} alt="Logo" width={80} />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="tachometer-alt">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/tables" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="boxes">All Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/categories" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="tags">Create Categories</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/orders" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="shopping-cart">Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/create-order" target="_blank" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="plus-circle">Create Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/customers" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="users">All Customers</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/hero-section" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="image">Hero Section</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/logout" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
              <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
