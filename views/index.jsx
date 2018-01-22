var React = require('react');
var DefaultLayout = require('./layouts/default-layout');
var AddStubForm = require('./add-question/add-stub-form');
var Navigation = require('./navigation/index');

class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <Navigation></Navigation>
                <div className="container">
                    <AddStubForm></AddStubForm>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = indexPage;