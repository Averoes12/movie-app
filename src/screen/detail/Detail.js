import React, {Component} from "react";
import {getDetail} from "../../actions/DetailAction";
import {connect} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {DEFAULT_FLAG, DEFAULT_IMG_COMPANIES, IMG_URL} from "../../constant/constant";
import './Detail.css'
import Rating from "react-rating";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faHeart} from "@fortawesome/free-solid-svg-icons";

class Detail extends Component {
    constructor(props) {
        super(props);

        this.props.getDetail(this.props.location.state.channel, this.props.location.state.id)
        console.log("ID : " + this.props.location.state.id)
    }


    render() {
        let detail = this.props.detail || {}
        let genre = detail.genres || []
        let product_companies = detail.production_companies || []
        let language = detail.spoken_languages || []
        console.log("GENRE", genre)
        return (
            <div>
                <div id="content-container">
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <img
                                        id="imag"
                                        src={IMG_URL + detail.poster_path}
                                        alt="poster-path"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div id="title">
                                    <h4>{detail.title || detail.name}</h4>
                                </div>
                                <div>
                                    {genre.map((genres =>
                                            <ul id="genres">
                                                <li id="genres-item">{genres.name}</li>
                                            </ul>
                                    ))}
                                </div>
                                {detail.runtime === undefined ? <></> :
                                    <div id="runtime">
                                    <FontAwesomeIcon icon={faClock}/>
                                    <p>{detail.runtime}m</p>
                                </div>}

                                <div id="rating">
                                    <Rating
                                        initialRating={detail.vote_average / 2}
                                        readonly={true}
                                        emptySymbol={
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                color="grey"
                                                size="sm"
                                            />
                                        }
                                        fullSymbol={
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                color="#f44336"
                                                size="sm"
                                            />
                                        }
                                    />
                                    <p>{detail.vote_average}</p>
                                </div>
                                <div>
                                    <p>{detail.overview}</p>
                                </div>
                                <div>
                                    <p style={{fontStyle: "italic"}}>
                                        {detail.tagline === undefined || null || "" ? "" : '"' + detail.tagline + '"'}
                                    </p>
                                </div>
                                <div>
                                    <h4>Language</h4>
                                    {language.map(country => (
                                        <ul id="companies">
                                            <li>
                                                <div style={{textAlign: 'center'}}>
                                                    <img
                                                        alt="flag-country"
                                                        width={30}
                                                        height={30}
                                                        src={country.iso_639_1 === "en"
                                                            ? DEFAULT_FLAG
                                                            : "https://www.countryflags.io/" + country.iso_639_1 + "/shiny/64.png"
                                                        }
                                                    />
                                                    <p>{country.name || detail.original_language}</p>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container id="product-container">
                    <h4>Production Companies</h4>
                    {product_companies.map((companies =>
                            <ul id="companies">
                                <li>
                                    <div id="companies-item">
                                        <img
                                            width={100}
                                            height={100}
                                            src={companies.logo_path === null || undefined
                                                ? DEFAULT_IMG_COMPANIES
                                                : IMG_URL + companies.logo_path}
                                            alt="logo-path"
                                        />
                                        <p style={{marginTop: 10}}>{companies.name}</p>

                                    </div>
                                </li>
                            </ul>
                    ))}
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        detail: state.getDetailReducer.detail,
        isLoading: state.getDetailReducer.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetail: (channel, movie_id) => dispatch(getDetail(channel, movie_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
