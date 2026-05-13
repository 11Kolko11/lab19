import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Box,
  Grid,
  Chip,
} from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import PlaceIcon from '@mui/icons-material/Place';
import { fetchWeather } from '../api/weatherApi';

export default function MyCity() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      setWeather(data);
      setLoading(false);
    };

    getWeather();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box
        sx={{
          mb: 4,
          p: { xs: 3, md: 4 },
          borderRadius: 5,
          background: 'linear-gradient(135deg, #eef4ff 0%, #ffffff 100%)',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.08)',
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
          Моє місто — Київ 🇺🇦
        </Typography>

        <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
          Київ для мене — це поєднання історії, ритму великого міста, можливостей для розвитку
          та атмосфери, яка мотивує рухатися вперед.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 4, height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}>
                <LocationCityIcon color="primary" />
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Коротко про Київ
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                Це столиця України, культурний, освітній та технологічний центр. Тут мене надихає
                поєднання сучасного життя, історичних місць та активного середовища для навчання і розвитку.
              </Typography>

              <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip icon={<PlaceIcon />} label="Столиця України" />
                <Chip label="Освіта" />
                <Chip label="Можливості" />
                <Chip label="Розвиток" />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Поточна погода
              </Typography>

              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                  <CircularProgress />
                </Box>
              ) : weather ? (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <WbSunnyIcon color="warning" />
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                      {weather.temperature}°C
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <AirIcon color="info" />
                    <Typography variant="body1">
                      Швидкість вітру: {weather.windspeed} км/год
                    </Typography>
                  </Box>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                    Координати: 50.45 пн.ш., 30.52 сх.д.
                  </Typography>
                </Box>
              ) : (
                <Typography color="error">Не вдалося завантажити дані погоди.</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
