import React from 'react';

import { WebView } from 'react-native-webview';

const web_view = (props) => {
    return <WebView source={{ uri: props.route.params.uri }} style={{ marginTop: 20 }} />;
}

export default web_view;