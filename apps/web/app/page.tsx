import Link from 'next/link';
import { GradientWaves } from '@/components/GradientWaves';

const AGENTS = [
  {
    icon: '🔩',
    title: 'CAD Generation',
    desc: 'Generates 3D models (GLTF · STEP · STL) using CadQuery + parametric engine',
    badge: 'CadQuery',
    grad: 'linear-gradient(135deg,#3B82F6,#1D4ED8)',
    glow: 'rgba(59,130,246,0.18)',
  },
  {
    icon: '⚡',
    title: 'Physics Simulation',
    desc: 'DeepXDE PINN solver — stress analysis, safety factors, heatmaps',
    badge: 'PINN',
    grad: 'linear-gradient(135deg,#F97316,#C2410C)',
    glow: 'rgba(249,115,22,0.18)',
  },
  {
    icon: '💼',
    title: 'Business Intelligence',
    desc: 'Market sizing, competitor landscape, financial BOM & Excel export',
    badge: 'GPT-4o',
    grad: 'linear-gradient(135deg,#10B981,#047857)',
    glow: 'rgba(16,185,129,0.18)',
  },
  {
    icon: '📚',
    title: 'Research Synthesis',
    desc: 'RAG pipeline across arXiv · PubMed · IEEE · CrossRef citations',
    badge: 'LangGraph',
    grad: 'linear-gradient(135deg,#8B5CF6,#6D28D9)',
    glow: 'rgba(139,92,246,0.18)',
  },
  {
    icon: '📜',
    title: 'Patent Analysis',
    desc: 'Novelty scoring, prior art gaps, and patent claim draft generation',
    badge: 'AI-Patent',
    grad: 'linear-gradient(135deg,#F59E0B,#B45309)',
    glow: 'rgba(245,158,11,0.18)',
  },
  {
    icon: '📄',
    title: 'Report Generation',
    desc: 'Full PDF/DOCX engineering report + ZIP package with all artifacts',
    badge: 'Auto',
    grad: 'linear-gradient(135deg,#06B6D4,#0E7490)',
    glow: 'rgba(6,182,212,0.18)',
  },
  {
    icon: '⚙️',
    title: 'PCB & Circuit Design',
    desc: 'Automated PCB layout, circuit schematics, and component sourcing analysis',
    badge: 'KiCad',
    grad: 'linear-gradient(135deg,#EC4899,#BE185D)',
    glow: 'rgba(236,72,153,0.18)',
  },
];

const STEPS = [
  { n: '01', label: 'Describe your invention', sub: 'One sentence is enough' },
  { n: '02', label: '6 AI agents run in parallel', sub: 'CAD · Physics · Business · Research · Patent · Report' },
  { n: '03', label: 'Download your full package', sub: 'GLTF · STEP · STL · PDF · DOCX · BOM' },
];

export default function Home() {
  return (
    <div style={{ background: '#000000', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#ffffff' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        padding: '0 40px', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '40px',
          background: 'rgba(80,80,80,0.3)',
          backdropFilter: 'blur(30px)',
          borderRadius: '50px',
          padding: '12px 32px',
          border: '1px solid rgba(120,120,120,0.2)',
        }}>
          <Link href="/" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            textDecoration: 'none', color: '#ffffff',
          }}>
            <div style={{
              width: '32px', height: '32px',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ color: 'white', fontWeight: '900', fontSize: '14px' }}>AI</span>
            </div>
            <span style={{ fontWeight: '700', fontSize: '16px' }}>InventAI</span>
          </Link>
          <Link href="#agents" style={{
            fontSize: '14px', fontWeight: '500', color: '#ffffff', textDecoration: 'none', opacity: 0.8,
          }}>
            Agents
          </Link>
          <Link href="#how" style={{
            fontSize: '14px', fontWeight: '500', color: '#ffffff', textDecoration: 'none', opacity: 0.8,
          }}>
            How it works
          </Link>
          <Link href="/projects/new" style={{
            background: 'rgba(120,120,120,0.25)',
            color: 'white', padding: '8px 18px', borderRadius: '8px',
            fontSize: '14px', fontWeight: '600', textDecoration: 'none',
            border: '1px solid rgba(150,150,150,0.3)',
          }}>
            Start →
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        maxWidth: '1160px', margin: '0 auto',
        padding: '96px 40px 80px',
        textAlign: 'center',
      }}>
        {/* GradientWaves background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: -120,
          zIndex: 0,
        }}>
          <GradientWaves />
        </div>

        {/* Content wrapper */}
        <div style={{ position: 'relative', zIndex: 1, marginTop: 80 }}>
          {/* Pill badge */}
          <div style={{ marginBottom: '28px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(120,120,120,0.15)',
              border: '1px solid rgba(150,150,150,0.3)',
              color: '#ffffff', padding: '8px 18px', borderRadius: '100px',
              fontSize: '13px', fontWeight: '600',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#8B5CF6', display: 'inline-block' }} />
              From Idea to Patent & CAD
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: 'clamp(42px,6vw,72px)', fontWeight: '900',
            color: '#ffffff', lineHeight: '1.08', marginBottom: '24px',
            letterSpacing: '-2px',
          }}>
            From Idea to Patent & <span style={{ fontFamily: 'instrument-serif, serif' }}>CAD</span> in Minutes
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '580px',
            margin: '0 auto 44px', lineHeight: '1.75', fontWeight: '400',
          }}>
            InventAI runs <strong style={{ color: '#ffffff' }}>7 specialized AI agents</strong> in parallel —
            generating 3D CAD models, physics simulations, market analysis, research,
            patent drafts, circuit designs and a full report from a single idea.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/projects/new" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(120,120,120,0.25)',
              color: 'white', padding: '16px 40px', borderRadius: '12px',
              fontSize: '15px', fontWeight: '600', textDecoration: 'none',
              border: '1px solid rgba(150,150,150,0.3)',
              letterSpacing: '-0.2px',
            }}>
              ⚡ Start Inventing
            </Link>
            <a href="#how" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(120,120,120,0.25)',
              color: '#ffffff', padding: '16px 40px', borderRadius: '12px',
              fontSize: '15px', fontWeight: '600', textDecoration: 'none',
              border: '1px solid rgba(150,150,150,0.3)',
            }}>
              See How it Works
            </a>
          </div>
        </div>
      </section>

      {/* ── AGENT CARDS ── */}
      <section id="agents" style={{
        background: '#000000',
        padding: '200px 40px 120px',
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {AGENTS.map((a, i) => (
              <div key={a.title} style={{
                background: 'rgba(120,120,120,0.15)',
                border: '1px solid rgba(150,150,150,0.3)',
                borderRadius: '16px',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}>
                {/* Icon */}
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: a.grad,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', marginBottom: '18px',
                  boxShadow: `0 4px 12px ${a.glow}`,
                }}>
                  {a.icon}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: 0 }}>{a.title}</h3>
                  <span style={{
                    background: 'rgba(150,150,150,0.2)', color: 'rgba(255,255,255,0.7)',
                    fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px',
                    letterSpacing: '0.04em',
                  }}>{a.badge}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.65', margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" style={{ padding: '200px 40px 120px', background: '#000000' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#ffffff', letterSpacing: '-1px', marginBottom: '12px' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '56px' }}>Three steps from idea to full engineering package.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{
                background: 'rgba(120,120,120,0.15)', border: '1px solid rgba(150,150,150,0.3)',
                borderRadius: '16px', padding: '32px 24px', textAlign: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '50%',
                  background: 'rgba(120,120,120,0.25)',
                  color: '#8B5CF6', fontWeight: '900', fontSize: '24px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  border: '1px solid rgba(150,150,150,0.3)',
                }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>{s.label}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: '80px 40px',
        background: '#000000',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: '#ffffff', letterSpacing: '-1.5px', marginBottom: '16px' }}>
            Ready to build something new?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '36px', lineHeight: '1.7' }}>
            Describe any invention. InventAI handles the rest — in minutes.
          </p>
          <Link href="/projects/new" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(120,120,120,0.25)',
            color: 'white', padding: '18px 44px', borderRadius: '14px',
            fontSize: '16px', fontWeight: '700', textDecoration: 'none',
            border: '1px solid rgba(150,150,150,0.3)',
            letterSpacing: '-0.3px',
          }}>
            ⚡ Start Inventing Now →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid rgba(150,150,150,0.3)', padding: '28px 40px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: '#000000',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: '900', fontSize: '11px' }}>AI</span>
          </div>
          <span style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff' }}>InventAI</span>
        </div>
        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Netaji Subhash Engineering College · Hackathon 2026</span>
      </footer>

    </div>
  );
}
