import { Container, Typography, Paper, Box, Divider, Stack } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export default function MyFuture() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
        Мій розвиток
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #dbeafe 0%, #eef2ff 100%)',
          border: '1px solid rgba(37, 99, 235, 0.12)',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Моє бачення
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
          Я хочу послідовно розвиватися в ІТ, покращувати технічні навички, краще розуміти
          створення зручних інтерфейсів і поступово формувати сильне професійне портфоліо.
        </Typography>
      </Paper>

      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Ключові напрямки
      </Typography>

      <Stack spacing={3}>
        <Box sx={{ p: 3, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <TrendingUpIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              1. Розвиток Front-end навичок
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Поглиблене вивчення React, робота з компонентним підходом, роутингом,
            API, оптимізацією інтерфейсу та практикою в реальних мініпроєктах.
          </Typography>
        </Box>

        <Box sx={{ p: 3, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <DesignServicesIcon color="secondary" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              2. Розуміння UI / UX
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Хочу краще розуміти, як будувати зручні, сучасні та візуально приємні інтерфейси,
            щоб сайти були не лише функціональними, а й комфортними для користувача.
          </Typography>
        </Box>

        <Box sx={{ p: 3, borderRadius: 4, bgcolor: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PsychologyIcon color="success" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              3. Постійне навчання та практика
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Для мене важливо регулярно навчатися, виконувати практичні завдання,
            пробувати нові технології та поступово переходити до складніших проєктів.
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 5 }} />

      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Робота мрії
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.9, color: 'text.secondary' }}>
        Я хочу працювати в сучасній ІТ-компанії, де можна розвиватися, брати участь у цікавих
        проєктах, працювати в сильній команді та постійно вдосконалювати свої професійні навички.
      </Typography>
    </Container>
  );
}
