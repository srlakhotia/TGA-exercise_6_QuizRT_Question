var React = require('react');

class NavBar extends React.Component {

    render (){

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Question Bank</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className={this.props.data.selectedNode === "add-stub" ? "active" : "" }>
                            <a href="/add-stub">Add Stub</a>
                        </li>
                        <li className={this.props.data.selectedNode === "update-stub" ? "active" : "" }>
                            <a href="/update-stub">Update Stub</a>
                        </li>
                        <li className={this.props.data.selectedNode === "edit-question" ? "active" : "" }>
                            <a href="/edit-question">Edit Question</a>
                        </li>
                        <li className={this.props.data.selectedNode === "data-event-mocking" ? "active" : "" }>
                            <a href="/data-mocking">Data/Event Mocking</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = NavBar;
