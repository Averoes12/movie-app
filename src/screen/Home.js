import React, {Component} from "react";
import {getDiscover, getNowPlaying, getTrendingDay, getTrendingWeek} from "../actions/MovieAction";
import {connect} from "react-redux";
import "./Home.css";
import {Tabs} from "@feuer/react-tabs";
import MovieListItem from "../component/MovieListItem";

class Home extends Component {
    constructor(props) {
        super(props);

        this.props.getUpcoming()
        this.props.getNowPlaying();
        this.props.getTrendingDay();
        this.props.getTrendingWeek();

    }

    render() {
        const discover = this.props.discover;
        const nowPlaying = this.props.nowPlaying;
        const day = this.props.day;
        const week = this.props.week;


        return (
            <div id="home-container">
                <div>
                    <h4 id="label">Discover Movie</h4>
                    <MovieListItem results={discover} />
                </div>
                <div>
                    <h4 id="label">Now Playing Movie</h4>
                    <MovieListItem results={nowPlaying} />
                </div>
                <div>
                    <h4 id="label">Trending Movie</h4>
                    <Tabs
                        activeTab={{
                        id:"day"
                    }}>
                        <Tabs.Tab title="Day" id="day" >
                            <>
                                <MovieListItem results={day} />
                            </>
                        </Tabs.Tab>
                        <Tabs.Tab title="Week" id="week">
                            <>
                                <MovieListItem results={week} />
                                </>
                        </Tabs.Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    discover: state.getMovieReducer.discover,
    nowPlaying: state.getMovieReducer.nowPlaying,
    day: state.getMovieReducer.day,
    week: state.getMovieReducer.week,
    isLoading: state.getMovieReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    getUpcoming: () => dispatch(getDiscover()),
    getNowPlaying: () => dispatch(getNowPlaying()),
    getTrendingDay: () => dispatch(getTrendingDay()),
    getTrendingWeek: () => dispatch(getTrendingWeek()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
