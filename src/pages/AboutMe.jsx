import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  Stack,
  Chip,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function AboutMe() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 5,
          background: 'linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)',
          boxShadow: '0 10px 40px rgba(67, 97, 238, 0.10)',
          mb: 6,
        }}
      >
        <Stack spacing={3}>
          <Box>
            <Chip label="Моє портфоліо" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.4rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Привіт, я <span className="gradient-text">Ігор</span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '900px',
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Я студент спеціальності «Комп’ютерні науки» в НУБіП України. Захоплююся
              front-end розробкою, люблю створювати сучасні, зручні та акуратні вебзастосунки.
              Мені подобається поєднувати логіку, дизайн і практичність, а також постійно
              вдосконалювати свої навички в React, JavaScript та роботі з інтерфейсами.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            <Chip label="React" variant="outlined" />
            <Chip label="JavaScript" variant="outlined" />
            <Chip label="UI / UX" variant="outlined" />
            <Chip label="Front-end" variant="outlined" />
          </Stack>
        </Stack>
      </Box>

      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: 800,
          display: 'flex',
          alignItems: 'center',
          gap: 1.2,
        }}
      >
        <CodeIcon fontSize="large" />
        Мої проєкти
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 16px 40px rgba(79, 70, 229, 0.18)',
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <AutoAwesomeIcon color="primary" />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#2563eb' }}>
                  HTML + CSS
                </Typography>
              </Stack>

              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                Практика створення адаптивних сторінок, лендінгів та інтерфейсів із використанням
                Flexbox, Grid і сучасного підходу до верстки.
              </Typography>

              <Button variant="contained" href="https://github.com/11Kolko11" target="_blank">
                Переглянути
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '100%',
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: '0.3s',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: '0 16px 40px rgba(124, 58, 237, 0.18)',
              },
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <RocketLaunchIcon color="secondary" />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#7c3aed' }}>
                  JavaScript
                </Typography>
              </Stack>

              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.8 }}>
                Робота з DOM, подіями, масивами, об’єктами, логікою та базовими алгоритмами.
                Саме тут я закріплював фундамент front-end розробки на практиці.
              </Typography>

              <Button variant="outlined" href="https://github.com/11Kolko11" target="_blank">
                Переглянути
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
