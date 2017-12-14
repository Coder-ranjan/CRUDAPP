import React from 'react';
import {connect} from "react-redux";
import {fetchDataById, setBookState, update} from "../actions/index";

class Edit extends React.Component {
    componentDidMount() {
        const {params} = this.props;
        this.props.fetchDataById(params.id);
    }

    doSomethingForTitle(event) {
        const {data} = this.props;
        let book = {
            id: data.id,
            title: event.target.value,
            Author: data.Author
        };
        this.props.setBookState(book);
    }

    doSomethingForAuthor(event) {
        const {data} = this.props;
        let book = {
            id: data.id,
            title: data.title,
            Author: event.target.value,
        };
        this.props.setBookState(book);
    }

    render() {
        const {data} = this.props;
        let book = {
            id: '',
            title: '',
            author: ''
        };
        if (data) {
            book = {
                id: data.id,
                title: data.title,
                author: data.Author
            }
        }

        return (
            <div>
                <div className="container">
                    <h2>Edit Book form</h2>
                    <form onSubmit={(event) => this.onSubmitClick(event)}>
                        <div className="form-group">
                            <label htmlFor="title">Title :</label>
                            <input type="text" className="form-control" value={book.title ? book.title : ''}
                                   onChange={event => this.doSomethingForTitle(event)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author :</label>
                            <input type="text" className="form-control" value={book.author ? book.author : ''}
                                   onChange={event => this.doSomethingForAuthor(event)}/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

    onSubmitClick(event) {
        event.preventDefault();
        const {data} = this.props;
        this.props.update(data);
    }
}

function mapStateToProps(state) {
    const {crud_Books} = state;
    return {
        data: crud_Books.book
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataById: bookId => dispatch(fetchDataById(bookId)),
        setBookState: book => dispatch(setBookState(book)),
        update: book => dispatch(update(book))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);