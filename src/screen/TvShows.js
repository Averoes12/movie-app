import React, {Component} from "react";
import {connect} from "react-redux";
import './popular/Popular.css'
import MovieGridItem from "../component/MovieGridItem"
import {getTv} from "../actions/TvActions";
import TvGridItem from "../component/TvGridItem";


class TvShows extends Component{

    constructor(props) {
        super(props);

        this.props.getTvShows();
    }

    render() {
        const tv = this.props.tv;

        return(
            <div>
                <div>
                    <div>
                        <h4 id="label-grid">Tv Shows</h4>
                        <hr/>
                    </div>
                    <TvGridItem results={tv} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    tv: state.getTvReducer.tv
})

const mapDispatchToProps = dispatch =>({
    getTvShows : () => dispatch(getTv())
})

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
