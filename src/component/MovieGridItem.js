import React, {Component} from "react";
import {IMG_URL} from "../constant/constant";
import '../screen/Home.css'
import {parseDate} from "../utils/parseDate";
import {Link} from "react-router-dom";

export default class MovieGridItem extends Component {

    render() {
        const source = this.props.results;
        return (
            <div id="container-grid-item">
                {source.map((results) => (
                    <div id="container-item">
                        <Link to={{
                            pathname: "/"+results.title,
                            state: {
                                channel: "movie",
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
                        <p>{results.title}</p>
                        <p>{parseDate(results.release_date)}</p>
                    </div>
                ))}
            </div>
        )
    }

}
