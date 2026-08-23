'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import DotFieldLayout from '@/components/DotFieldLayout';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

const EXAMPLES = [
  { icon: '🚁', text: 'A foldable inspection drone with ultrasonic sensors for infrastructure maintenance and AI defect detection' },
  { icon: '☀️', text: 'Solar-powered water purification device for remote off-grid areas using UV and reverse osmosis' },
  { icon: '🦾', text: 'Lightweight carbon fibre exoskeleton for industrial workers to reduce back strain in manufacturing' },
  { icon: '🌿', text: 'Modular vertical farming unit with AI crop monitoring, automated irrigation and LED spectrum control' },
  { icon: '🛸', text: '5-inch FPV racing drone frame with integrated prop guards, carbon fibre arms and 30x30 stack mount' },
];

const PIPELINE = [
  { icon: '🔩', label: 'CAD Agent',      desc: '3D GLTF · STEP · STL',          time: '~10s', color: '#3B82F6', bg: '#EFF6FF' },
  { icon: '⚡', label: 'Physics Agent',  desc: 'PINN stress simulation',         time: '~15s', color: '#F97316', bg: '#FFF7ED' },
  { icon: '💼', label: 'Business Agent', desc: 'Market sizing · BOM',            time: '~7s',  color: '#10B981', bg: '#F0FDF4' },
  { icon: '📚', label: 'Research Agent', desc: 'arXiv · IEEE · PubMed',          time: '~60s', color: '#8B5CF6', bg: '#FDF4FF' },
  { icon: '📜', label: 'Patent Agent',   desc: 'Novelty score · gap analysis',   time: '~40s', color: '#F59E0B', bg: '#FFFBEB' },
  { icon: '📄', label: 'Report Agent',   desc: 'PDF · DOCX · ZIP package',       time: '~5s',  color: '#06B6D4', bg: '#F0F9FF' },
];

export default function NewProjectPage() {
  const [idea, setIdea]     = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/orchestrator/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'New Invention', idea_description: idea }),
      });
      let id = `proj-${Date.now().toString(36)}`;
      if (res.ok) {
        const d = await res.json();
        if (d?.id || d?.project_id) id = d.id || d.project_id;
      }
      router.push(`/projects/${id}?idea=${encodeURIComponent(idea)}`);
    } catch {
      router.push(`/projects/proj-${Date.now().toString(36)}?idea=${encodeURIComponent(idea)}`);
    }
  };

  return (
    <DotFieldLayout>
      {/* NAV */}
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
          <a href="/" style={{
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
          </a>
          <a href="/#agents" style={{
            fontSize: '13px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            Agents
          </a>
          <a href="/#how" style={{
            fontSize: '13px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            How it works
          </a>
          <a href="/#features" style={{
            fontSize: '13px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            Features
          </a>
          <a href="/projects/new" style={{
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
          </a>
        </div>
      </nav>

      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '120px 40px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '40px', alignItems: 'start' }}>

          {/* ── LEFT — Main form ── */}
          <div>
            {/* Heading */}
            <div style={{ marginBottom: '36px' }}>
              <span style={{
                display: 'inline-block', background: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA',
                padding: '5px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: '700',
                letterSpacing: '0.04em', marginBottom: '16px',
              }}>
                ⚡ 6 AI AGENTS READY
              </span>
              <h1 style={{
                fontSize: '40px', fontWeight: '900', color: '#ffffff',
                letterSpacing: '-1.5px', lineHeight: '1.1', marginBottom: '12px',
              }}>
                Describe Your Invention
              </h1>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>
                One sentence is enough. Our AI pipeline handles CAD, physics, business, research, patents and reporting automatically.
              </p>
            </div>

            {/* Form card */}
            <div style={{
              background: 'rgba(30,30,30,0.8)', border: '1.5px solid rgba(100,100,100,0.3)',
              borderRadius: '18px', padding: '32px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
            }}>
              <form onSubmit={handleSubmit}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.8)', marginBottom: '10px', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  Invention Description
                </label>
                <textarea
                  value={idea}
                  onChange={e => setIdea(e.target.value)}
                  required rows={6}
                  placeholder="E.g., A foldable inspection drone with ultrasonic sensors for infrastructure maintenance and AI-powered defect detection..."
                  style={{
                    width: '100%', border: '2px solid rgba(100,100,100,0.3)', borderRadius: '12px',
                    padding: '16px', fontSize: '15px', color: '#ffffff',
                    background: 'rgba(50,50,50,0.8)', resize: 'vertical', outline: 'none',
                    fontFamily: 'inherit', lineHeight: '1.65', boxSizing: 'border-box',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(59,130,246,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(100,100,100,0.3)'}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Be specific — mention size, materials, use case</span>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{idea.length} chars</span>
                </div>

                <button
                  type="submit"
                  disabled={loading || !idea.trim()}
                  style={{
                    width: '100%',
                    background: loading ? 'rgba(120, 120, 140, 0.3)' : 'rgba(120, 120, 140, 0.4)',
                    backdropFilter: 'blur(10px)',
                    color: 'white', 
                    border: '1px solid rgba(150, 150, 170, 0.3)',
                    borderRadius: '12px',
                    padding: '16px 24px', 
                    fontSize: '16px', 
                    fontWeight: '800',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px',
                    boxShadow: loading ? 'none' : '0 4px 16px rgba(120,120,140,0.2)',
                    letterSpacing: '-0.2px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (!loading && idea.trim()) {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(120, 120, 140, 0.5)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(150, 150, 170, 0.5)';
                    }
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(120, 120, 140, 0.4)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(150, 150, 170, 0.3)';
                  }}
                >
                  {loading ? (
                    <>
                      <span style={{
                        width: '18px', height: '18px', border: '2.5px solid rgba(255,255,255,0.4)',
                        borderTop: '2.5px solid white', borderRadius: '50%',
                        display: 'inline-block', animation: 'spin 0.7s linear infinite',
                      }} />
                      Launching AI Agents…
                    </>
                  ) : '⚡ Launch 6 AI Agents →'}
                </button>
              </form>
            </div>

            {/* Example ideas */}
            <div style={{ marginTop: '28px' }}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                Try an example
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {EXAMPLES.map(ex => (
                  <button
                    key={ex.text}
                    onClick={() => setIdea(ex.text)}
                    style={{
                      background: 'rgba(50,50,50,0.6)', border: '1.5px solid rgba(100,100,100,0.3)',
                      borderRadius: '10px', padding: '12px 16px',
                      textAlign: 'left', cursor: 'pointer',
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(59,130,246,0.4)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(59,130,246,0.1)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(100,100,100,0.3)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(50,50,50,0.6)';
                    }}
                  >
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{ex.icon}</span>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.55' }}>{ex.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Pipeline sidebar ── */}
          <div style={{
            background: 'rgba(30,30,30,0.7)', border: '1.5px solid rgba(100,100,100,0.3)',
            borderRadius: '18px', padding: '28px',
            position: 'sticky', top: '100px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff', marginBottom: '6px', letterSpacing: '-0.3px' }}>
              What happens when you submit
            </h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>6 agents run in sequence + parallel</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {PIPELINE.map((step, i) => (
                <div key={step.label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  {/* Timeline */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '12px',
                      background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px', border: `1.5px solid ${step.color}22`,
                    }}>
                      {step.icon}
                    </div>
                    {i < PIPELINE.length - 1 && (
                      <div style={{ width: '2px', height: '24px', background: 'rgba(100,100,100,0.3)', margin: '4px 0' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: '8px', paddingBottom: i < PIPELINE.length - 1 ? '0' : '0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>{step.label}</span>
                      <span style={{
                        fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.7)',
                        background: 'rgba(59,130,246,0.2)', padding: '2px 7px', borderRadius: '100px',
                      }}>{step.time}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Output tags */}
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(100,100,100,0.3)' }}>
              <p style={{ fontSize: '11px', fontWeight: '700', color: 'rgba(255,255,255,0.6)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Output files</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['GLTF', 'STEP', 'STL', 'Heatmap', 'BOM.xlsx', 'Patent.pdf', 'Report.pdf', 'Package.zip'].map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(100,100,100,0.2)', border: '1px solid rgba(100,100,100,0.3)',
                    color: 'rgba(255,255,255,0.8)', padding: '4px 10px', borderRadius: '100px',
                    fontSize: '11px', fontWeight: '600',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </DotFieldLayout>
  );
}
