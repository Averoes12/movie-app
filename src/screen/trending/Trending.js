import React, {Component} from "react";
import {getTrendingDay, getTrendingWeek} from "../../actions/MovieAction";
import {connect} from "react-redux";
import '../popular/Popular.css'
import MovieGridItem from "../../component/MovieGridItem";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@reach/tabs";
import "@reach/tabs/styles.css";


class Trending extends Component {

    constructor(props) {
        super(props);

        this.props.getTrendingDay();
        this.props.getTrendingWeek();
    }

    render() {
        const day = this.props.day;
        const week = this.props.week;

        return (
            <div id="container">
                <h4 id="label-grid">Trending Movie</h4>
                <Tabs>
                    <TabList>
                        <div id="tabs">
                            <Tab>Day</Tab>
                            <Tab>Week</Tab>
                        </div>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <MovieGridItem results={day}/>
                        </TabPanel>
                        <TabPanel>
                            <MovieGridItem results={week}/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    day: state.getMovieReducer.day,
    week: state.getMovieReducer.week,
})

const mapDispatchToProps = dispatch => ({
    getTrendingDay: () => dispatch(getTrendingDay()),
    getTrendingWeek: () => dispatch(getTrendingWeek())
})

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
