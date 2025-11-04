
import END_POINT from "@/components/config/index";
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { createEditor, Transforms, Editor, Text } from 'slate';
import { Slate, Editable, withReact, useSlate, useSlateStatic, useSelected, useFocused } from 'slate-react';
import { useDispatch } from 'react-redux';
import { updateDocumentContentAction, deleteDocumentAction, uploadImageAction } from '@/store/slices/authSlice';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import isHotkey from 'is-hotkey';

// Icons
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import CodeIcon from '@mui/icons-material/Code';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import ImageIcon from '@mui/icons-material/Image';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+`': 'code',
  'mod+1': 'heading-one',
  'mod+2': 'heading-two',
  'mod+3': 'heading-three',
};

const initialValue = [
  { type: 'paragraph', children: [{ text: 'Начните вводить текст...' }] },
];

const withImages = editor => {
    const { insertData, isVoid } = editor

    editor.isVoid = element => {
        return element.type === 'image' ? true : isVoid(element)
    }
    return editor
}

// The main editor component
const DocumentEditor = ({ document }) => {
  const dispatch = useDispatch();
  const editor = useMemo(() => withImages(withReact(createEditor())), []);

  const getInitialState = () => {
    try {
      const content = typeof document.document_content === 'string'
        ? JSON.parse(document.document_content)
        : document.document_content;

      if (Array.isArray(content) && content[0]?.children) {
        return content;
      }
    } catch (e) {}
    return initialValue;
  };

  const [value, setValue] = useState(getInitialState());

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const handleSave = () => {
    dispatch(updateDocumentContentAction(document.id, value));
    alert(`Документ "${document.document_name}" сохранён`);
  };

  const handleDelete = () => {
    if (window.confirm('Удалить документ?')) {
      dispatch(deleteDocumentAction(document.id));
    }
  };

  return (
    <Box sx={{ maxWidth: 960, mx: 'auto', p: 2 }}>
        <Slate editor={editor} initialValue={value} onChange={setValue}>
            {/* Control Buttons */}
            <Stack direction="row" spacing={2} sx={{ mb: 3 }} className="noprint">
                <Button variant="contained" color="success" onClick={handleSave}>
                Сохранить
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDelete}>
                Удалить
                </Button>
            </Stack>

            {/* Toolbar */}
            <Box className="noprint" sx={{ mb: 3, p: 2, backgroundColor: '#f8f9fa', borderRadius: 2, boxShadow: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <MarkButton format="bold" icon={<FormatBoldIcon />} tooltip="Жирный (Ctrl+B)" />
                <MarkButton format="italic" icon={<FormatItalicIcon />} tooltip="Курсив (Ctrl+I)" />
                <MarkButton format="code" icon={<CodeIcon />} tooltip="Код (Ctrl+`)" />
                <BlockButton format="heading-one" icon={<LooksOneIcon />} tooltip="H1 (Ctrl+1)" />
                <BlockButton format="heading-two" icon={<LooksTwoIcon />} tooltip="H2 (Ctrl+2)" />
                <BlockButton format="heading-three" icon={<Looks3Icon />} tooltip="H3 (Ctrl+3)" />
                <BlockButton format="block-quote" icon={<FormatQuoteIcon />} tooltip="Цитата" />
                <BlockButton format="code-block" icon={<CodeOffIcon />} tooltip="Код-блок" />
                <AlignmentButton align="left" icon={<FormatAlignLeftIcon />} />
                <AlignmentButton align="center" icon={<FormatAlignCenterIcon />} />
                <AlignmentButton align="right" icon={<FormatAlignRightIcon />} />
                <InsertImageButton />
            </Box>

            {/* Editor */}
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder="Введите текст..."
                onKeyDown={event => {
                    for (const hotkey in HOTKEYS) {
                    if (isHotkey(hotkey, event)) {
                        event.preventDefault();
                        const format = HOTKEYS[hotkey];
                        if (['bold', 'italic', 'code'].includes(format)) {
                        toggleMark(editor, format);
                        } else {
                        toggleBlock(editor, format);
                        }
                    }
                    }
                }}
                style={{
                    minHeight: '400px',
                    padding: '16px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    fontSize: '16px',
                    lineHeight: '1.6',
                }}
            />
        </Slate>
    </Box>
  );
};

// Helper Functions
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  Transforms.setNodes(
    editor,
    { type: isActive ? 'paragraph' : format },
    { match: n => Editor.isBlock(editor, n) }
  );
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const toggleAlignment = (editor, align) => {
    Transforms.setNodes(
        editor,
        { align },
        { match: n => Editor.isBlock(editor, n) }
    );
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, { match: n => n.type === format });
  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const insertImage = (editor, url) => {
  const text = { text: '' }
  const image = { type: 'image', url, children: [text] }
  Transforms.insertNodes(editor, image)
}

// Element & Leaf Components
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

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) children = <strong>{children}</strong>;
  if (leaf.italic) children = <em>{children}</em>;
  if (leaf.code) children = <code style={{ background: '#eee', padding: '2px 4px', borderRadius: '3px', fontSize: '90%' }}>{children}</code>;
  return <span {...attributes}>{children}</span>;
};

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

// Toolbar Button Components
const MarkButton = ({ format, icon, tooltip }) => {
  const editor = useSlate();
  return (
    <Button
      variant={isMarkActive(editor, format) ? 'contained' : 'outlined'}
      size="small"
      onMouseDown={e => { e.preventDefault(); toggleMark(editor, format); }}
      title={tooltip}
      sx={{ minWidth: 'auto', p: 1 }}
    >
      {icon}
    </Button>
  );
};

const BlockButton = ({ format, icon, tooltip }) => {
  const editor = useSlate();
  return (
    <Button
      variant={isBlockActive(editor, format) ? 'contained' : 'outlined'}
      size="small"
      onMouseDown={e => { e.preventDefault(); toggleBlock(editor, format); }}
      title={tooltip}
      sx={{ minWidth: 'auto', p: 1 }}
    >
      {icon}
    </Button>
  );
};

const AlignmentButton = ({ align, icon }) => {
    const editor = useSlate();
    return (
        <Button
            size="small"
            onMouseDown={e => { e.preventDefault(); toggleAlignment(editor, align); }}
            sx={{ minWidth: 'auto', p: 1 }}
        >
            {icon}
        </Button>
    );
};

const InsertImageButton = () => {
  const editor = useSlateStatic();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const relativeUrl = await dispatch(uploadImageAction(file));
      if (relativeUrl) {
        const absoluteUrl = `${END_POINT}${relativeUrl}`;
        insertImage(editor, absoluteUrl);
      } else {
        alert("Image upload failed.");
      }
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button
        onMouseDown={event => {
          event.preventDefault();
          fileInputRef.current.click();
        }}
        size="small"
        sx={{ minWidth: 'auto', p: 1 }}
      >
        <ImageIcon />
      </Button>
    </>
  );
};

export default DocumentEditor;
