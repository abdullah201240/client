import React from 'react';
import Sidebar from './Sidebar';
import AdminNavbar from './AdminNavbar';
import AdminFooter from './AdminFooter';

export default function AdminHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh',background:'rgb(243, 242, 247)' }}>
      
      <div style={{ display: 'flex', flex: '1 1 auto' }}>
        <Sidebar />
        <div style={{ flex: 1,paddingLeft:'20px' }}>
          <div style={{background:'white',paddingLeft:'50px',borderRadius:'20px'}}>
          <AdminNavbar />

          </div>
        
        <div >
        <h1>Welcome to the Admin Dashboard</h1>


        </div>
          
         
        </div>
      </div>
      <AdminFooter />
      
    </div>
  );
}
