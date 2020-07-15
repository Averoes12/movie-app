import React, {Component} from "react";
import {IMG_URL} from "../constant/constant";
import '../screen/Home.css'
import {Link} from "react-router-dom";

export default class TvGridItem extends Component {

    render() {
        const source = this.props.results;
        return (
            <div id="container-grid-item" >
                {source.map((results) => (
                    <div id="container-item">
                        <Link to={{
                            pathname:"/"+results.name,
                            state:{
                                channel: "tv",
                                id: results.id,
                            }
                        }}>
                        <img
                            width={171}
                            height={180}
                            src={IMG_URL + results.poster_path}
                            alt="movie-grid-item"

                        />
                        </Link>
                        <p>{results.name}</p>
                    </div>
                ))}
            </div>
        )
    }

}
