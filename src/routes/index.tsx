import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Smile,
  Stethoscope,
  Braces,
  Wrench,
  ShieldCheck,
  Star,
  GraduationCap,
  Quote,
  Award,
  BadgeCheck,
  Layers,
  Crown,
  Syringe,
} from "lucide-react";
import doctor from "@/assets/doctor-treatment.jpg.asset.json";
import heroClinic from "@/assets/hero-clinic.jpg.asset.json";
import drRimshaCert from "@/assets/dr-rimsha-ortho-cert.jpg.asset.json";
import logo from "@/assets/cure-logo.png.asset.json";
import rctCase from "@/assets/rct-case.jpeg.asset.json";
import smileCase from "@/assets/smile-case.jpeg.asset.json";
import cleaningCase from "@/assets/cleaning-case.jpeg.asset.json";
import orthoTransformation from "@/assets/ortho-transformation.jpeg.asset.json";

const PHONE = "+923418711752";
const PHONE_DISPLAY = "+92 341 8711752";
const WA_DISPLAY = "+92 341 8711752";
const FB_LINK = "https://www.facebook.com/share/14qB9F6qjUJ/?mibextid=wwXIfr";
const ADDRESS =
  "KS-2143 Imam Colony L Block, 11 Sector, Block 1 Orangi Town, Karachi, 75800, Pakistan";
const HOURS = "Open Daily · 6:00 PM – 10:00 PM";
const MAP_EMBED =
  "https://www.google.com/maps?q=24.9505934,66.9822971&z=17&output=embed";
const MAP_LINK = "https://www.google.com/maps?q=24.9505934,66.9822971";

const services = [
  { icon: Sparkles, name: "Teeth Whitening", desc: "Professional in-clinic whitening for a brighter, confident smile." },
  { icon: Smile, name: "Scaling & Polishing", desc: "Deep cleaning that removes plaque and stains for healthy gums." },
  { icon: Wrench, name: "Dental Implants", desc: "Permanent, natural-looking tooth replacement built to last." },
  { icon: Layers, name: "Bridges", desc: "Fixed bridges that close gaps and restore your natural bite." },
  { icon: Crown, name: "Crowns / Caps", desc: "Strong, aesthetic crowns that protect and rebuild damaged teeth." },
  { icon: ShieldCheck, name: "Root Canal (RCT)", desc: "Painless root canal treatment performed with certified endo expertise." },
  { icon: Stethoscope, name: "Partial & Complete Dentures", desc: "Comfortable, custom-fitted dentures for full chewing confidence." },
  { icon: Braces, name: "Braces", desc: "Orthodontic braces by a certified orthodontist — installment plans available." },
  { icon: Smile, name: "Clear Aligners", desc: "Discreet, removable aligners that straighten teeth invisibly." },
  { icon: Syringe, name: "Extraction", desc: "Safe, gentle tooth extractions including difficult wisdom teeth." },
];

const googleReviews = [
  { name: "Khuzaima Zaki", when: "a day ago", stars: 5, text: "I am very happy with my bridge treatment at Cure Dental Center. The clinic is clean, staff is friendly and Dr. Rimsha explained everything very well. Great service and great result. Thank you 😊" },
  { name: "Alisha Sami", when: "a week ago", stars: 5, text: "The experience is really good, the environment is perfect and friendly behavior ☺️" },
  { name: "ayesha imran", when: "a week ago", stars: 5, text: "I had a fantastic experience here getting a root canal and a cap done. The clinic is clean, well-sanitized, and clearly prioritizes patient hygiene, which immediately put me at ease. The dentist was incredibly gentle and patient." },
  { name: "Saman Ayub", when: "a week ago", stars: 5, text: "I had my scaling, root canal, and dental caps done by Dr. Rimsha. Everything was handled professionally, and the clinic was impressively clean. The instruments and equipment used during the treatment were also exceptionally clean — I am rating my experience five-star!" },
  { name: "Sadquain Salahuddin", when: "a week ago", stars: 5, text: "My experience was excellent! I have done my root canal and crown from Dr. Rimsha — the entire process was pain-free. Sterilized instruments, hygiene and environment were all good!!" },
  { name: "Nazia Tariq", when: "a week ago", stars: 5, text: "Very nice experience with affordable fees for my first time visit in Cure Dental Care clinic." },
  { name: "Kainat Imroz", when: "a week ago", stars: 5, text: "Stress-free! They made sure I was completely comfortable throughout the whole procedure." },
  { name: "Kainat Zakaria", when: "a week ago", stars: 5, text: "Highly recommended... Best services... Kind doctor gives proper advice and treats well... Had a great experience..." },
  { name: "talha Khan", when: "a week ago", stars: 5, text: "Excellent root canal experience! I recently got my root canal treatment done at CURE Dental Care, and I couldn't be happier with the results. The team made the whole process smooth and painless." },
  { name: "Ayesha Maqbool", when: "a week ago", stars: 5, text: "Had a great experience getting my scaling done! The procedure was super smooth, and the clinic environment was very clean and pleasant." },
  { name: "shimza shykh", when: "a week ago", stars: 5, text: "I had an amazing experience at CURE Dental Care. The dentist took time to explain my treatment clearly before starting. The clinic is clean, modern, and they use proper sterilization. Pricing was transparent with no hidden charges. Highly recommend if you're looking for quality dental care." },
  { name: "Muzna Aslam", when: "a week ago", stars: 5, text: "I am getting my braces treatment at Cure Dental Care with Dr. Rimsha, and I am very happy with my experience 🥳. Dr. Rimsha and her staff are very professional and supportive. The appointment scheduling has always been smooth." },
  { name: "warood Ather", when: "a week ago", stars: 5, text: "Had a great experience there. A special thanks to the doctor for the excellent treatment, kindness, and patience. They explained every procedure clearly and made me feel comfortable." },
  { name: "Ghori Khan", when: "a week ago", stars: 5, text: "⭐⭐⭐⭐⭐ I had a wonderful experience here. The service was excellent, the staff was very friendly and professional, and everything was handled with great care.", badge: "Local Guide" },
  { name: "Affan Aziz", when: "a week ago", stars: 5, text: "Boht zabardast treatment h mashallah se." },
  { name: "haris akbar", when: "a week ago", stars: 5, text: "👍" },
  { name: "Mavia Al baloshi", when: "a year ago", stars: 5, text: "It will be very soon 👍" },
  { name: "fatiha ansari", when: "a week ago", stars: 5, text: "" },
  { name: "Tuba Sabir", when: "a week ago", stars: 5, text: "" },
  { name: "Warda Jamshed", when: "a week ago", stars: 5, text: "" },
  { name: "Rashida Rashid", when: "a week ago", stars: 5, text: "" },
];

const AVATAR_TONES = [
  "bg-primary/15 text-primary",
  "bg-accent/20 text-accent-foreground",
  "bg-amber-500/15 text-amber-600",
  "bg-emerald-500/15 text-emerald-600",
  "bg-sky-500/15 text-sky-600",
  "bg-rose-500/15 text-rose-600",
];

const patientCases = [

  {
    img: smileCase.url,
    title: "Smile Restoration",
    treatment: "Composite Restoration",
    quote: "Dr. Rimsha fixed my broken front tooth so beautifully — it looks completely natural. Highly recommended!",
    name: "Ahmed R.",
  },
  {
    img: cleaningCase.url,
    title: "Scaling & Deep Cleaning",
    treatment: "Full Mouth Cleaning",
    quote: "Years of stains gone in one visit. Painless, professional and truly caring staff.",
    name: "Fatima S.",
  },
  {
    img: rctCase.url,
    title: "Root Canal Treatment",
    treatment: "Endodontic Therapy",
    quote: "No pain during the entire root canal. Saved my tooth from extraction — thank you Cure Dental!",
    name: "Bilal M.",
  },
];

const achievements = [
  {
    name: "Dr. Rimsha Nehal",
    image: doctor.url,
    certImage: drRimshaCert.url,
    title: "Comprehensive Certification in Orthodontics",
    institute: "IIOCO —(Irfan's institute of clinical orthodontics",
    date: "2024",
  },
];

type Transformation = {
  title: string;
  caption: string;
  treatment: string;
  duration?: string;
  // Provide either a pre-combined vertical/horizontal strip OR three individual step images
  stripImage?: string;
  steps?: { label: string; img: string }[];
};

const transformations: Transformation[] = [
  {
    title: "Complete Orthodontic Transformation",
    caption: "Complete Orthodontic Transformation with Braces",
    treatment: "Fixed Metal Braces",
    duration: "18 months",
    stripImage: orthoTransformation.url,
  },
];

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#transformations", label: "Before & After" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cure Dental Care & Medical Centre — Dr. Rimsha Nehal, Karachi" },
      {
        name: "description",
        content:
          "Trusted dental clinic in Orangi Town, Karachi. Braces, whitening, implants, root canal and orthodontics by Dr. Rimsha Nehal (BDS, KMDC).",
      },
      { property: "og:title", content: "Cure Dental Care & Medical Centre — Dr. Rimsha Nehal, Karachi" },
      {
        property: "og:description",
        content: "Trusted dental clinic in Orangi Town, Karachi. Braces, whitening, implants, root canal and orthodontics by Dr. Rimsha Nehal (BDS, KMDC).",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://curedentalcare.lovable.app${heroClinic.url}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [open, setOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const written = googleReviews.filter((r) => r.text.trim().length > 0);
  const visibleReviews = showAllReviews ? written : written.slice(0, 6);


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo.url} alt="Cure Dental Care logo" className="w-11 h-11 object-contain" />
            <div className="leading-tight">
              <div className="font-bold text-sm sm:text-base">Cure Dental Care</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">& Medical Centre</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Trusted Dental Care in Karachi
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Smile with <span className="text-primary">confidence.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Cure Dental Care & Medical Centre offers modern, gentle dentistry — from braces and whitening to implants and root canals — led by Dr. Rimsha Nehal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5" /> Call {PHONE_DISPLAY}
              </a>
              <a
                href={FB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" /> Follow on Facebook
              </a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2.5 text-sm">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span className="text-muted-foreground">WhatsApp:</span>
              <span className="font-semibold">{WA_DISPLAY}</span>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 font-semibold text-foreground">5.0</span>
              </div>
              <div>Google Reviews</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={heroClinic.url}
              alt="Modern dental treatment room at Cure Dental Care"
              loading="eager"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] ring-1 ring-border"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { value: "5.0★", label: "Google Rating" },
            { value: "23+", label: "Verified Reviews" },
            { value: "10", label: "Dental Services" },
            { value: "Certified", label: "Endo & Ortho" },
          ].map((s) => (
            <div key={s.label} className="py-6 px-3 text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* About */}
      <section id="about" className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl" />
            <img
              src={doctor.url}
              alt="Dr. Rimsha Nehal - Dental Surgeon"
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] ring-1 ring-border"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Meet Your Dentist</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Dr. Rimsha Nehal</h2>
            <div className="mt-2 flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">BDS (KMDC) · C. Endo · C. Ortho · RDS</span>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Dental Surgeon and Orthodontist committed to gentle, precise care. Dr. Rimsha specialises in orthodontic treatment, endodontics and cosmetic dentistry, blending clinical expertise with a warm, patient-first approach.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "500+", l: "Happy Smiles" },
                { n: "5★", l: "Google Rated" },
                { n: "20%", l: "Off Orthodontics" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-card border border-border p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-primary bg-card p-4 text-sm italic text-muted-foreground">
              "Our mission is to deliver trusted dental care tailored for you — so every patient walks out smiling."
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              <Award className="w-4 h-4" /> Certifications & Recognitions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Doctor's Achievements</h2>
            <p className="mt-4 text-muted-foreground">
              Continued learning and certified expertise — because your smile deserves the best.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {achievements.map((a) => (
              <article
                key={a.name + a.title}
                className="group relative flex flex-col rounded-3xl bg-card border border-border overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all w-full max-w-md mx-auto"
              >
                <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold shadow-lg ring-2 ring-background">
                  <BadgeCheck className="w-3.5 h-3.5" /> Certified
                </div>
                <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/40 flex items-center justify-center p-4">
                  <img
                    src={a.certImage}
                    alt={`${a.name} — ${a.title}`}
                    loading="lazy"
                    className="w-full h-auto max-h-[420px] object-contain rounded-xl shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/30 shadow-md -mt-14 bg-card"
                  />
                  <div className="mt-3 font-bold text-lg">{a.name}</div>
                  <div className="text-xs text-muted-foreground">Certified {a.date}</div>
                  <h3 className="mt-3 font-semibold text-primary leading-snug">{a.title}</h3>
                  <div className="mt-2 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 shrink-0 text-primary/70" />
                    <span className="leading-relaxed">{a.institute}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Patient Transformations — Before & After */}
      <section id="transformations" className="py-20 bg-gradient-to-b from-secondary/30 via-background to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              <Sparkles className="w-4 h-4" /> Before &amp; After
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Real Smiles, Real Results</h2>
            <p className="mt-4 text-muted-foreground">
              Life-changing orthodontic transformations by Dr. Rimsha Nehal — from crooked to confident.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-stretch">
            {transformations.map((t) => {
              const steps =
                t.steps ??
                [
                  { label: "Before", img: t.stripImage! },
                  { label: "During Treatment", img: t.stripImage! },
                  { label: "After", img: t.stripImage! },
                ];
              const isStrip = !t.steps && !!t.stripImage;
              return (
                <article
                  key={t.title}
                  className="group rounded-3xl bg-card border border-border shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col"
                >
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/40">
                    {isStrip ? (
                      <div className="relative rounded-2xl overflow-hidden bg-background shadow-md">
                        <img
                          src={t.stripImage}
                          alt={t.caption}
                          loading="lazy"
                          className="w-full h-auto object-contain max-h-[560px] mx-auto"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {steps.map((s) => (
                          <div key={s.label} className="relative rounded-2xl overflow-hidden bg-background shadow-md">
                            <img
                              src={s.img}
                              alt={s.label}
                              loading="lazy"
                              className="w-full h-48 sm:h-56 object-cover"
                            />
                            <div className="absolute top-2 left-2 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 shadow">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      {["Before", "During", "After"].map((label, i) => (
                        <div key={label} className="flex items-center justify-center gap-1.5 text-xs sm:text-sm">
                          <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground grid place-items-center text-[10px] font-bold shadow">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-foreground">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-foreground">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.caption}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold">
                        <Braces className="w-3.5 h-3.5" /> {t.treatment}
                      </span>
                      {t.duration && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 text-accent-foreground px-3 py-1 text-xs font-semibold">
                          <Clock className="w-3.5 h-3.5" /> {t.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground italic">
            * Results may vary from patient to patient.
          </p>

          <div className="mt-8 text-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" /> Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services */}

      <section id="services" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Complete dental care under one roof</h2>
            <p className="mt-4 text-muted-foreground">
              Modern treatments, professional standards, and gentle care for the whole family.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="group rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-primary to-accent p-8 sm:p-10 text-primary-foreground grid md:grid-cols-[1fr_auto] gap-6 items-center shadow-xl">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider opacity-80">Limited Offer</div>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2">20% OFF Orthodontic Treatment</h3>
              <p className="mt-2 opacity-90">Get your braces done by a professional orthodontist. Monthly installment plans available.</p>
            </div>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-background text-primary px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              <Phone className="w-5 h-5" /> Call to Claim
            </a>
          </div>
        </div>
      </section>

      {/* Patient Reviews / Cases */}
      <section id="reviews" className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Patient Results & Reviews</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Real cases. Real smiles.</h2>
            <p className="mt-4 text-muted-foreground">
              A closer look at our clinical work and what our patients say after treatment.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientCases.map((c) => (
              <article
                key={c.title}
                className="group flex flex-col rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
                    {c.treatment}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg">{c.title}</h3>
                  <div className="relative mt-3 flex-1">
                    <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                    <p className="pl-6 text-sm text-muted-foreground italic leading-relaxed">"{c.quote}"</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border text-sm font-semibold">— {c.name}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={FB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Facebook className="w-5 h-5" /> See more on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section id="google-reviews" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              What Our Patients Say
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Rated 5.0 on Google</h2>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm">
              <span className="text-4xl font-extrabold leading-none">5.0</span>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Based on {googleReviews.length} Google reviews
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((r, i) => (
              <article
                key={r.name + i}
                className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <header className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-bold ${
                      AVATAR_TONES[i % AVATAR_TONES.length]
                    }`}
                    aria-hidden="true"
                  >
                    {r.name.trim().charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{r.name}</div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span>{r.when}</span>
                      {r.badge && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                          {r.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </header>
                <div className="mt-4 flex items-center gap-0.5">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="relative mt-3 flex-1">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/15" />
                  <p className="pl-6 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {written.length > 6 && (
              <button
                type="button"
                onClick={() => setShowAllReviews((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/5"
              >
                {showAllReviews ? "Show fewer reviews" : `Read all ${written.length} reviews`}
              </button>
            )}
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <Star className="w-5 h-5" /> Review us on Google
            </a>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-background via-secondary/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Gallery</div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">A closer look at our care</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: smileCase.url, span: "col-span-2 row-span-2", alt: "Smile restoration before and after" },
              { src: rctCase.url, span: "", alt: "Root canal treatment case" },
              { src: cleaningCase.url, span: "", alt: "Scaling and polishing result" },
              { src: doctor.url, span: "", alt: "Dr. Rimsha Nehal treating a patient" },

            ].map((img, i) => (
              <div
                key={i}
                className={`${img.span} overflow-hidden rounded-2xl shadow-md ring-1 ring-border group`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Map */}
      <section id="contact" className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Visit Us</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Get in touch & find us</h2>
          </div>
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Address", body: ADDRESS, link: MAP_LINK, linkLabel: "Open in Maps" },
                { icon: Phone, title: "Phone", body: PHONE_DISPLAY, link: `tel:${PHONE}`, linkLabel: "Call now" },
                { icon: MessageCircle, title: "WhatsApp", body: `${WA_DISPLAY} — save & message us directly` },
                { icon: Clock, title: "Hours", body: HOURS },
                { icon: Facebook, title: "Facebook", body: "CURE Dental Care & Medical Centre", link: FB_LINK, linkLabel: "Visit our page" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold">{c.title}</div>
                    <div className="text-sm text-muted-foreground mt-0.5 break-words">{c.body}</div>
                    {c.link && (
                      <a
                        href={c.link}
                        target={c.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm font-semibold text-primary hover:underline"
                      >
                        {c.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a
                  href={FB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] text-white px-6 py-3 font-semibold hover:opacity-90 transition-all"
                >
                  <Facebook className="w-5 h-5" /> Follow
                </a>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-border min-h-[400px]">
              <iframe
                title="Cure Dental Care location"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-11 h-11 rounded-xl bg-white p-1 grid place-items-center shadow-md"><img src={logo.url} alt="Cure Dental Care logo" className="w-full h-full object-contain" /></div>
              <div>
                <div className="font-bold">Cure Dental Care</div>
                <div className="text-xs opacity-80">& Medical Centre</div>
              </div>
            </div>
            <p className="mt-4 text-sm opacity-80 leading-relaxed">
              Trusted dental care tailored for you. Smile with confidence.
            </p>
            <a
              href={FB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-semibold transition-colors"
            >
              <Facebook className="w-4 h-4" /> Facebook Page
            </a>
          </div>
          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm opacity-80">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:opacity-100 hover:underline">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📞 {PHONE_DISPLAY}</li>
              <li>💬 WhatsApp: {WA_DISPLAY}</li>
              <li className="leading-relaxed">📍 {ADDRESS}</li>
              <li>🕒 {HOURS}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs opacity-70 text-center">
            © {new Date().getFullYear()} Cure Dental Care & Medical Centre. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Call button */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call clinic"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-4 pr-5 py-3 shadow-2xl hover:scale-105 transition-transform"
      >
        <span className="relative grid place-items-center w-8 h-8 rounded-full bg-white/20">
          <Phone className="w-4 h-4" />
          <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
        </span>
        <span className="font-semibold text-sm">Call Now</span>
      </a>
    </div>
  );
}
