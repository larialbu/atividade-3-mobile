import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const buscarCEP = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setEndereco(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // Isso centraliza verticalmente na página
        }}
      >
        <Paper elevation={3} style={{ padding: '16px', maxWidth: '400px' }}>
          <Typography variant="h4" gutterBottom>
            Consulta de CEP
          </Typography>
          <TextField
            label="Digite um CEP"
            variant="outlined"
            fullWidth
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={buscarCEP}
            style={{ marginTop: '16px' }}
          >
            Buscar
          </Button>
          <div style={{ marginTop: '16px' }}>
            <Typography variant="h6" gutterBottom>
              Resultado:
            </Typography>
            <Typography variant="body1">CEP: {endereco.cep}</Typography>
            <Typography variant="body1">Logradouro: {endereco.logradouro}</Typography>
            <Typography variant="body1">Bairro: {endereco.bairro}</Typography>
            <Typography variant="body1">Cidade: {endereco.localidade}</Typography>
            <Typography variant="body1">Estado: {endereco.uf}</Typography>
          </div>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
