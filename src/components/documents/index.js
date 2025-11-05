import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectDocumentsAction } from "@/store/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Document from "@/components/document"
import {
  Box,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function Documents({ id }) {
  const allProjectDocuments = useSelector((state) => state.auth.allDocuments);
  const [documents, setDocuments] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [documentId, setDocumentId] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjectDocumentsAction(id));
    console.log(allProjectDocuments)
  }, [dispatch, id]);

  useEffect(() => {
    setDocuments(allProjectDocuments);
  }, [allProjectDocuments]);

  const handleRedirect = (documentId) => {
    setIsClicked(true)
    setDocumentId(documentId)
    
    // router.push(`/document/${documentId}`);
  };
  return isClicked ? (
    <Document id={documentId}/>
  ) : (
    <>
      <Container
        className="order__container_mobile"
        sx={{ display: "flex", gap: "5" }}
      >
        <Box sx={{ overflow: "auto" }}>
          <Box
            className="dropdown__onmobile"
            sx={{ width: "100%", display: "table", tableLayout: "fixed" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="mobile__fs_10">Номер</TableCell>
                  <TableCell className="mobile__fs_10">
                    Название документа
                  </TableCell>
                  <TableCell className="mobile__fs_10">Действие</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell classname="mobile__fs_10">{item.id}</TableCell>
                    <TableCell classname="mobile__fs_10">
                      {item.document_name}
                    </TableCell>
                    <TableCell classname="mobile__fs_10">
                      <button
                        onClick={() => {
                          handleRedirect(item.id);
                        }}
                      >
                        изменить
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Container>
    </>
  );
}
