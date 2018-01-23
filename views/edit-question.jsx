var React = require('react');
var DefaultLayout = require('./layouts/default-layout');
var AddStubForm = require('./add-stub/add-stub-form');
var Navigaton = require('./navigation/index');


class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <Navigaton data={this.props.nav}></Navigaton>
                <AddStubForm></AddStubForm>
            </DefaultLayout>
        );
    }
}

module.exports = indexPage;