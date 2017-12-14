import React from 'react';
import { Link } from 'react-router';

export class ListItem extends React.Component {
    render(){
        const {id,title,Author} = this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{Author}</td>
                <td>
                    <Link className="btn btn-primary" to={"/edit/" + id}>Edit</Link>
                    <Link className="btn btn-danger" to={"/delete/" + id}>Delete</Link>
                </td>
            </tr>
        )
    }
}