import React , { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail  extends Component{

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish){
        if(dish != null){
            return(
                    <Card>
                        <CardImg top  width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(comments){
        if(comments != null){
            return(
                <div className="container">
                        <h4>Comments</h4>
                        {comments.map((com) => {
                            let date = new Intl.DateTimeFormat('en-US', {
                                year:'numeric',
                                month: 'short',
                                day: '2-digit'
                            }).format(new Date(Date.parse(com.date)))
                            return(
                                <ul className="list-unstyled" key={com.id}>
                                    <li className="comment">{com.comment}</li>
                                    <br/>
                                    <li className="author">-- {com.author}, {date}</li>
                                </ul>
                            )
                            })}
                </div>
            )
            
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        
        const selectedDish = this.props.dish;

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish.comments)}
                    </div>
                </div>
            </div>
        )
    }

}

export default DishDetail;