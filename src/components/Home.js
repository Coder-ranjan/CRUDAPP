import React from 'react';
import {ListItem} from "./ListItem";
import {Link} from 'react-router';
import {fetchData} from "../actions/index";
import {connect} from "react-redux";

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {data} = this.props;
        const{isLoading} = this.props;
        if(isLoading || isLoading === undefined){
            return (
                <div className="loader"/>
            );
        }
        let books = [];
        if (data) {
            books = data.map(book => {
                return (
                    <ListItem key={book.id} {...book}/>
                )
            })
        }
        return (
            <div style={{marginLeft: "10%"}}>
                <div>
                    <Link className="btn btn-primary" to='/create'>Create</Link>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>AUTHOR</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>{books}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {fetch_Books} = state;
    return {
        data: fetch_Books.data,
        isLoading:fetch_Books.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch((fetchData()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);