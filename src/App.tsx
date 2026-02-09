import { useEffect, useRef } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { RocketLaunch } from '@mui/icons-material';
import gsap from 'gsap';

function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP Animatie test
    gsap.fromTo(boxRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    // Tailwind voor de achtergrond en layout
    <Box className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
      <Container maxWidth="sm">
        <div ref={boxRef} className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl text-center">

          <Typography variant="h3" component="h1" gutterBottom className="font-bold tracking-tighter">
            V2 is <span className="text-sky-400">Live</span>
          </Typography>

          <Typography variant="body1" className="text-slate-400 mb-8">
            React 19 + MUI + Tailwind 4 + GSAP zijn succesvol gekoppeld in PhpStorm.
          </Typography>

          {/* MUI Button met een Icon */}
          <Button
            variant="contained"
            size="large"
            startIcon={<RocketLaunch />}
            onClick={() => gsap.to(boxRef.current, { rotation: 360, duration: 1 })}
            sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 'bold' }}
          >
            Lanceer Animatie
          </Button>
        </div>
      </Container>
    </Box>
  );
}

export default App;
