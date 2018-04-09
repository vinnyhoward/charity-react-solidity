import React from 'react';
import './Layout.css';
const Layout = (props) => {
    return (
      <div className='layout-body'>
      <section className='wave'></section>
        <section>
          { props.children }
        </section>
      </div>
    )
}

export default Layout;
