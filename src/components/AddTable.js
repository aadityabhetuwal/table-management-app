import React, { Component, useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ImageLoader from './ImageLoader';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router';
// import { tab } from '@testing-library/user-event/dist/tab';

function AddTable() {
    const [tableList, setTableList] = useLocalStorage('tableList', []);
    const navigate = useNavigate();

    const defaultState = {
        layout: 'posts',
        name: '',
        capacity: null,
        status: false,
        imagePreviewUrl: null
    };

    const [table, setTable] = useState({ ...defaultState });

    const getTableData = async () => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${table.layout}`);
            return (await response.json());
        } catch (err) {
            console.error(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log(tableList);

        if (table.name === '' || parseInt(table.capacity) === 0 || table.capacity === null) {
            alert('Please fill all the fields');
            return;
        }

        for (var i = 0; i < tableList.length; i++) {
            if (tableList[i].name === table.name) {
                alert('Table name already exists. Please enter another name');
                setTable({ ...defaultState });
                return;
            }
        }

        getTableData().then(tableData => {
            console.log('FEtched data ' + tableData);
            tableData = tableData.slice(0, table.capacity);
            var columns = Object.keys(tableData[0]);
            var rows = tableData.map(row => Object.values(row));
            var dataJson = { columns: columns, rows: rows };

            console.log(dataJson);
            table.tableData = dataJson;

            setTableList([...tableList, table]);
            alert('New table added!');
            navigate('/');
        });
    }


    const imageInput = (imgData) => {
        setTable((prevState) => ({ ...prevState, imagePreviewUrl: imgData }));
    }

    const handleInput = (event) => {
        const { name, value } = event.target;

        switch (event.target.id) {
            case 'layout':
                setTable((prevState) => (
                    {
                        ...prevState,
                        [name]: value
                    }));

                break;
            case 'name':
                setTable((prevState) => (
                    {
                        ...prevState,
                        [name]: value
                    }));
                break;
            case 'capacity':
                setTable((prevState) => (
                    {
                        ...prevState,
                        [name]: value
                    }));
                break;
            case 'status':
                setTable((prevState) => (
                    {
                        ...prevState,
                        [name]: event.target.checked
                    }));
                break;
        }
    }

    const imgData = table.imagePreviewUrl;


    return (
        <>
            <div className='title m-3 mt-0'>Create Table</div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="d-flex align-items-center justify-content-center gap-4 flex-column">

                    <Form.Group className='d-flex align-items-center w-75 gap-1'>
                        <Form.Label htmlFor="layout">Layout:</Form.Label>
                        <Form.Select name="layout" id="layout" className="form-select w-50" required
                            value={table.layout} onChange={handleInput}>
                            <option value="" disabled>Select a layout</option>
                            <option value="posts">Post</option>
                            <option value="comments">Comments</option>
                            <option value="users">Users</option>
                            <option value="todos">Todo</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className='d-flex align-items-center w-75 gap-1'>
                        <Form.Label htmlFor="name">Name:</Form.Label>
                        <Form.Control type="text" name="name" id="name" placeholder='Enter name'
                            className="w-50" required value={table.name}
                            onInput={handleInput} />

                    </Form.Group>

                    <Form.Group className='d-flex align-items-center w-75 gap-1'>
                        <Form.Label htmlFor="capacity">Capacity:</Form.Label>
                        <Form.Control type="number" name="capacity" id="capacity"
                            placeholder='Enter capacity(number of rows)' className="w-50"
                            required value={table.capacity} onInput={handleInput} />
                    </Form.Group>

                    <Form.Group className='d-flex align-items-center w-75 gap-1'>
                        <Form.Label htmlFor="status">Status:</Form.Label>
                        <input type="checkbox" name="status" id="status"
                            className="form-check" defaultValue="status" onInput={handleInput} />
                    </Form.Group>

                    <ImageLoader imagePreviewUrl={imgData}
                        onImageInput={imageInput} />

                    <Form.Group className="d-flex w-75 gap-3 align-items-center justify-content-start"
                        style={{ marginLeft: '12%' }}>
                        <Button type="submit" variant="dark">Create table</Button>
                        <Button type="reset" variant="danger">Cancel</Button>
                    </Form.Group>

                </Form.Group>
            </Form>
        </>
    );
}


export default AddTable;
// export const newTable = Table;