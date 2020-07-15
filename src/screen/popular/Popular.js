import React, {Component} from "react";
import {getPopular} from "../../actions/MovieAction";
import {connect} from "react-redux";
import MovieListItem from "../../component/MovieListItem";
import './Popular.css'
import MovieGridItem from "../../component/MovieGridItem";


class Popular extends Component{

    constructor(props) {
        super(props);

        this.props.getPopular();
    }

    render() {
        const popular = this.props.popular;

        return(
            <div>
                <div>
                    <div id="container">
                        <h4 id="label-grid">Popular Movie</h4>
                        <hr/>
                    </div>
                    <MovieGridItem results={popular} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    popular: state.getMovieReducer.popular
})

const mapDispatchToProps = dispatch =>({
    getPopular : () => dispatch(getPopular())
})

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
