var React = require('react');
var DefaultLayout = require('./layouts/default-layout');
var FindStub = require('./update-stub/find-stub-form');
var UpdateStubForm = require('./update-stub/update-stub-form');
var Navigation = require('./navigation/index');


class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <Navigation></Navigation>
                <div className="container">
                    <h1>Search a stub</h1>
                    <FindStub></FindStub>

                    <h1>Update a stub</h1>
                    <UpdateStubForm></UpdateStubForm>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = indexPage;