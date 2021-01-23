import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader, Button, Label, Col, Row} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


const maxLenght = (len) => (val) => !(val) || (val.length <= len);
const minLenght = (len) => (val) => (val) && (val.length >= len);

export default class CommentForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        this.setState({isModalOpen: false});
    }

    render() {
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="container">

                            <Row className="form-group">
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" 
                                id="author" 
                                name="author" 
                                placeholder="Your Name" 
                                className="form-control"
                                validators={{
                                    minLenght: minLenght(3), 
                                    maxLenght: maxLenght(15)
                                }}/>
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLenght: ' Must be greater than 2 characters',
                                        maxLenght: ' Must be 15 characters or less'
                                    }}
                                />
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" 
                                    name="comment" 
                                    rows="6"
                                    className="form-control"/>
                            </Row>

                            <Row className="form-group">
                                <Button type="submit" value="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
