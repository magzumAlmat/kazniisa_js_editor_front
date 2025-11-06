import { Container, Typography, Box } from '@mui/material';

export default function Pacientam() {
  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
          Пациентам
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Информация для пациентов...
        </Typography>
      </Container>
    </Box>
  );
}
