import React from 'react';

// staticContext exists only on the server
const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>Ooops, route not found.</h1>
};

export default {
    component: NotFoundPage
};