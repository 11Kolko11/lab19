import { Box, Typography, Link as MuiLink, Container, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 'auto',
        bgcolor: '#22285e',
        color: 'white',
        pt: 4,
        pb: 4,
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1.5} alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Igor.portfolio
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'rgba(255,255,255,0.75)', textAlign: 'center' }}
          >
            Створено з використанням React та Material UI. Навчальний проєкт-портфоліо.
          </Typography>

          <MuiLink
            href="https://github.com/11Kolko11"
            color="inherit"
            target="_blank"
            rel="noreferrer"
            underline="hover"
            sx={{ fontWeight: 600 }}
          >
            GitHub
          </MuiLink>

          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © 2026 Ігор Туш
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
