import React, { Component } from "react";
import { Form } from 'react-bootstrap';
import "../styles/App.css"

class ImageLoader extends Component{
    constructor(props) {
        super(props);
    }

    handleImageChange(e) {
        e.preventDefault();
        // read file
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onloadend = () => {
            this.props.onImageInput(reader.result);
        }

        reader.readAsDataURL(file);
    }

    render() {
        const imagePreviewUrl = this.props.imagePreviewUrl;
        var imagePreview = null;
        
        if (imagePreviewUrl) {
            imagePreview = (<>
                <div className="align-self-start preview ms-4"> Image preview </div>
                <img src={imagePreviewUrl} className="imgPreview align-self-start ms-5"/>
            </>);
        } 

        return ( <>
            <Form.Group className='d-flex align-items-center w-75 gap-1'>
                <Form.Label htmlFor="image">Image:</Form.Label>
                <Form.Control type="file" name="image" id="image" accept='image/*'
                    className="w-50" onChange={e => this.handleImageChange(e)}/>
            </Form.Group> 

            {imagePreview}
        </>);

    }
}

export default ImageLoader;