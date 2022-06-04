import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
// import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ImageLoader from './components/ImageLoader';

class CRUDForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            layout : null,
            name : null,
            status: null
        }
    }

    render() {
        return (
            <>
                <div className='title m-3'>Create Table</div>

                <Form>
                    <Form.Group className="d-flex align-items-center justify-content-center gap-4 flex-column">

                        <Form.Group className='d-flex align-items-center w-75 gap-1'>
                            <Form.Label htmlFor="layout">Layout:</Form.Label>
                            <Form.Select name="layout" id="layout" className="form-select w-50" required>
                                <option disabled defaultValue={""}>Select layout</option>
                                <option defaultValue="1">1</option>
                                <option defaultValue="2">2</option>
                                <option defaultValue="3">3</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Form.Group className='d-flex align-items-center w-75 gap-1'>
                            <Form.Label htmlFor="name">Name:</Form.Label>
                            <Form.Control type="text" name="name" id="name" placeholder='Enter name'
                                className="w-50" required defaultValue="" />
                            
                        </Form.Group>
                        
                        <Form.Group className='d-flex align-items-center w-75 gap-1'>
                            <Form.Label htmlFor="capacity">Capacity:</Form.Label>
                            <Form.Control type="number" name="capacity" id="name" placeholder='Enter name'
                                className="w-50" required/>
                        </Form.Group>

                        <Form.Group className='d-flex align-items-center w-75 gap-1'>
                            <Form.Label htmlFor="status">Status:</Form.Label>
                            <input type="checkbox" name="status" id="status" 
                                className="form-check" defaultValue="status"/>
                        </Form.Group> 
                        
                        <ImageLoader /> 

                        <Form.Group className="d-flex w-75 gap-3 align-items-center justify-content-start" 
                            style={{marginLeft: '12%'}}>
                            <Button type="submit" variant="dark">Create table</Button>
                            <Button type="reset" variant="danger">Cancel</Button>
                        </Form.Group>

                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default CRUDForm;