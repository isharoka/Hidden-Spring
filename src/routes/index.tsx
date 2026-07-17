import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import poolImg from "@/assets/pool.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import lodgingImg from "@/assets/lodging.jpg";
import logoImg from "@/assets/logo/logo.png";
import { MapPin, CalendarDays, Users, Search, Waves, UtensilsCrossed, BedDouble, Mountain, Star, Phone, Mail, LogIn } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Hidden Spring Resort — Riverside Nature Retreat in Kumrek, Sikkim" },
      { name: "description", content: "A spring-fed riverside retreat in Kumrek, Rangpo. Natural pools, open-air bar & restaurant, family-friendly lodging, and authentic Sikkimese hospitality." },
      { property: "og:title", content: "Hidden Spring Resort — Kumrek, Sikkim" },
      { property: "og:description", content: "Weekend escapes at a scenic riverside resort in Sikkim." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Amenities />
      <About />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const links = ["Home", "Rooms", "Amenities", "Gallery", "About", "Contact"];
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center transition-transform hover:scale-105">
          <img src={logoImg} alt="Hidden Spring Resort Logo" className="h-16 w-auto rounded-xl shadow-md" />
        </a>
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-2 shadow-sm">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="px-4 py-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary text-primary bg-white/90 backdrop-blur px-5 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            <LogIn className="h-4 w-4" /> Sign In
          </button>
          <button className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-md hover:opacity-90 transition-opacity">
            Book Stay
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Sikkim mountain riverside at sunrise" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 text-center text-white">
        <span className="inline-block rounded-full bg-white/15 backdrop-blur border border-white/25 px-5 py-2 text-sm">
          Kumrek, Rangpo — Just across from Cipla
        </span>
        <h1 className="mt-8 font-display text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight">
          Hidden <span style={{ color: "oklch(0.78 0.12 70)" }}>Spring</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
          A riverside sanctuary in the Sikkim hills — spring-fed pools, open-air dining,
          and warm Sikkimese hospitality tucked into the mountains.
        </p>

        <div className="mt-12 mx-auto max-w-3xl rounded-2xl bg-white p-2 shadow-2xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-2 text-left">
          <Field icon={<MapPin className="h-4 w-4" />} placeholder="Destination" defaultValue="Kumrek, Sikkim" />
          <Field icon={<CalendarDays className="h-4 w-4" />} type="date" />
          <Field icon={<Users className="h-4 w-4" />} placeholder="2 Guests" />
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
            <Search className="h-4 w-4" /> Search
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/80">
          <span>Popular:</span>
          {["Weekend Retreat", "Family Suite", "River View"].map((t) => (
            <a key={t} href="#" className="underline underline-offset-4 hover:text-white">{t}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ icon, placeholder, type = "text", defaultValue }: { icon: React.ReactNode; placeholder?: string; type?: string; defaultValue?: string }) {
  return (
    <label className="flex items-center gap-2 rounded-xl bg-secondary px-4 py-3 text-foreground">
      <span className="text-primary">{icon}</span>
      <input type={type} placeholder={placeholder} defaultValue={defaultValue} className="w-full bg-transparent outline-none text-sm placeholder:text-muted-foreground" />
    </label>
  );
}

function Amenities() {
  const items = [
    { icon: Waves, title: "Spring-fed Pools", desc: "Swim in cool, mineral-rich mountain spring water year-round." },
    { icon: UtensilsCrossed, title: "Open-air Bar & Dining", desc: "Authentic Sikkimese cuisine served riverside under string lights." },
    { icon: BedDouble, title: "Family Lodging", desc: "Cozy cottages and family suites with warm mountain views." },
    { icon: Mountain, title: "Scenic Riverfront", desc: "Wake to the sound of the Teesta and misty Himalayan mornings." },
  ];
  return (
    <section id="amenities" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">What we offer</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Everything you need for a perfect weekend.</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-7 hover:border-primary hover:-translate-y-1 transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={poolImg} alt="Spring-fed pool" width={1200} height={900} loading="lazy" className="rounded-3xl shadow-xl w-full h-[520px] object-cover" />
          <div className="absolute -bottom-8 -right-6 hidden md:block bg-card rounded-2xl shadow-xl p-6 w-64 border border-border">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-2 font-display text-2xl font-bold">4.8 / 5</p>
            <p className="text-xs text-muted-foreground">From 1,200+ happy guests</p>
          </div>
        </div>
        <div>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">About the resort</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">A hidden corner of Sikkim — waiting for you.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Tucked into the lush valley of Kumrek in Rangpo, Hidden Spring is a beloved nature retreat
            just across from Cipla. Our natural spring-fed swimming pools, riverfront restaurant,
            and family-friendly cottages make it a favourite weekend escape for travellers across the region.
          </p>
          <ul className="mt-8 space-y-3 text-foreground">
            {["Natural spring pools open to guests & day visitors", "Open-air bar & restaurant with local Sikkimese cuisine", "Family cottages with river & mountain views", "Riverside bonfires and weekend live music"].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <button className="mt-10 inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3 font-semibold hover:opacity-90 transition-opacity">
            Plan Your Stay
          </button>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { img: poolImg, title: "Spring-fed Swimming Pools", tag: "Signature" },
    { img: restaurantImg, title: "Open-air Bar & Restaurant", tag: "Dining" },
    { img: lodgingImg, title: "Family Cottages", tag: "Stay" },
  ];
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase">Experiences</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Moments made at Hidden Spring.</h2>
          </div>
          <a href="#" className="text-primary font-semibold hover:underline">View all experiences →</a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="group relative overflow-hidden rounded-3xl h-[460px]">
              <img src={it.img} alt={it.title} width={1200} height={900} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                <span className="inline-flex w-fit rounded-full bg-white/20 backdrop-blur border border-white/30 px-3 py-1 text-xs font-medium">{it.tag}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{it.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Ananya R.", from: "Siliguri", text: "The most peaceful weekend we've had in years. The spring pool is unreal and the food was incredible." },
    { name: "Karma T.", from: "Gangtok", text: "Perfect little escape from the city. Riverside evenings with live music made it magical." },
    { name: "Rohit S.", from: "Kolkata", text: "Family-friendly, warm hospitality, and stunning views. We're already planning our next visit." },
  ];
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Guest stories</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight">Loved by weekenders across the region.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-2xl bg-card p-8 border border-border shadow-sm">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{r.text}"</p>
              <footer className="mt-6 text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-muted-foreground">{r.from}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-primary-foreground">
        <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight">Your riverside escape awaits.</h2>
        <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
          Book directly with Hidden Spring for the best rates on rooms, day passes to the pool, and weekend packages.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="inline-flex items-center rounded-full bg-white text-primary px-7 py-3 font-semibold hover:opacity-90 transition-opacity">
            Reserve Now
          </button>
          <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3 font-semibold hover:bg-white/10 transition-colors">
            <Phone className="h-4 w-4" /> Call the Resort
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logoImg} alt="Hidden Spring Resort Logo" className="h-16 w-auto rounded-xl shadow-md" />
          </div>
          <p className="mt-4 text-background/70 max-w-md leading-relaxed">
            A nature retreat in Kumrek, Rangpo — spring-fed pools, riverside dining, and authentic Sikkimese hospitality.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Visit</h4>
          <p className="mt-4 text-sm text-background/70 leading-relaxed">
            Kumrek, Rangpo<br />East Sikkim, 737132<br />Just across from Cipla
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> stay@hiddenspring.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-background/60 flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Hidden Spring Resort. All rights reserved.</p>
          <p>Sikkim, India</p>
        </div>
      </div>
    </footer>
  );
}
