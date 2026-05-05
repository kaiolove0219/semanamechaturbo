"use client";

import Image from "next/image";
import {
  Crown,
  Star,
  CheckCircle,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  Users,
  ChevronDown,
  Zap,
  BookOpen,
  Award,
  Lock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PAYMENT_URL = "https://pay.risepay.com.br/Pay/3ed567b0991a480a94a7743818fe7323";

const MARQUEE_ITEMS = [
  "BALAYAGE PERFEITO",
  "MECHAS PROFISSIONAIS",
  "TÉCNICA EXCLUSIVA",
  "MÉTODO COMPROVADO",
  "RESULTADOS REAIS",
  "DÉBORA MARTINS",
  "MECHA TURBO",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden py-3 select-none">
      <div
        className={reverse ? "marquee-right" : "marquee-left"}
        style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4">
            <span
              className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.15em] uppercase"
              style={{ padding: "0 1.5rem", color: i % 2 === 0 ? "rgba(201,168,76,0.9)" : "rgba(255,255,255,0.15)" }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(201,168,76,0.4)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState({ h: 23, m: 47, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {[{ label: "Horas", val: time.h }, { label: "Min", val: time.m }, { label: "Seg", val: time.s }].map(({ label, val }, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="timer-box rounded-xl px-3 md:px-5 py-2 md:py-3 min-w-[56px] md:min-w-[72px] text-center">
            <span className="text-2xl md:text-4xl font-black gold-text tabular-nums">{pad(val)}</span>
          </div>
          <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

const BENEFITS = [
  { icon: BookOpen, title: "Apostila VIP Completa", desc: "Conteúdo denso e profissional sobre mechas, luzes e balayage do básico ao avançado." },
  { icon: Zap, title: "Semana Mecha Turbo", desc: "Método acelerado para dominar as técnicas mais procuradas pelos clientes." },
  { icon: Award, title: "3 E-Books Bônus", desc: "Mapa técnico, guia de tonalização e o mapa de fundos de clareamento." },
  { icon: Users, title: "Técnicas Profissionais", desc: "Aprenda o que os salões premium usam e cobra caro por isso." },
  { icon: Shield, title: "Acesso Imediato", desc: "Receba na hora após o pagamento — sem espera, sem burocracia." },
  { icon: Sparkles, title: "Resultados Garantidos", desc: "Método testado por milhares de cabeleireiras brasileiras." },
];

const BONUSES = [
  { title: "Mapa Técnico para Especialista em Mechas", value: "R$ 97" },
  { title: "Guia Passo a Passo da Mecha Perfeita sem Tonalizar", value: "R$ 67" },
  { title: "O Mapa dos Fundos de Clareamento e seus Resultados", value: "R$ 67" },
];

const TESTIMONIALS = [
  { name: "Fernanda S.", role: "Cabeleireira — SP", text: "Nunca imaginei que um material digital poderia transformar tanto minha carreira. Já apliquei o método e as clientes adoraram!", stars: 5 },
  { name: "Camila R.", role: "Salão Próprio — RJ", text: "O nível de detalhe da apostila é impressionante. Aprendi em uma semana o que levaria meses em cursos presenciais.", stars: 5 },
  { name: "Juliana M.", role: "Profissional Autônoma — MG", text: "Os bônus valem mais do que o preço inteiro! Já recuperei o investimento no primeiro atendimento.", stars: 5 },
];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(40px)";
      (el as HTMLElement).style.transition = "opacity 0.8s cubic-bezier(0.19,1,0.22,1), transform 0.8s cubic-bezier(0.19,1,0.22,1)";
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "var(--dark-bg)" }}>

      {/* ── STICKY NAV ── */}
      <nav className="sticky-nav fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crown size={18} className="text-[#C9A84C]" />
          <span className="font-black text-sm tracking-[0.2em] uppercase gold-text">Mecha Turbo</span>
        </div>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs font-black tracking-wider"
        >
          <ShoppingCart size={14} />
          <span className="hidden md:inline">Comprar Agora</span>
          <span className="md:hidden">Comprar</span>
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src="/hero.jpeg" alt="Hero" fill className="object-cover object-top" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,11,8,0.82) 0%, rgba(13,11,8,0.72) 40%, rgba(13,11,8,0.97) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,11,8,0.95) 0%, rgba(13,11,8,0.7) 40%, rgba(13,11,8,0.2) 70%, rgba(13,11,8,0.0) 100%)" }} />
        </div>

        {/* Badge */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
          <div className="badge mb-6 animate-on-scroll">✦ Lançamento Oficial ✦</div>

          <h1 className="animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            <span className="block gold-shimmer">O Guia</span>
            <span className="block text-white">Definitivo para</span>
            <span className="block gold-shimmer">Cabelos de</span>
            <span className="block text-white italic" style={{ fontFamily: "'Playfair Display', serif" }}>Rainha</span>
          </h1>

          <p className="animate-on-scroll text-base md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
            Descubra os segredos para ter a verdadeira coroa: um cabelo saudável, radiante e digno de uma rainha — todos os dias.
          </p>

          {/* Countdown */}
          <div className="animate-on-scroll flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-widest">
              <Clock size={14} />
              <span>Oferta especial expira em:</span>
            </div>
            <Countdown />
          </div>

          {/* Price + CTA */}
          <div className="animate-on-scroll flex flex-col items-center gap-4">
            <div className="flex items-baseline gap-3">
              <span className="price-original text-lg">R$ 29,90</span>
              <span className="text-4xl md:text-5xl font-black gold-text">R$ 19,99</span>
            </div>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button flex items-center gap-3 px-10 md:px-14 py-4 md:py-5 rounded-full text-sm md:text-base font-black tracking-widest pulse-glow"
            >
              <ShoppingCart size={20} />
              COMPRAR AGORA
              <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Lock size={12} />
              <span>Pagamento 100% seguro • Acesso imediato</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce">
          <span className="text-white/30 text-[10px] uppercase tracking-widest">Rolar</span>
          <ChevronDown size={20} className="text-[#C9A84C]" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="py-6 overflow-hidden" style={{ background: "#0D0B08", borderTop: "1px solid rgba(201,168,76,0.15)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <MarqueeRow />
        <MarqueeRow reverse />
      </section>

      {/* ── PRODUCT SHOWCASE ── */}
      <section className="py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll flex justify-center">
            <div className="relative float-animation">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)", transform: "scale(1.1)" }} />
              <Image
                src="/apostila-vip.jpeg"
                alt="Apostila VIP Semana Mecha Turbo"
                width={420}
                height={560}
                className="relative rounded-2xl shadow-2xl"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="animate-on-scroll flex flex-col gap-6">
            <div className="badge w-fit">Apostila VIP</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              <span className="text-white">Semana</span>{" "}
              <span className="gold-text">Mecha Turbo</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              A apostila VIP completa de <strong className="text-white">Débora Martins</strong> — o método que está revolucionando a carreira de cabeleireiras em todo o Brasil.
            </p>
            <div className="gold-divider" />
            <ul className="flex flex-col gap-4">
              {["Técnicas de balayage do zero ao avançado", "Mechas perfeitas sem tonalizar", "Mapa completo de clareamento", "Especial para profissionais e iniciantes", "Material rico com fotos e esquemas detalhados"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── BENEFITS GRID ── */}
      <section className="py-24 px-4 md:px-8" style={{ background: "linear-gradient(to bottom, #0D0B08, #100E0A, #0D0B08)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-4 block">O que você recebe</span>
            <h2 className="text-4xl md:text-6xl font-black">
              <span className="text-white">Tudo que</span>{" "}
              <span className="gold-text">você precisa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="benefit-card rounded-2xl p-6 animate-on-scroll card-hover" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(201,168,76,0.15)" }}>
                  <b.icon size={22} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUS SECTION ── */}
      <section className="py-24 md:py-36 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll flex flex-col gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-4 block">Bônus Exclusivos</span>
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  <span className="gold-text">3 E-Books</span>
                  <span className="text-white block">gratuitos incluídos</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Além da apostila completa, você recebe 3 materiais extras avaliados em mais de R$ 231 — totalmente grátis.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {BONUSES.map((bonus, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{bonus.title}</span>
                    </div>
                    <span className="text-[#C9A84C] font-bold text-sm flex-shrink-0 ml-4">{bonus.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">Valor total:</span>
                  <span className="price-original text-sm">R$ 230,90</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold">Hoje por apenas:</span>
                  <span className="text-3xl font-black gold-text">R$ 19,99</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll flex justify-center">
              <div className="relative float-animation" style={{ animationDelay: "1s" }}>
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)", transform: "scale(1.15)" }} />
                <Image
                  src="/bonus.jpeg"
                  alt="3 E-Books Bônus Mecha Turbo"
                  width={480}
                  height={360}
                  className="relative rounded-2xl shadow-2xl"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE 2 ── */}
      <section className="py-6 overflow-hidden" style={{ borderTop: "1px solid rgba(201,168,76,0.1)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <MarqueeRow reverse />
        <MarqueeRow />
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-36 px-4 md:px-8" style={{ background: "#100E0A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-4 block">Depoimentos</span>
            <h2 className="text-4xl md:text-6xl font-black">
              <span className="text-white">O que as</span>{" "}
              <span className="gold-text">alunas dizem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card rounded-2xl p-6 animate-on-scroll card-hover" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} size={14} fill="#C9A84C" className="text-[#C9A84C]" />
                  ))}
                </div>
                <blockquote className="text-white/75 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</blockquote>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <div className="inline-flex items-center gap-2 text-white/50 text-sm">
              <Users size={16} />
              <span>+2.400 alunas já transformaram suas carreiras</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 md:py-40 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/salon-bg.png" alt="Salon background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,11,8,0.97) 0%, rgba(13,11,8,0.85) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center animate-on-scroll">
          <Crown size={48} className="text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Pronta para ter</span>
            <br />
            <span className="gold-shimmer">cabelos de rainha?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Junte-se a mais de 2.400 mulheres que já descobriram os segredos das mechas perfeitas. O investimento é de apenas <strong className="text-white">R$ 19,99</strong> e os resultados duram para sempre.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button flex items-center gap-3 px-12 md:px-16 py-5 md:py-6 rounded-full text-base md:text-lg font-black tracking-widest pulse-glow"
            >
              <ShoppingCart size={22} />
              COMPRAR AGORA — R$ 19,99
              <ArrowRight size={22} />
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-white/40 text-xs">
              <span className="flex items-center gap-1.5"><Lock size={12} /> Pagamento Seguro</span>
              <span className="flex items-center gap-1.5"><Zap size={12} /> Acesso Imediato</span>
              <span className="flex items-center gap-1.5"><Shield size={12} /> Satisfação Garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-4 md:px-8 text-center" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Crown size={16} className="text-[#C9A84C]" />
            <span className="font-black text-sm tracking-[0.2em] uppercase gold-text">Mecha Turbo</span>
          </div>
          <p className="text-white/30 text-xs">© 2025 Débora Martins — Semana Mecha Turbo. Todos os direitos reservados.</p>
          <p className="text-white/20 text-[10px]">Este produto é digital e entregue imediatamente após confirmação do pagamento.</p>
        </div>
      </footer>
    </main>
  );
}
