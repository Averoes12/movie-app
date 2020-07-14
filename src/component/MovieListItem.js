import React, {Component} from "react";
import {IMG_URL} from "../constant/constant";
import '../screen/Home.css'
import {parseDate} from "../utils/parseDate";
import {Link} from "react-router-dom";

class MovieListItem extends Component {
    render() {
        const source = this.props.results
        return (
            <ul id="container-movie-item">
                {source.map((results) => (
                    <li id="container-item">
                        <Link to={{
                            pathname:"/detail",
                            state:{
                                channel: "movie",
                                id: results.id,
                            }
                        }}>
                        <img
                            width={171}
                            height={180}
                            style={{borderTopLeftRadius: 9, borderTopRightRadius: 9}}
                            src={IMG_URL + results.poster_path}

                        />
                        </Link>
                        <p>{results.title}</p>
                        <p>{parseDate(results.release_date)}</p>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MovieListItem
