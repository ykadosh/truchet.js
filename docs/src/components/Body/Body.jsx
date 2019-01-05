import React from 'react';
import parser from 'html-react-parser';
import Example from '../Example/Example';
import snippets from '../../content/snippets';
import docs from '../../content/docs.md';
import './Body.scss';

export default class Body extends React.PureComponent {
    render() {
        return (
            <div className='body'>
                {parser(docs, {replace: ({attribs, name, children}) => {
                    if (name === 'example') {
                        return <Example code={children[0].data} render={snippets.find(({id}) => id == attribs.id).render}/>
                    }
                }})}
            </div>
        );
    }
}