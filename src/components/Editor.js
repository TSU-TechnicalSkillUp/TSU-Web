import React from 'react';
import {
    Container,
} from '@material-ui/core';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';

const toastEditor = () => {
    // const [] = useState();
    const editorRef = React.createRef();
    
    return (
        <Container fixed>
            <Editor
            previewStyle="vertical"
            height='400px'
            initialEditType="markdown"
            initialValue="wellcome"
            ref={editorRef}
            />
        </Container>
    );
}

export default toastEditor;