import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { label: 'Про мене', path: '/about' },
    { label: 'Моє місто', path: '/my-city' },
    { label: 'Мій розвиток', path: '/my-future' },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(34, 40, 94, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontWeight: 800,
              letterSpacing: '0.5px',
              color: '#ffffff',
            }}
          >
            Igor<span style={{ color: '#9fb3ff' }}>.portfolio</span>
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  borderRadius: '14px',
                  px: 2,
                  py: 1,
                  fontWeight: 600,
                  bgcolor: location.pathname === item.path ? 'rgba(255,255,255,0.12)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
