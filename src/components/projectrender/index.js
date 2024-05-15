import React from "react";
import Image from "next/image";
import projBack from "@/../../public/image/projectCardBack.jpg";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
export default function ProjectRender({ allProjects, onProjectClick }) {
  return (
    <>
      {allProjects.length >= 1 ? (
        allProjects.map((item, index) => (
          <div
            key={index}
            className="col-sm-3 button__card"
            onClick={() => onProjectClick(item.id)}
            style={{'margin': '0.5rem 0px 1% 0'}}
          >
            {/* <div className="card">
              <Image src={projBack} className="card-img-top" alt="..." height='20%'/>
              <div className="card-body" style={{'display':'flex'}}>

              
                <h5 className="card-title " style={{'justify-content':'start'}}>{item.project_name}</h5>
                <p className="card-text" style={{'cursor':'pointer','justify-content':'end'}} >
                 Подробнее
                </p>
              </div>
            </div> */}
             <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                Наименование проекта:
                </Typography>
                <Typography variant="h5" component="div">
                  {/* be{bull}nev{bull}o{bull}lent */}  {item.project_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {/* adjective */}
                </Typography>
                <Typography variant="body2">
                  {/* well meaning and kindly. */}
                  <br />
                 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"> Подробнее</Button>
              </CardActions>
            </Card>
          </div>
        ))
      ) : (
        <div
          style={{
            height: "70vh",
          }}
          className="d-flex align-items-center justify-content-center"
        >
          Проектов нет, нажмите на кнопку + чтобы создать документ
        </div>
      )}
    </>
  );
}
