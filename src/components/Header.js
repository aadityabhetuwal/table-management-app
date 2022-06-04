import React from "react";

const Header = (props) => {

    return (
        <div>
            <div className="header text-center mt-4">Table Management System</div>
            <div className='container d-flex align-items-center justify-content-center gap-4 p-3' >
                <a href='/ManageTables' className='routes routes'>Manage Table </a>
                <a href='/AddTable' className='routes routes'>Create Table</a>
            </div>
        </div>
    );
}

export default Header;