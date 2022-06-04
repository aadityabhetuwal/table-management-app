import React, { Component, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import TableList from './TableList';


const ManageTable = () => {
    const [tableList, setTableList] = useLocalStorage('tableList', []);

    const handleDelete = (name) => {
        if (window.confirm(`Do you wish to delete table ${name}`)) {
            setTableList(tableList.filter((table) => table.name !== name));
        }
    };

    var render = (<div className='m-3 p-3'> Please add new tables to be shown</div>);

    if (tableList.length > 0) {
        var tables = [];

        for (var i = 0; i < tableList.length; i++) {
            tables.push(<TableList key={tableList[i].name} table={tableList[i]}
                handleDelete={handleDelete} />);
        }

        render = (
            <div class="d-flex align-items-center justify-content-start m-3 gap-4">
                {tables}
            </div>
        );
    }

    return (
        <>
            <div className='title m-3'>List of Tables</div>
            <div>
                {render}
            </div>
        </>
    )
};

export default ManageTable;