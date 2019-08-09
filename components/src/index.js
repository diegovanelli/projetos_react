import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import AppovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <AppovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    time="01/03/2018"
                    comment={faker.lorem.paragraph(1)}
                    avatar={faker.image.avatar()}
                />
            </AppovalCard>
            <AppovalCard>

                <CommentDetail
                    author={faker.name.firstName()}
                    time="01/03/2018"
                    comment={faker.lorem.paragraph(1)}
                    avatar={faker.image.avatar()}
                />
            </AppovalCard>
            <AppovalCard>
                <CommentDetail
                    author={faker.name.firstName()}
                    time="01/03/2018"
                    comment={faker.lorem.paragraph(1)}
                    avatar={faker.image.avatar()}
                />
            </AppovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));