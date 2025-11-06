import { Container, Typography, Box } from '@mui/material';

export default function Pravila() {
  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: 'primary.main' }}>
          Правила посещения
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Правила посещения...
        </Typography>
      </Container>
    </Box>
  );
}
