import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserProjectsAction, setCurrentProjIdReducer } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import Documents from "../documents";
import jwt_decode from "jwt-decode";

export default function UserProjects() {
  const allUserProjects = useSelector((state) => state.auth.allProjects);
  const currentProjId = useSelector((state) => state.auth.currentProjId);
  const [decoded, setDecoded] = useState(null);

  console.log(decoded);

  const [selectedProjectId, setSelectedProjectId] = useState(currentProjId);
  const router = useRouter();
  console.log(router.pathname);

  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(getAllUserProjectsAction());
      console.log(allUserProjects);
    
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
  const handlePassId = (id) => {
    dispatch(setCurrentProjIdReducer(id));

    
    console.log(id);
  };

  console.log(currentProjId)

  return (
    <>
      {allUserProjects.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => {
              handlePassId(item.id)
            }}
          >
            {item.project_name}
          </button>
        </div>
      ))}
      {currentProjId && <Documents id={currentProjId}/>}
    </>
  );
}
