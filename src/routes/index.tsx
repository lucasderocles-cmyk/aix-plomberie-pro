import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Wrench,
  Droplets,
  Flame,
  Bath,
  Search,
  ShieldCheck,
  Clock,
  Award,
  MapPin,
  Mail,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-plumber.jpg";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.metaTitle },
      {
        name: "description",
        content: siteConfig.metaDescription,
      },
      { property: "og:title", content: siteConfig.ogTitle },
      {
        property: "og:description",
        content: siteConfig.ogDescription,
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const PHONE = siteConfig.phoneDisplay;
const PHONE_TEL = siteConfig.phoneTel;

const services = [
  {
    icon: Droplets,
    title: "Dépannage Urgent",
    desc: "Intervention sous 1h pour fuites, débouchages et pannes à Aix et alentours.",
    tag: "Disponibilité 24/7",
  },
  {
    icon: Bath,
    title: "Rénovation SDB",
    desc: "Conception sur-mesure de salles de bain modernes, de la plomberie aux sanitaires haut de gamme.",
    tag: "Clé en main",
  },
  {
    icon: Flame,
    title: "Chauffage & Chauffe-eau",
    desc: "Installation et entretien de chaudières gaz, pompes à chaleur et ballons d'eau chaude.",
    tag: "Certifié RGE",
  },
  {
    icon: Search,
    title: "Recherche de Fuite",
    desc: "Détection non destructive par caméra thermique pour localiser précisément l'origine du sinistre.",
    tag: "Sans dégât",
  },
  {
    icon: Wrench,
    title: "Installation Sanitaires",
    desc: "Pose de WC, robinetterie, éviers, adoucisseurs et raccordements pour vos équipements.",
    tag: "Sur-mesure",
  },
  {
    icon: Sparkles,
    title: "Entretien Annuel",
    desc: "Contrats d'entretien pour chaudières et installations afin de prévenir les pannes.",
    tag: "Sérénité",
  },
];

const zones = siteConfig.zones;

const trust = [
  {
    icon: Clock,
    title: "Intervention en 1h",
    desc: "Équipe mobile prête à intervenir 24h/24, 7j/7 sur tout le Pays d'Aix.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie Décennale",
    desc: "Toutes nos installations sont couvertes par une assurance professionnelle pour 10 ans.",
  },
  {
    icon: Award,
    title: "Artisan Certifié",
    desc: "15 ans d'expérience et certifications RGE pour des travaux conformes et durables.",
  },
];

function Home() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-brand-navy">
      {/* Sticky mobile call CTA */}
      <a
        href={PHONE_TEL}
        className="fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-2 bg-brand-blue text-primary-foreground px-5 py-3 rounded-full shadow-elegant ring-2 ring-brand-blue/30"
      >
        <Phone className="size-4" />
        <span className="font-semibold text-sm">Appeler</span>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="size-10 bg-brand-blue rounded-lg flex items-center justify-center text-primary-foreground font-display font-extrabold">
              {siteConfig.logoLetter}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-lg tracking-tight uppercase">
                {siteConfig.companyName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {siteConfig.tagline}
              </span>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
            <a href="#services" className="hover:text-brand-blue transition-colors">
              Services
            </a>
            <a href="#expertise" className="hover:text-brand-blue transition-colors">
              Expertise
            </a>
            <a href="#zones" className="hover:text-brand-blue transition-colors">
              Zones
            </a>
            <a href="#contact" className="hover:text-brand-blue transition-colors">
              Contact
            </a>
            <a
              href={PHONE_TEL}
              className="bg-brand-navy text-primary-foreground px-5 py-3 rounded-full hover:bg-brand-blue transition-colors inline-flex items-center gap-2"
            >
              <Phone className="size-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
              </span>
              Disponible 24/7 à {siteConfig.city}
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-balance">
              {siteConfig.heroTitlePrefix}{" "}
              <span className="text-brand-blue">{siteConfig.heroTitleHighlight}</span>{" "}
              {siteConfig.heroTitleSuffix}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty">
              {siteConfig.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-brand-blue text-primary-foreground px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:scale-[1.02] transition-transform shadow-soft"
              >
                Demander un devis gratuit
              </a>
              <a
                href={PHONE_TEL}
                className="bg-card border border-border px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-sm hover:bg-surface-muted transition-colors inline-flex items-center gap-2"
              >
                <Phone className="size-5" />
                {PHONE}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-blue" /> Devis gratuit
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-blue" /> Garantie décennale
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-blue" /> Intervention 1h
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt={`Artisan plombier ${siteConfig.companyName} intervenant à ${siteConfig.city}`}
              width={1216}
              height={1408}
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-elegant border border-border max-w-[240px]">
              <div className="text-brand-blue font-display text-4xl font-extrabold">
                {siteConfig.yearsExperience}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1">
                Années d'expérience artisanale
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand-navy text-primary-foreground px-4 py-3 rounded-2xl shadow-elegant hidden md:flex items-center gap-2">
              <ShieldCheck className="size-5 text-brand-accent" />
              <span className="text-xs font-bold uppercase tracking-wider">Décennale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-brand-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em]">
                Nos services
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
                Une expertise complète pour votre habitat
              </h2>
              <p className="text-slate-300 text-lg">
                De la fuite urgente à la rénovation complète, nous prenons en charge l'ensemble
                de vos besoins en plomberie et chauffage.
              </p>
            </div>
            <a
              href="#contact"
              className="text-brand-accent font-bold border-b-2 border-brand-accent/30 hover:border-brand-accent transition-all pb-1"
            >
              Demander un devis →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-accent hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="size-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 text-brand-accent">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">{s.desc}</p>
                <div className="w-full h-px bg-white/10 mb-4" />
                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent/80 group-hover:text-brand-accent transition-colors">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Expertise */}
      <section id="expertise" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em]">
              Pourquoi {siteConfig.companyName}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              L'exigence d'un artisan, la rigueur d'un professionnel.
            </h2>
            <p className="text-muted-foreground text-lg">
              Depuis plus de {siteConfig.yearsExperience.replace("+", "")} ans, nous mettons notre
              savoir-faire au service de la qualité, la transparence et la durabilité de chaque
              chantier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trust.map((t) => (
              <div
                key={t.title}
                className="p-8 rounded-3xl bg-card border border-border shadow-soft"
              >
                <div className="size-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                  <t.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{t.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section id="zones" className="py-24 px-6 bg-surface-muted border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em]">
              Zones d'intervention
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
              Nous intervenons sur tout {siteConfig.region}.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Basés à {siteConfig.city}, nous nous déplaçons dans un rayon de 20 km autour de la
              ville pour vous garantir un service rapide.
            </p>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-3 bg-brand-navy text-primary-foreground px-6 py-4 rounded-xl font-bold hover:bg-brand-blue transition-colors"
            >
              <Phone className="size-5" /> {PHONE}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {zones.map((z) => (
              <div
                key={z}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <MapPin className="size-4 text-brand-blue shrink-0" />
                <span className="font-medium text-sm">{z}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em]">
              Témoignages
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-balance">
              La confiance de nos clients.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {siteConfig.testimonials.map((t) => (
              <figure
                key={t.n}
                className="p-8 rounded-3xl bg-card border border-border shadow-soft flex flex-col"
              >
                <blockquote className="text-foreground/80 leading-relaxed text-pretty flex-1">
                  « {t.q} »
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-display font-bold">{t.n}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {t.c}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-brand-navy text-primary-foreground">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em]">
                Contact
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance">
                Parlons de votre projet.
              </h2>
              <p className="text-slate-300 text-lg">
                Décrivez-nous votre besoin, nous vous répondons sous 2 heures avec un devis
                clair et gratuit.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href={PHONE_TEL}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-accent transition-colors"
              >
                <div className="size-12 bg-brand-accent/15 text-brand-accent rounded-xl flex items-center justify-center">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">
                    Appel direct
                  </div>
                  <div className="text-lg font-bold">{PHONE}</div>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-accent transition-colors"
              >
                <div className="size-12 bg-brand-accent/15 text-brand-accent rounded-xl flex items-center justify-center">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">
                    Email
                  </div>
                  <div className="text-lg font-bold">{siteConfig.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="size-12 bg-brand-accent/15 text-brand-accent rounded-xl flex items-center justify-center">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">
                    Adresse
                  </div>
                  <div className="text-lg font-bold">
                    {siteConfig.city}, {siteConfig.postalCode}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nom complet">
                <input
                  required
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-slate-500 focus:border-brand-accent focus:outline-none transition-colors"
                />
              </Field>
              <Field label="Téléphone">
                <input
                  required
                  type="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-slate-500 focus:border-brand-accent focus:outline-none transition-colors"
                />
              </Field>
            </div>
            <Field label="Type de demande">
              <select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground focus:border-brand-accent focus:outline-none transition-colors">
                <option className="bg-brand-navy">Dépannage urgent</option>
                <option className="bg-brand-navy">Rénovation salle de bain</option>
                <option className="bg-brand-navy">Chauffe-eau / Chaudière</option>
                <option className="bg-brand-navy">Recherche de fuite</option>
                <option className="bg-brand-navy">Autre prestation</option>
              </select>
            </Field>
            <Field label="Votre message">
              <textarea
                required
                rows={5}
                placeholder="Décrivez votre besoin..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-slate-500 focus:border-brand-accent focus:outline-none transition-colors resize-none"
              />
            </Field>
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-brand-accent text-brand-navy font-bold rounded-xl hover:brightness-110 transition-all"
            >
              {sent ? "✓ Demande envoyée" : "Envoyer ma demande"}
            </button>
            {sent && (
              <p className="text-sm text-brand-accent">
                Merci, nous vous recontactons sous 2 heures.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="size-9 bg-brand-blue rounded-lg flex items-center justify-center text-primary-foreground font-display font-extrabold">
              {siteConfig.logoLetter}
            </div>
            <div>
              <div className="font-display font-bold">{siteConfig.companyName} Plomberie</div>
              <div className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} — {siteConfig.city}. Tous droits réservés.
              </div>
            </div>
          </div>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <a href="#" className="hover:text-brand-blue transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
        {label}
      </span>
      {children}
    </label>
  );
}
