import React from "react";
import {
  TextField,
  Container,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Row, Col, Label } from "reactstrap";
import { addProjectAction } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";



export default function AddProject() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [projectName, setProjectName] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const [serverError, setServerError] = useState("");
  const errorFromSlice = useSelector((state) => state.auth.error);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "projectName":
        setProjectName(value);
        break;
    }
  };

  const handleSubmit = async () => {
    if (!projectName) {
      setError("Пожалуйста, заполните обязательное поле.");
      return;
    }

    setServerError("");
    setError("");

    try {
      await dispatch(addProjectAction(projectName));
      setSuccess(true);
      router.push("/projects");
    } catch (err) {
      setServerError("Ошибка при создании проекта.");
      console.error("Error creating project:", err);
    }
  };

  return (
    <div className="flexColumn">
      <Row
        style={{
          height: "98vh",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <Col className="" sm="4" xs="6"></Col>
        <Col sm="4" xs="6">
          <Row className="card">
            <Col>
              <form action="" method="POST">
                <TextField
                  label="Project name"
                  name="projectName"
                  type="text"
                  value={projectName}
                  onChange={handleChange}
                  placeholder="Введите название проекта"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />

                {error && <Typography color="error">{error}</Typography>}
                {serverError && <p>{serverError}</p>}
                {success && (
                  <Typography color="primary">
                    Данные успешно отправлены.
                  </Typography>
                )}
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Сохранить
                </Button>
              </form>
            </Col>
          </Row>
        </Col>
        <Col className="" sm="4"></Col>
      </Row>
    </div>
  );
}
