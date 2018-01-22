var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Ula la lla la la e leo</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                          crossorigin="anonymous"></link>
                </head>
                <body>
                    <div className="container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
