'use client';

import Link from 'next/link';
import GradientWaves from '@/components/GradientWaves';
import DotFieldLayout from '@/components/DotFieldLayout';

const AGENTS = [
  {
    icon: '🔩',
    title: 'CAD Generation',
    desc: 'Generates 3D models (GLTF · STEP · STL) using CadQuery + parametric engine',
    badge: 'CadQuery',
  },
  {
    icon: '⚡',
    title: 'Physics Simulation',
    desc: 'DeepXDE PINN solver — stress analysis, safety factors, heatmaps',
    badge: 'PINN',
  },
  {
    icon: '💼',
    title: 'Business Intelligence',
    desc: 'Market sizing, competitor landscape, financial BOM & Excel export',
    badge: 'GPT-4o',
  },
  {
    icon: '📚',
    title: 'Research Synthesis',
    desc: 'RAG pipeline across arXiv · PubMed · IEEE · CrossRef citations',
    badge: 'LangGraph',
  },
  {
    icon: '📜',
    title: 'Patent Analysis',
    desc: 'Novelty scoring, prior art gaps, and patent claim draft generation',
    badge: 'AI-Patent',
  },
  {
    icon: '📄',
    title: 'Report Generation',
    desc: 'Full PDF/DOCX engineering report + ZIP package with all artifacts',
    badge: 'Auto',
  },
  {
    icon: '⚙️',
    title: 'PCB & Circuit Design',
    desc: 'Automated PCB layout, circuit schematics, and component sourcing analysis',
    badge: 'KiCad',
  },
];

const STEPS = [
  { n: '01', label: 'Describe your invention', sub: 'One sentence is enough' },
  { n: '02', label: '7 AI agents run in parallel', sub: 'CAD · Physics · Business · Research · Patent · Report · PCB' },
  { n: '03', label: 'Download your full package', sub: 'GLTF · STEP · STL · PDF · DOCX · BOM' },
];

export default function Home() {
  return (
    <div style={{ background: '#000000', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#ffffff' }}>
      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed',
        top: '24px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          background: 'rgba(30, 30, 30, 0.8)',
          backdropFilter: 'blur(20px)',
          borderRadius: '50px',
          padding: '12px 32px',
          border: '1px solid rgba(80, 80, 80, 0.4)',
        }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#ffffff',
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              background: 'rgba(80, 80, 80, 0.5)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(100, 100, 100, 0.3)',
              fontSize: '14px',
              fontWeight: '700',
            }}>
              🔧
            </div>
            <span style={{ fontWeight: '700', fontSize: '15px', letterSpacing: '-0.3px' }}>InventAI</span>
          </Link>
          <a href="#agents" style={{
            fontSize: '13px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            Agents
          </a>
          <a href="#how" style={{
            fontSize: '13px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            How it works
          </a>
          <a href="#features" style={{
            fontSize: '13px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            Features
          </a>
          <Link href="/projects/new" style={{
            background: 'rgba(60, 60, 60, 0.6)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600',
            textDecoration: 'none',
            border: '1px solid rgba(100, 100, 100, 0.3)',
            transition: 'background 0.2s',
          }}>
            Launch App →
          </Link>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* GradientWaves Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}>
          <GradientWaves
            horizonColor="#2a2a3a"
            waveColor="#666677"
            crestColor="#888899"
            speed={0.5}
            amplitude={3.0}
            waveScale={0.8}
            waveRatio={0.85}
            swell={40}
            turbulence={25}
            tilt={1.2}
            zoom={1.2}
            height={3.0}
            fogDepth={20}
            detail="high"
            brightness={1.2}
            opacity={1.0}
            mouseInteraction={true}
            parallaxStrength={0.5}
            grain={false}
            grainIntensity={0}
          />
        </div>

        {/* Content overlay */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Badge */}
          <div style={{ marginBottom: '32px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(80, 80, 80, 0.3)',
              border: '1px solid rgba(100, 100, 100, 0.3)',
              color: 'rgba(255, 255, 255, 0.8)',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              ★ AI-POWERED ENGINEERING PLATFORM
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: '900',
            color: '#ffffff',
            lineHeight: '1.1',
            margin: '0 0 24px 0',
            letterSpacing: '-2px',
            maxWidth: '900px',
          }}>
            From Idea to<br />
            <span className="instrument-serif-regular-italic">Patent & Cad</span>
            {' '}in Minutes
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.65)',
            maxWidth: '700px',
            margin: '0 auto 48px auto',
            lineHeight: '1.6',
            textAlign: 'center',
          }}>
            InventAI runs 7 specialized AI agents in parallel — generating 3D CAD models, physics simulations, market analysis, research synthesis, patent drafts, engineering reports, and PCB circuit designs from a single idea.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/projects/new" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(120, 120, 140, 0.25)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              border: '1px solid rgba(150, 150, 170, 0.3)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}>
              Start Inventing →
            </Link>
            <a href="#how" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(100, 100, 120, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'rgba(255, 255, 255, 0.9)',
              padding: '14px 32px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              border: '1px solid rgba(130, 130, 150, 0.25)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ── AGENT CARDS ── */}
      <section id="agents" style={{
        background: '#000000',
        padding: '120px 40px',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', letterSpacing: '-1px', marginBottom: '12px' }}>
              7 Agents. One Pipeline.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto' }}>
              Each agent is a specialized AI system. They run sequentially and in parallel to cover every dimension of your invention.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {AGENTS.map((a) => (
              <div key={a.title} style={{
                background: 'rgba(30, 30, 30, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 100, 100, 0.3)',
                borderRadius: '16px',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                {/* Icon */}
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'rgba(60, 60, 80, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '18px',
                  border: '1px solid rgba(100, 100, 100, 0.3)',
                }}>
                  {a.icon}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: 0 }}>{a.title}</h3>
                  <span style={{
                    background: 'rgba(60, 60, 80, 0.4)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    letterSpacing: '0.04em',
                    border: '1px solid rgba(100, 100, 100, 0.3)',
                  }}>{a.badge}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.65', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: '120px 40px', background: '#000000' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', letterSpacing: '-1px', marginBottom: '12px' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '56px' }}>
            Three steps from idea to full engineering package.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {STEPS.map((s) => (
              <div key={s.n} style={{
                background: 'rgba(30, 30, 30, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 100, 100, 0.3)',
                borderRadius: '16px',
                padding: '40px 24px',
                textAlign: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(60, 60, 80, 0.4)',
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontWeight: '900',
                  fontSize: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '1px solid rgba(100, 100, 100, 0.3)',
                }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '12px', margin: '0 0 12px 0' }}>
                  {s.label}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.4)',
        zIndex: 50,
      }}>
        N
      </footer>
    </div>
  );
}
