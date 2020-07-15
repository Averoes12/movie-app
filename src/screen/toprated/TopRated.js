import React, {Component} from "react";
import {getPopular, getTopRated} from "../../actions/MovieAction";
import {connect} from "react-redux";
import '../popular/Popular.css'
import MovieGridItem from "../../component/MovieGridItem";


class TopRated extends Component {

    constructor(props) {
        super(props);

        this.props.getTopRated()
    }

    render() {
        const top = this.props.top;

        return (
            <div>
                <div>
                    <div id="container">
                        <h4 id="label-grid">Top Rated Movie</h4>
                        <hr/>
                    </div>
                    <MovieGridItem results={top}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    top: state.getMovieReducer.top
})

const mapDispatchToProps = dispatch => ({
    getTopRated: () => dispatch(getTopRated())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopRated);
