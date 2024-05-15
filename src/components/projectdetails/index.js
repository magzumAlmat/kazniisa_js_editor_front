import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectDocumentsAction } from "@/store/slices/authSlice";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import DocumentEditor from "@/components/documenteditor";
import CreateDocument from "@/components/createdocument";
import ButtonGroup from '@mui/material/ButtonGroup';
import { color } from "@mui/system";
import Divider from '@mui/material/Divider';
export default function ProjectDetails({ projectId }) {
  const allProjectDocuments = useSelector((state) => state.auth.allDocuments);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
  const dispatch = useDispatch();

  console.log(allProjectDocuments);

  useEffect(() => {
    dispatch(getAllProjectDocumentsAction(projectId));
  }, [dispatch, projectId]);

  useEffect(() => {
    if (allProjectDocuments && allProjectDocuments.length > 0) {
      setSelectedDocument(allProjectDocuments[0]);
    }
  }, [allProjectDocuments]);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  console.log("1/1/1/1", selectedDocument);

  const handleDocumentClick = (document) => {
    // Переключаем активное состояние на выбранный документ
    setSelectedDocument(document);
    setSelectedDocumentId(document.id);
  };

  return (
    <div>
      {/* Document list and + button */}
      <div className="d-flex gap-4" >
        <Button
         
          type="button"
          onClick={handleOpenCreateModal}
         
        >
          Создать Документ
        </Button>
        
        {/* <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          > */}
        <Divider orientation="vertical" flexItem />
        
        <div >
        {allProjectDocuments.map((document, index) => (
      
            <Button
          
              key={document.id} // Лучше использовать уникальный id, если он доступен
              onClick={() => handleDocumentClick(document)}
              className={`btn btn-primary ${
                selectedDocumentId === document.id ? "active" : ""
              }`}
            >
              {document.document_name}
            </Button>
            
        
          
        ))}
</div>
        
        {/* </ButtonGroup> */}
      </div>
      <br/>

      {/* Editor - Conditionally rendered */}
      {selectedDocument ? (
        <DocumentEditor key={selectedDocument.id} document={selectedDocument} />
      ) : (
        <div
          style={{
            height: "70vh",
          }}
          className="d-flex align-items-center justify-content-center"
        >
          Документов нет, нажмите на кнопку + чтобы создать документ
        </div>
      )}

      {/* Create Document Modal */}
      <Modal
        open={openCreateModal}
        onClose={handleCloseCreateModal}
        aria-labelledby="create-document-title"
        aria-describedby="create-document-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <CreateDocument
            projectId={projectId}
            handleClose={handleCloseCreateModal}
          />
        </Box>
      </Modal>
    </div>
  );
}
