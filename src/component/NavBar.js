import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../screen/Home";
import Popular from "../screen/popular/Popular";
import Discover from "../screen/discover/Discover";
import Upcoming from "../screen/upcoming/Upcoming";
import NowPlaying from "../screen/nowplaying/NowPlaying";
import TopRated from "../screen/toprated/TopRated";
import Trending from "../screen/trending/Trending";
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@reach/tabs";
import '@reach/tabs/styles.css'
import TvShows from "../screen/TvShows";
import Detail from "../screen/detail/Detail";

export class NavBar extends Component {
    render() {
        return (
            <Router>
                <div id="navbar">
                    <Tabs>
                        <TabList>
                            <Tab>
                                <Link to="/">Movie App</Link>
                            </Tab>
                            <Tab>
                                <div className="dropdown">
                                    <p className="dropbtn">Dropdown</p>
                                    <div className="dropdown-content">
                                        <Link to="/popular">Popular</Link>
                                        <Link to="/trending">Trending</Link>
                                        <Link to="/discover">Discover</Link>
                                        <Link to="/nowplaying">Now Playing</Link>
                                        <Link to="/toprated">Top Rated</Link>
                                        <Link to="/upcoming">Upcoming</Link>
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <Link to="/tvshows">Tv Shows</Link>
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>

                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/popular">
                        <Popular/>
                    </Route>
                    <Route exact path="/discover">
                        <Discover/>
                    </Route>
                    <Route exact path="/upcoming">
                        <Upcoming/>
                    </Route>
                    <Route exact path="/nowplaying">
                        <NowPlaying/>
                    </Route>
                    <Route exact path="/toprated">
                        <TopRated/>
                    </Route>
                    <Route exact path="/trending">
                        <Trending/>
                    </Route>
                    <Route exact path="/tvshows">
                        <TvShows/>
                    </Route>
                    <Route path="/:id" component={Detail}/>
                </Switch>
            </Router>
        )
    }

}
