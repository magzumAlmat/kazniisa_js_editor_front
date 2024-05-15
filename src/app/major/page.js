"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUserProjectsAction,
  addProjectAction,
  getAllAdminTemplateAction,
} from "@/store/slices/authSlice";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import leftArrow from "@/../../public/icons/arrow-left-solid.svg";
import Image from "next/image";

import dynamic from 'next/dynamic';

const ProjectRender = dynamic(() => import('@/components/projectrender'), { ssr: false });
const ProjectDetails = dynamic(() => import('@/components/projectdetails'), { ssr: false });

import jwt_decode from "jwt-decode";

export default function page() {
  const allUserProjects = useSelector((state) => state.auth.allProjects);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [decoded, setDecoded] = useState(null);

  console.log(decoded);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  useEffect(() => {
    dispatch(getAllUserProjectsAction());
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwt_decode(token);
        setDecoded(decodedToken);
        console.log(decodedToken);
      }
    }
  }, []);

  const handleOpenModal = () => {
    
    setOpenModal(true);
  };

  if (typeof window !== 'undefined') {
    // Browser-specific code
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCreateProject = async () => {
    // Add your validation logic here if needed
    if (newProjectName.trim() === "") {
      // Handle error
      return;
    }
    await dispatch(addProjectAction(newProjectName));
    handleCloseModal();
  };

  const handleBackClick = () => {
    setSelectedProjectId(null);
  };

  return (
    <>
      <div className="row">
        <div className="col-2 d-flex flex-column align-items-center justify-content-between bg-light min-vh-100">
          <h3 className="justify-content-start p-5">KazNIISA Editor v.0.1</h3>
         <div className="justify-content-end p-5">{decoded ? decoded.email : 'Loading...'}</div>

        </div>
        <div className="col-10">
          <nav className="navbar bg-light mb-4">
            <div className="container-fluid">
              {selectedProjectId ? (
                <div className="d-flex gap-3">
                  <button
                    onClick={() => handleBackClick()}
                    className="btn btn-outline-warning"
                  >
                    <Image
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      src={leftArrow}
                    />
                  </button>
                  <div className="d-flex align-items-center">Документ</div>
                </div>
              ) : (
                <>
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    onClick={handleOpenModal}
                  >
                    + Создать Проект
                  </button>

                  <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
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
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Новый проект
                      </Typography>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Название проекта"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newProjectName}
                        onChange={(e) => setNewProjectName(e.target.value)}
                      />
                      <Button onClick={handleCreateProject} color="primary">
                        Создать
                      </Button>
                    </Box>
                  </Modal>
                </>
              )}
            </div>
          </nav>

          <div className="row">
            {selectedProjectId ? (
              <ProjectDetails projectId={selectedProjectId} />
            ) : (
              <ProjectRender
                allProjects={allUserProjects}
                onProjectClick={handleProjectClick}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
