import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h1" sx={{ fontWeight: 800, color: '#4f46e5', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Сторінку не знайдено
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
        Схоже, що посилання неправильне або сторінку було переміщено.
      </Typography>

      <Box>
        <Button component={Link} to="/about" variant="contained" size="large">
          Повернутися на головну
        </Button>
      </Box>
    </Container>
  );
}
