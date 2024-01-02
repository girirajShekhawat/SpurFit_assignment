import React from 'react';

function NavbarButton(props) {
    const {link}=props
    return (
        <div>
            <img src={`${link}`} alt="img" />
        </div>
    );
}

export default NavbarButton;