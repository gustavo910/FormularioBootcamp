import { Divider, Stack, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import api from './api';

export default function RegistroPassagens() {
    const [passagens,setPassagens]=useState([])

    useEffect(()=>{
    api.get("Passagens")
    .then((response)=>{
        setPassagens(response.data)
    })
    .catch((err) => {
        console.error("Ocorreu um erro : " + err);
      });
},[]);//fim useEffect
    return (
        passagens.map((pas)=>(
            
        <div >
            <Container >
                <br/>
                <Stack direction='row' spacing={50} >
                    <Stack direction='column' spacing={3}   >

                        <Typography>Identificador:</Typography>
                        <Typography>PitTag: {pas.Peixe}</Typography>
                        <Typography>Nome Científico da Espécie:</Typography>
                        <Typography>Comprimento Padrão::</Typography>
                        <Typography>Comprimento Total:</Typography>

                    </Stack>

                    <Stack direction='column' spacing={3} >
                        <Typography>Data da Soltura:</Typography>
                        <Typography>Local da Soltura:</Typography>
                        <Typography>Recaptura:</Typography>
                        <Typography>Nome da Antena: {pas.Antena}</Typography>
                        <Typography>Data e Hora do Registro: {pas.Data_Hora}</Typography>
                    </Stack>

                </Stack>
               <br/>
               <Divider/>
                
            </Container >
            
            
        </div >
        ))
    )
}