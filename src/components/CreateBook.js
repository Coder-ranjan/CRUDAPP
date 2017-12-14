import React from 'react';
import {connect} from "react-redux";
import {create} from "../actions/index";

class CreateBook extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <h2>Create Book form</h2>
                    <form onSubmit={(event) => this.onSubmitClick(event)}>
                        <div className="form-group">
                            <label htmlFor="title">Title :</label>
                            <input type="text" className="form-control" ref="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author :</label>
                            <input type="text" className="form-control" ref="author"/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

    onSubmitClick(event){
        event.preventDefault();
        const title_ref = this.refs.title;
        const title = title_ref.value;

        const author_ref = this.refs.author;
        const author = author_ref.value;

        let obj = { "title": title,"Author": author};
        this.props.create(obj);
    }
}

export default connect(null, {create})(CreateBook);