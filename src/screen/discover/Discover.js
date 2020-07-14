import React, {Component} from "react";
import {getDiscover} from "../../actions/MovieAction";
import {connect} from "react-redux";
import '../popular/Popular.css'
import MovieGridItem from "../../component/MovieGridItem";


class Discover extends Component {

    constructor(props) {
        super(props);

        this.props.getDiscover();
    }

    render() {
        const discover = this.props.discover;

        return (
            <div>
                <div>
                    <div>
                        <h4 id="label-grid">Discover Movie</h4>
                        <hr/>
                    </div>
                    <MovieGridItem results={discover}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    discover: state.getMovieReducer.discover
})

const mapDispatchToProps = dispatch => ({
    getDiscover: () => dispatch(getDiscover())
})

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
