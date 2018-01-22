var React = require('react');

class NavBar extends React.Component {
    render (){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/add-stub">Add Stub</a></li>
                        <li><a href="/update-stub">Update Stub</a></li>
                        <li><a href="/edit-question">Edit Question</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

module.exports = NavBar;
