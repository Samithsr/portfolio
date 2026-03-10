import { useEffect } from 'react';

export const useCursorEffect = () => {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    
    const handleMouseMove = (e) => {
      if (cursor) cursor.style.left = e.clientX + 'px';
      if (cursor) cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        if (ring) ring.style.left = e.clientX + 'px';
        if (ring) ring.style.top = e.clientY + 'px';
      }, 80);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('a,button,.proj-card,.service-card,.skill-pill');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (ring) ring.style.transform = 'translate(-50%,-50%) scale(1.6)';
      });
      el.addEventListener('mouseleave', () => {
        if (ring) ring.style.transform = 'translate(-50%,-50%) scale(1)';
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export const useStarsCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById('stars-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      let W, H, stars = [];
      
      const initStars = () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
        stars = Array.from({length: 180}, () => ({
          x: Math.random() * W, 
          y: Math.random() * H,
          r: Math.random() * 1.5 + 0.3,
          o: Math.random() * 0.7 + 0.1,
          s: Math.random() * 0.3 + 0.1
        }));
      };
      
      const drawStars = () => {
        ctx.clearRect(0, 0, W, H);
        stars.forEach(s => {
          s.o += (Math.random() - 0.5) * 0.02;
          s.o = Math.max(0.05, Math.min(0.9, s.o));
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${s.o})`;
          ctx.fill();
        });
        requestAnimationFrame(drawStars);
      };
      
      initStars();
      drawStars();
      window.addEventListener('resize', initStars);
      
      return () => {
        window.removeEventListener('resize', initStars);
      };
    }
  }, []);
};

export const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(el => io.observe(el));
    
    return () => {
      io.disconnect();
    };
  }, []);
};

export const useNavActive = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const handleScroll = () => {
      let cur = '';
      sections.forEach(s => { 
        if (window.scrollY >= s.offsetTop - 140) cur = s.id; 
      });
      navLinks.forEach(a => {
        const active = a.getAttribute('href') === '#' + cur;
        a.style.color = active ? '#915eff' : '';
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
