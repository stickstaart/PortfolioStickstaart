import { useEffect, useRef} from 'react';
import { Typography, Button, Container, Box, Stack } from '@mui/material';
import { ArrowForward, Code } from '@mui/icons-material';
import gsap from 'gsap';
import MagneticButton from './components/MagneticButton';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);

  // Parallax effect functie
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    // Bereken afstand vanuit het midden
    const xPos = (clientX / window.innerWidth - 0.5) * 40;
    const yPos = (clientY / window.innerHeight - 0.5) * 40;

    // Beweeg de achtergrond-blob subtiel
    gsap.to(blobRef.current, {
      x: xPos,
      y: yPos,
      duration: 1,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.3
      });

      // Zweef-animatie voor de blob (onafhankelijk van muis)
      gsap.to(blobRef.current, {
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0a192f] flex items-center justify-center overflow-hidden"
    >
      {/* De Parallax Blob op de achtergrond */}
      <div
        ref={blobRef}
        className="absolute w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"
        style={{ top: '20%', left: '30%' }}
      />

      <Container maxWidth="md" className="relative z-10">
        <Stack spacing={4} alignItems="center" className="text-center">

          <div className="px-4 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-mono mb-4">
            <Code className="align-middle mr-2" fontSize="small" />
            Interactive v2.0
          </div>

          <Typography
            ref={titleRef}
            variant="h1"
            className="text-white font-extrabold tracking-tight"
            sx={{ fontSize: { xs: '3rem', md: '5rem' } }}
          >
            Creative <span className="text-sky-400">Developer</span>
          </Typography>

          <Typography variant="h5" className="text-slate-400 max-w-2xl">
            Ik bouw interactieve interfaces waar code en design elkaar ontmoeten.
          </Typography>

<MagneticButton>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              bgcolor: '#38bdf8',
              '&:hover': { bgcolor: '#0ea5e9' },
              px: 4, py: 1.5, borderRadius: '8px', mt: 4
            }}
          >
            Projecten ontdekken
          </Button>
</MagneticButton>
        </Stack>
      </Container>
    </Box>
  );
}
