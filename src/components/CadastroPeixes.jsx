import { Button, Container, Divider, FormControlLabel, FormGroup, List, ListItem, ListItemText, Stack, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


function CadastroPeixes(){

const[recaptura,setRecaptura]=useState(false)  
const{register,handleSubmit}=useForm();

const onSubmit=(e)=>{
  console.log(e);
}

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Container maxWidth="sm" >
    <div >
      
      <List>
        <ListItem >
          <ListItemText primary="Dados de cadastro dos peixes" />
        </ListItem>
        <Divider />
      </List>
      <Stack spacing={2} direction='row'  >
        <Stack direction='column' spacing={2}   >

          <TextField
            name='PitTag'
            label="PitTag"
            variant='outlined'
            color='primary'
            required
            {...register("PitTag")}

          />

          <TextField
            name='Comp_Padrao'
            label="Comprimento Padrão"
            variant='outlined'
            color='primary'
            required
            {...register("Comp_Padrao")}
          />


          <TextField
            name='Local_Captura:'
            label="Local de Captura"
            variant='outlined'
            color='primary'
            required
            {...register("Local_Captura")}
          />
          <TextField
            name='Data_Soltura'
            label="Data de Soltura"
            variant='outlined'
            color='primary'
            required 
            {...register("Data_Soltura")}
            />

          <TextField
            name='Cod_Amostra_DNA'
            label="Código da Amostra de DNA"
            variant='outlined'
            color='primary'
            required 
            {...register("Cod_Amostra_DNA")}
            />
            

        </Stack>

        <Stack direction='column' spacing={2}   >

          <TextField
            name='NC_Especie'
            label="Nome Científico da Espécie"
            variant='outlined'
            color='primary'
            required
            {...register("NC_Especie")}

          />
          <TextField
            name='Comp_Total'
            label="Comprimento total"
            variant='outlined'
            color='primary'
            required
            {...register("Comp_Total")}

          />
          <TextField
            name='Peso_Soltura'
            label="Peso na Soltura"
            variant='outlined'
            color='primary'
            required
            {...register("Peso_Soltura")}


          />
          <TextField
            name="Local_Soltura"
            label="Local da soltura"
            variant='outlined'
            color='primary'
            required
            {...register("Local_Soltura")}

          />
          <FormGroup>
            <FormControlLabel label="Recaptura" onChange  = { (e) => {setRecaptura(e.target.checked)}} control={<Switch /> }  />
            

          </FormGroup>
          {console.log(recaptura)}
        </Stack>
      </Stack>
    </div >
    
    {recaptura&&(
    <div>
    <List>
      <ListItem >
        <ListItemText primary="Informações de Recaptura" />
      </ListItem>
      <Divider />
    </List>
    <Stack spacing={2} direction='row'   >
      <Stack direction='column' spacing={2}   >
       
        <TextField

          label="Comprimento total"
          variant='outlined'
          color='primary'
          required

        />

        <TextField

          label="Peso na soltura"
          variant='outlined'
          color='primary'
          required
        />


        <TextField

          label="Local da Soltura"
          variant='outlined'
          color='primary'
          required
        />
        <TextField

          label="Recaptura"
          variant='outlined'
          color='primary'
          required />

      </Stack>

      <Stack direction='column' spacing={2}   >

        <TextField

          label="Local da Captura"
          variant='outlined'
          color='primary'
          required

        />
        <TextField

          label="Data de Captura"
          variant='outlined'
          color='primary'
          required

        />
        <TextField

          label="Código da Amostra de DNA"
          variant='outlined'
          color='primary'
          required

        />
 
      </Stack>
    </Stack>
  
  </div >
    )}
    <br/>
 <Button  size='large' variant='outlined' color='inherit' type='submit' >Salvar</Button>
 
</Container >
</form>
 );   
}
export default CadastroPeixes;