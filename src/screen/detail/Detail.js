import React, {Component, useState} from "react";
import {getDetail} from "../../actions/DetailAction";
import {connect} from "react-redux";
import {Button, Carousel, Col, Jumbotron, Row} from "react-bootstrap";
import {IMG_URL} from "../../constant/constant";
import './Detail.css'

class Detail extends Component{
    constructor(props) {
        super(props);

        this.props.getDetail(this.props.location.state.channel, this.props.location.state.id)
        console.log("ID : " + this.props.location.state.id)
    }


    render() {
        let detail = this.props.detail || {}
        // let genre = this.props.detail.genres || []
        console.log("DATA", this.props.detail)
        return (
            <div  id="container-detail-item" style={{

                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"}}>

                <div >
                    <Row >
                        <Col>
                            <img
                                id="imag"
                                src={IMG_URL + detail.poster_path}/>
                        </Col>
                        <Col>
                            <div>
                                <h4>{detail.title || detail.name}</h4>
                            </div>
                            {/*<div>*/}
                            {/*    {genre.map((genres) => (*/}
                            {/*        <p>*/}
                            {/*            {genre.name}*/}
                            {/*        </p>*/}
                            {/*    ))}*/}
                            {/*</div>*/}
                            <div>
                                <p>{detail.overview}</p>
                            </div>
                            <div>
                                <p style={{fontStyle:"italic"}}>"{detail.tagline}"</p>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        detail : state.getDetailReducer.detail,
        isLoading : state.getDetailReducer.isLoading,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getDetail : (channel , movie_id) => dispatch(getDetail(channel, movie_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
