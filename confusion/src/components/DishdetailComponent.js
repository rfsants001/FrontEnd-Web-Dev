import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';




    function RenderDish({dish}){
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

    function RenderComments({comments}){
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

    const DishDetail = (props) => {
        if (props.dish && props.comments) {
            const dish = props.dish;
            const comments = props.comments;
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">
                                    Menu
                                </Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem active>
                                    {dish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                            <hr/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={comments} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

export default DishDetail;