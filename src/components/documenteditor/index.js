// // DocumentEditor Component
// // A placeholder for whatever editor you're using

// import React, { useEffect, useRef, useState } from "react";

// import Header from "@editorjs/header";
// import RawTool from "@editorjs/raw";
// import SimpleImage from "@editorjs/simple-image";
// import Checklist from "@editorjs/checklist";
// import List from "@editorjs/list";
// import Embed from "@editorjs/embed";
// import Quote from "@editorjs/quote";
// import Table from "@editorjs/table";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteDocumentAction,
//   getDocumentByIdAction,
//   updateDocumentContentAction,
// } from "@/store/slices/authSlice";

// import dynamic from "next/dynamic";
// const EditorJS = dynamic(() => import('@editorjs/editorjs'), { ssr: false });

// export default function DocumentEditor({ document }) {
//   const [doc, setDoc] = useState(null);
//   const [content, setContent] = useState(null);
//   console.log(document);
//   const idDoc = document.id;
//   const ejInstance = useRef(null);
//   const currentDocument = useSelector((state) => state.auth.currentDocument);
//   const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch(getDocumentByIdAction(idDoc));
//   }, [dispatch]);

//   useEffect(() => {
//     setDoc(currentDocument);
//     if (doc != null && ejInstance.current === null) {
//       initEditor();
//     }
//   }, [currentDocument]);

//   const initEditor = () => {
//     const editor = new EditorJS({
//       holder: "editorjs",
//       autofocus: true,
//       data: currentDocument.document_content,
//       onChange: async () => {
//         let updatedContent = await editor.saver.save();
//         console.log(updatedContent);
//         setContent(updatedContent);
//       },
//       tools: {
//         header: {
//           class: Header,
//           config: {
//             placeholder: "Enter a header",
//             levels: [1, 2, 3, 4],
//             defaultLevel: 1,
//           },
//         },
//         raw: RawTool,
//         image: SimpleImage,
//         checklist: {
//           class: Checklist,
//           inlineToolbar: true,
//         },
//         list: {
//           class: List,
//           inlineToolbar: true,
//           config: {
//             defaultStyle: "unordered",
//           },
//         },
//         embed: {
//           class: Embed,
//           config: {
//             services: {
//               youtube: true,
//               coub: true,
//             },
//           },
//         },
//         quote: Quote,
//         table: {
//           class: Table,
//           inlineToolbar: true,
//           config: {
//             rows: 2,
//             cols: 3,
//           },
//         },
//       },
//     });
//     ejInstance.current = editor;
//   };

//   const deleteClick = () => {
//     dispatch(deleteDocumentAction(currentDocument.id))
//   }

//   const handleClick = () => {
//     console.log(content);
//     dispatch(updateDocumentContentAction(currentDocument.id, content));
//   };
//   // Editor logic here
//   return (
//     <>
//       <div id="editorjs"></div>
//       <div className="d-flex gap-5">
//         <button className="btn btn-outline-success" onClick={handleClick}>
//           Сохранить
//         </button>
//         <button className="btn btn-outline-danger" onClick={deleteClick}>Удалить</button>
//       </div>
//     </>
//   );
// }





// DocumentEditor Component
// A placeholder for whatever editor you're using

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import RawTool from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Checklist from "@editorjs/checklist";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDocumentAction,
  getDocumentByIdAction,
  updateDocumentContentAction,
} from "@/store/slices/authSlice";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export default function DocumentEditor({ document }) {
  const [doc, setDoc] = useState(null);
  const [content, setContent] = useState(null);
  console.log(document);
  const idDoc = document.id;
  const ejInstance = useRef(null);
  const currentDocument = useSelector((state) => state.auth.currentDocument);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocumentByIdAction(idDoc));
  }, [dispatch]);

  useEffect(() => {
    setDoc(currentDocument);
    if (doc != null && ejInstance.current === null) {
      initEditor();
    }
  }, [currentDocument]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      autofocus: true,
      data: currentDocument.document_content,
      onChange: async () => {
        let updatedContent = await editor.saver.save();
        console.log(updatedContent);
        setContent(updatedContent);
      },
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4],
            defaultLevel: 1,
          },
        },
        raw: RawTool,
        image: SimpleImage,
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              coub: true,
            },
          },
        },
        quote: Quote,
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
      },
    });
    ejInstance.current = editor;
  };

  const deleteClick = () => {
    dispatch(deleteDocumentAction(currentDocument.id))

  }

  function SimpleAlert() {
    return (
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>
    );
  }

  const handleClick = () => {
    console.log(content);
    dispatch(updateDocumentContentAction(currentDocument.id, content));
    alert(`Данные в документе ${currentDocument.document_name    } сохранены`)
  };
  // Editor logic here
  return (
    <>
      <div  className="newGrid">
      <Stack direction="row" spacing={2}  className="noprint">
        <Button variant="contained" color="success" onClick={()=>handleClick()}>
        Сохранить
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteClick}>
        Удалить
        </Button>
      </Stack>
      </div>
     
      <br />
      <hr className="noprint" />
      <div >
      
      <div id="editorjs" className="newGrid" ></div>
      <hr className="noprint "/>
      </div>
    </>
  );
}