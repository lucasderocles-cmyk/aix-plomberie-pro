import { r as __toESM } from "../_runtime.mjs";
import { t as siteConfig } from "./site-BXVCZAQY.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Phone, c as Flame, d as CircleCheck, f as Bath, i as Search, l as Droplets, n as Sparkles, o as MapPin, p as Award, r as ShieldCheck, s as Mail, t as Wrench, u as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-y3N34cyu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_plumber_default = "/assets/hero-plumber-BXMg0Ywt.jpg";
var PHONE = siteConfig.phoneDisplay;
var PHONE_TEL = siteConfig.phoneTel;
var services = [
	{
		icon: Droplets,
		title: "Dépannage Urgent",
		desc: "Intervention sous 1h pour fuites, débouchages et pannes à Aix et alentours.",
		tag: "Disponibilité 24/7"
	},
	{
		icon: Bath,
		title: "Rénovation SDB",
		desc: "Conception sur-mesure de salles de bain modernes, de la plomberie aux sanitaires haut de gamme.",
		tag: "Clé en main"
	},
	{
		icon: Flame,
		title: "Chauffage & Chauffe-eau",
		desc: "Installation et entretien de chaudières gaz, pompes à chaleur et ballons d'eau chaude.",
		tag: "Certifié RGE"
	},
	{
		icon: Search,
		title: "Recherche de Fuite",
		desc: "Détection non destructive par caméra thermique pour localiser précisément l'origine du sinistre.",
		tag: "Sans dégât"
	},
	{
		icon: Wrench,
		title: "Installation Sanitaires",
		desc: "Pose de WC, robinetterie, éviers, adoucisseurs et raccordements pour vos équipements.",
		tag: "Sur-mesure"
	},
	{
		icon: Sparkles,
		title: "Entretien Annuel",
		desc: "Contrats d'entretien pour chaudières et installations afin de prévenir les pannes.",
		tag: "Sérénité"
	}
];
var zones = siteConfig.zones;
var trust = [
	{
		icon: Clock,
		title: "Intervention en 1h",
		desc: "Équipe mobile prête à intervenir 24h/24, 7j/7 sur tout le Pays d'Aix."
	},
	{
		icon: ShieldCheck,
		title: "Garantie Décennale",
		desc: "Toutes nos installations sont couvertes par une assurance professionnelle pour 10 ans."
	},
	{
		icon: Award,
		title: "Artisan Certifié",
		desc: "15 ans d'expérience et certifications RGE pour des travaux conformes et durables."
	}
];
function Home() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface text-brand-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: PHONE_TEL,
				className: "fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-2 bg-brand-blue text-primary-foreground px-5 py-3 rounded-full shadow-elegant ring-2 ring-brand-blue/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-sm",
					children: "Appeler"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed top-0 inset-x-0 z-40 bg-surface/80 backdrop-blur-md border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 bg-brand-blue rounded-lg flex items-center justify-center text-primary-foreground font-display font-extrabold",
							children: siteConfig.logoLetter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-extrabold text-lg tracking-tight uppercase",
								children: siteConfig.companyName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: siteConfig.tagline
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "hover:text-brand-blue transition-colors",
								children: "Services"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#expertise",
								className: "hover:text-brand-blue transition-colors",
								children: "Expertise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#zones",
								className: "hover:text-brand-blue transition-colors",
								children: "Zones"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "hover:text-brand-blue transition-colors",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PHONE_TEL,
								className: "bg-brand-navy text-primary-foreground px-5 py-3 rounded-full hover:bg-brand-blue transition-colors inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), PHONE]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "top",
				className: "pt-32 pb-20 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/15 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-brand-blue" })]
								}),
								"Disponible 24/7 à ",
								siteConfig.city
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 text-balance",
							children: [
								siteConfig.heroTitlePrefix,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-blue",
									children: siteConfig.heroTitleHighlight
								}),
								" ",
								siteConfig.heroTitleSuffix
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty",
							children: siteConfig.heroSubtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "bg-brand-blue text-primary-foreground px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:scale-[1.02] transition-transform shadow-soft",
								children: "Demander un devis gratuit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PHONE_TEL,
								className: "bg-card border border-border px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-sm hover:bg-surface-muted transition-colors inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), PHONE]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-brand-blue" }), " Devis gratuit"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-brand-blue" }), " Garantie décennale"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-brand-blue" }), " Intervention 1h"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_plumber_default,
								alt: `Artisan plombier ${siteConfig.companyName} intervenant à ${siteConfig.city}`,
								width: 1216,
								height: 1408,
								className: "w-full aspect-[4/5] object-cover rounded-3xl shadow-elegant"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-elegant border border-border max-w-[240px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-brand-blue font-display text-4xl font-extrabold",
									children: siteConfig.yearsExperience
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1",
									children: "Années d'expérience artisanale"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -top-4 -right-4 bg-brand-navy text-primary-foreground px-4 py-3 rounded-2xl shadow-elegant hidden md:flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-brand-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold uppercase tracking-wider",
									children: "Décennale"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "py-24 bg-brand-navy text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-brand-accent text-xs font-bold uppercase tracking-[0.2em]",
									children: "Nos services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance",
									children: "Une expertise complète pour votre habitat"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-300 text-lg",
									children: "De la fuite urgente à la rénovation complète, nous prenons en charge l'ensemble de vos besoins en plomberie et chauffage."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "text-brand-accent font-bold border-b-2 border-brand-accent/30 hover:border-brand-accent transition-all pb-1",
							children: "Demander un devis →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-accent hover:bg-white/[0.05] transition-all duration-500",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-14 bg-brand-blue/20 rounded-2xl flex items-center justify-center mb-6 text-brand-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl font-bold mb-3",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-slate-400 leading-relaxed mb-6 text-sm",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-px bg-white/10 mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold tracking-widest uppercase text-brand-accent/80 group-hover:text-brand-accent transition-colors",
									children: s.tag
								})
							]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "expertise",
				className: "py-24 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-brand-blue text-xs font-bold uppercase tracking-[0.2em]",
								children: ["Pourquoi ", siteConfig.companyName]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance",
								children: "L'exigence d'un artisan, la rigueur d'un professionnel."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-lg",
								children: [
									"Depuis plus de ",
									siteConfig.yearsExperience.replace("+", ""),
									" ans, nous mettons notre savoir-faire au service de la qualité, la transparence et la durabilité de chaque chantier."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: trust.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 rounded-3xl bg-card border border-border shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "size-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold mb-3",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: t.desc
								})
							]
						}, t.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "zones",
				className: "py-24 px-6 bg-surface-muted border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand-blue text-xs font-bold uppercase tracking-[0.2em]",
							children: "Zones d'intervention"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance",
							children: [
								"Nous intervenons sur tout ",
								siteConfig.region,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-lg mb-8",
							children: [
								"Basés à ",
								siteConfig.city,
								", nous nous déplaçons dans un rayon de 20 km autour de la ville pour vous garantir un service rapide."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: PHONE_TEL,
							className: "inline-flex items-center gap-3 bg-brand-navy text-primary-foreground px-6 py-4 rounded-xl font-bold hover:bg-brand-blue transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
								" ",
								PHONE
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: zones.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-4 rounded-xl bg-card border border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-brand-blue shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-sm",
								children: z
							})]
						}, z))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand-blue text-xs font-bold uppercase tracking-[0.2em]",
							children: "Témoignages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-5xl font-bold mt-3 text-balance",
							children: "La confiance de nos clients."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: siteConfig.testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "p-8 rounded-3xl bg-card border border-border shadow-soft flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "text-foreground/80 leading-relaxed text-pretty flex-1",
								children: [
									"« ",
									t.q,
									" »"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 pt-6 border-t border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display font-bold",
									children: t.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground uppercase tracking-wider mt-1",
									children: t.c
								})]
							})]
						}, t.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "py-24 px-6 bg-brand-navy text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto grid lg:grid-cols-5 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 space-y-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand-accent text-xs font-bold uppercase tracking-[0.2em]",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl md:text-5xl font-bold mt-3 mb-4 text-balance",
								children: "Parlons de votre projet."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-slate-300 text-lg",
								children: "Décrivez-nous votre besoin, nous vous répondons sous 2 heures avec un devis clair et gratuit."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PHONE_TEL,
									className: "flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-accent transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-12 bg-brand-accent/15 text-brand-accent rounded-xl flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-bold uppercase text-slate-400 tracking-widest",
										children: "Appel direct"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-bold",
										children: PHONE
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${siteConfig.email}`,
									className: "flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-brand-accent transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-12 bg-brand-accent/15 text-brand-accent rounded-xl flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-bold uppercase text-slate-400 tracking-widest",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-lg font-bold",
										children: siteConfig.email
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-12 bg-brand-accent/15 text-brand-accent rounded-xl flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-bold uppercase text-slate-400 tracking-widest",
										children: "Adresse"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-lg font-bold",
										children: [
											siteConfig.city,
											", ",
											siteConfig.postalCode
										]
									})] })]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white/[0.04] border border-white/10 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid md:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Nom complet",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "text",
										placeholder: "Jean Dupont",
										className: "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-slate-500 focus:border-brand-accent focus:outline-none transition-colors"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Téléphone",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "tel",
										placeholder: "06 12 34 56 78",
										className: "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-slate-500 focus:border-brand-accent focus:outline-none transition-colors"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Type de demande",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground focus:border-brand-accent focus:outline-none transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											className: "bg-brand-navy",
											children: "Dépannage urgent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											className: "bg-brand-navy",
											children: "Rénovation salle de bain"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											className: "bg-brand-navy",
											children: "Chauffe-eau / Chaudière"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											className: "bg-brand-navy",
											children: "Recherche de fuite"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											className: "bg-brand-navy",
											children: "Autre prestation"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Votre message",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 5,
									placeholder: "Décrivez votre besoin...",
									className: "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-slate-500 focus:border-brand-accent focus:outline-none transition-colors resize-none"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full md:w-auto px-10 py-4 bg-brand-accent text-brand-navy font-bold rounded-xl hover:brightness-110 transition-all",
								children: sent ? "✓ Demande envoyée" : "Envoyer ma demande"
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-brand-accent",
								children: "Merci, nous vous recontactons sous 2 heures."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "py-12 bg-surface border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-9 bg-brand-blue rounded-lg flex items-center justify-center text-primary-foreground font-display font-extrabold",
							children: siteConfig.logoLetter
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display font-bold",
							children: [siteConfig.companyName, " Plomberie"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" — ",
								siteConfig.city,
								". Tous droits réservés."
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-8 text-xs font-medium uppercase tracking-wider text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-brand-blue transition-colors",
							children: "Mentions légales"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-brand-blue transition-colors",
							children: "Confidentialité"
						})]
					})]
				})
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] uppercase font-bold tracking-widest text-slate-400",
			children: label
		}), children]
	});
}
//#endregion
export { Home as component };
