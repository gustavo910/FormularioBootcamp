import { Box, Button, ButtonGroup, Divider, Stack, TextField, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useState,useEffect } from 'react';
import api from './api';


export default function PeixesCadastrados() {
    const [peixe,setPeixe]=useState([])

    useEffect(()=>{
    api.get('/peixes')
    .then((response)=>{
        setPeixe(response.data)
    });
},[]);//fim useEffect
    return (
        peixe.map((fish)=>(
        <div>
            <br/>
            <Container >
                <Stack direction='row' spacing={50}   >
                    <Stack direction='column' spacing={2}   >
                        
                        <Typography>Identificador:{fish.id}</Typography>
                        <Typography>PitTag:{fish.PitTag}</Typography>
                        <Typography>Nome Científico da Espécie:{fish.NC_Especie}</Typography>
                        <Typography>Local da Captura:{fish.Local_Captura}</Typography>
                        <Typography>Data da Soltura:{fish.Data_Soltura}</Typography>
                        <Typography>Local da Soltura:{fish.Local_Soltura}</Typography>
                        <Typography>Código de Amostra do DNA:{fish.Cod_Amostra_DNA}</Typography>
                        <Typography>Recaptura:{fish.Recaptura}</Typography>
                    </Stack>

                    <Stack direction='column' spacing={25}   >
                        <TextField

                            label="Digite para buscar um peixe"
                            variant='outlined'
                            color='primary'
                            required

                        />
                        <Box>
                            <ButtonGroup size="small" aria-label=" small button group" variant='text' color="inherit">
                                <Button  >Recaptura</Button>
                                <Button>Editar</Button>
                                <Button>Excluir</Button>
                            </ButtonGroup>

                        </Box>
                    </Stack>

                </Stack>
               

            </Container >
            <br/>
            <Divider/>

        </div >
        ))
    )
}