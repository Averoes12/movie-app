import React, {Component} from "react";
import {getUpcoming} from "../../actions/MovieAction";
import {connect} from "react-redux";
import '../popular/Popular.css'
import MovieGridItem from "../../component/MovieGridItem";


class Upcoming extends Component {

    constructor(props) {
        super(props);

        this.props.getUpcoming();
    }

    render() {
        const upcoming = this.props.upcoming;

        return (
                <>
                    <div id="container">
                        <h4 id="label-grid">Upcoming Movie</h4>
                        <hr/>
                    </div>
                    <MovieGridItem results={upcoming}/>
                </>
        )
    }
}

const mapStateToProps = state => ({
    upcoming: state.getMovieReducer.upcoming
})

const mapDispatchToProps = dispatch => ({
    getUpcoming: () => dispatch(getUpcoming())
})

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
