var React = require('react');
var Navigation = require('../navigation/index');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Ula la lla la la e leo</title>
                    <link rel="stylesheet" href="/css/bootstrap.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                </head>
                <body>
                    <Navigation></Navigation>

                    <div className="container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
