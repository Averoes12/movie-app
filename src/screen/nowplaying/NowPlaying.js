import React, {Component} from "react";
import {getNowPlaying} from "../../actions/MovieAction";
import {connect} from "react-redux";
import '../popular/Popular.css'
import MovieGridItem from "../../component/MovieGridItem";


class NowPlaying extends Component {

    constructor(props) {
        super(props);

        this.props.getNowPlaying()
    }

    render() {
        const nowPlaying = this.props.nowPlaying;

        return (
            <div>
                <div>
                    <div>
                        <h4 id="label-grid">Now Playing Movie</h4>
                        <hr/>
                    </div>
                    <MovieGridItem results={nowPlaying}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    nowPlaying: state.getMovieReducer.nowPlaying
})

const mapDispatchToProps = dispatch => ({
    getNowPlaying: () => dispatch(getNowPlaying())
})

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
