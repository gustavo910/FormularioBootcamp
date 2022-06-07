import { Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import api from './api';

export default function StatusAntenas() {
    const [antenas,setAntenas]=useState([])
    const [status,setStatus]=useState([])

    useEffect(()=>{
    api.get('Antenas')
    .then((response)=>{
        setAntenas(response.data)
    });
},[]);

/*useEffect(()=>{
    api.get('Status_Antenas')
    .then((response)=>{
        console.log(response.data);
        setAntenas(response.data)
    });
},[]);*/

    return (
        antenas.map((ant)=>(
            
        <div>
           
            <br/>
            <Container >
                <Stack direction='row' spacing={50}   >
                    <Stack direction='column' spacing={3}   >
                    <Avatar sx={{ width: 300, height: 300 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                    </Stack>

                    <Stack direction='column' spacing={3} >
                    
                        <Typography>Nome:{ant.id}</Typography>
                        <Typography>Status:</Typography>
                        <Typography>Latitude:{ant.Latitude}</Typography>
                        <Typography>Longitude:{ant.Longitude}</Typography>
                        <Typography>Data da mudança:{/*ant.Data_Mudanca_Status*/}</Typography>
                        <Typography>Data de Instalação:{ant.Data_Instalacao}</Typography>
                        <Typography>Data Desativação:{ant.Data_Desativacao}</Typography>
                    
                    </Stack>

                </Stack>
                <br/>
                <Divider />
             
            </Container >
            
            
        </div >
       
        ))
    )
}