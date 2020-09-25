import React from 'react';

export default (props) =>
    <div className={props.className}>
        <h4 className="font-bold mb-1 hidden md:block">{props.project}</h4>
        <h4 className="font-bold mb-1 md:hidden">{`${props.project} - ${props.date}`}</h4>
        <p className="mb-3">{props.role}</p>
        <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
    </div>