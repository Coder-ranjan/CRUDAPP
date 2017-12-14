import React, {Component} from 'react';
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {deleteBookById} from "../actions/index";

class Delete extends Component {

    onSubmitClick(event) {
        event.preventDefault();
        const {params} = this.props;
        this.props.deleteBookById(params.id);
    }

    onCancleClick(event){
        browserHistory.push("/");
    }

    render() {
        return (
            <div style={{marginLeft:"10%"}}>
                <h2>Delete Book form</h2>
                <div>
                    <h3 style={{color: "red"}}>Are you sure want to delete this book?</h3>
                    <form onSubmit={(event) => this.onSubmitClick(event)}>
                        <button type="submit">Yes</button>
                        <button type="button" onClick={(event) => this.onCancleClick(event)}>No</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBookById: bookId => dispatch(deleteBookById(bookId))
    };
};

export default connect(null , mapDispatchToProps)(Delete);