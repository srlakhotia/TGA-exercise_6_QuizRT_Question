var React = require('react');
var DefaultLayout = require('./layouts/default-layout');
var AddStubForm = require('./add-question/add-stub-form');


class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <AddStubForm></AddStubForm>
            </DefaultLayout>
        );
    }
}

module.exports = indexPage;