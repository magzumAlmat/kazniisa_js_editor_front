
import React, { useMemo, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact, useSelected, useFocused } from 'slate-react';

const initialValue = [
  { type: 'paragraph', children: [{ text: '' }] },
];

// Copied from DocumentEditor
const Element = (props) => {
    const { attributes, children, element } = props;
    const style = { textAlign: element.align };
    switch (element.type) {
        case 'heading-one':
            return <h1 style={style} {...attributes}>{children}</h1>;
        case 'heading-two':
            return <h2 style={style} {...attributes}>{children}</h2>;
        case 'heading-three':
            return <h3 style={style} {...attributes}>{children}</h3>;
        case 'code-block':
            return <pre style={{ ...style, background: '#f4f4f4', padding: '12px', borderRadius: '6px', fontFamily: 'monospace', overflowX: 'auto' }} {...attributes}><code>{children}</code></pre>;
        case 'block-quote':
            return <blockquote style={{ ...style, borderLeft: '4px solid #007bff', paddingLeft: '16px', margin: '16px 0', color: '#555' }} {...attributes}>{children}</blockquote>;
        case 'image':
            return <Image {...props} />;
        default:
            return <p style={style} {...attributes}>{children}</p>;
    }
};

// Copied from DocumentEditor
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.code) children = <code style={{ background: '#eee', padding: '2px 4px', borderRadius: '3px', fontSize: '90%' }}>{children}</code>;
  return <span {...attributes}>{children}</span>;
};

// Copied from DocumentEditor
const Image = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          alt={element.alt}
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '20em',
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
          }}
        />
      </div>
      {children}
    </div>
  )
}


const NewsViewer = ({ newsArticle }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const getInitialState = () => {
    try {
      const content = typeof newsArticle.document_content === 'string'
        ? JSON.parse(newsArticle.document_content)
        : newsArticle.document_content;

      if (Array.isArray(content) && content.length > 0 && content[0]?.children) {
        return content;
      }
    } catch (e) {
        console.error("Failed to parse document content:", e);
    }
    return initialValue;
  };

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <div className="container">
        <h2>{newsArticle.document_name}</h2>
        <Slate editor={editor} initialValue={getInitialState()}>
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                readOnly
            />
        </Slate>
    </div>
  );
};

export default NewsViewer;
