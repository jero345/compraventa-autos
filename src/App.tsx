import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  ChevronRight, 
  ShoppingBag, 
  Instagram, 
  MessageCircle, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Menu, 
  X,
  Star
} from 'lucide-react';

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz AMG GT",
    price: "$450.000.000",
    description: "La joya de la corona. Potencia, estilo y exclusividad pura.",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop", // placeholder
    badge: "DESTACADO"
  },
  {
    id: 2,
    name: "Toyota Fortuner",
    price: "$280.000.000",
    description: "Domina el camino con la SUV más confiable del mercado.",
    img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=2069&auto=format&fit=crop", // placeholder
    badge: "VENDIDO 🔥"
  },
  {
    id: 3,
    name: "BMW M3 Competition",
    price: "$390.000.000",
    description: "Perfección en cada curva. Tecnología alemana de alto rendimiento.",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop", // placeholder
    badge: "NUEVO"
  },
  {
    id: 4,
    name: "Chevrolet Silverado",
    price: "$310.000.000",
    description: "Poder sin límites. Para los que necesitan capacidad real.",
    img: "https://images.unsplash.com/photo-1605891339410-5c7b93d3efd1?q=80&w=2069&auto=format&fit=crop", // placeholder
    badge: "REBAJADO"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen selection:bg-purple-500 selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-purple py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
               <Shield className="text-white w-6 h-6" />
             </div>
             <span className="text-2xl font-black tracking-tighter text-white font-orbitron">
               AUTODREAM<span className="text-purple-500">.</span>
             </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {['Catálogo', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors uppercase cursor-pointer">
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              ESTRENAR AHORA
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenu(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 glass bg-black/95 p-10 flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-8 right-8" onClick={() => setMobileMenu(false)}>
              <X className="w-10 h-10" />
            </button>
            {['Catálogo', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-3xl font-orbitron hover:text-purple-500" onClick={() => setMobileMenu(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Glows */}
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse delay-1000" />
        
        {/* Hero Car Placeholder Image with Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <img 
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Car" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-purple-400 font-bold tracking-[0.5em] mb-4 text-sm md:text-base">MÁS QUE UNA COMPRAVENTA</h4>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none italic uppercase">
              EL SUEÑO <br /> 
              <span className="text-gradient-purple underline decoration-purple-600/30">ES TUYO</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              No solo vendemos autos. Entregamos experiencias de otro nivel con la confianza y transparencia que tu inversión merece.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="w-full md:w-auto bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] group">
                VER CATÁLOGO <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="w-full md:w-auto border border-white/20 hover:bg-white hover:text-black text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3">
                CONSIGNAR MI AUTO <Instagram className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
           <span className="text-[10px] tracking-widest uppercase">Explora</span>
           <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-transparent" />
        </div>
      </section>

      {/* --- STATS / FEATURES --- */}
      <section className="py-24 border-y border-white/5 relative bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Años de Experiencia', val: '10+' },
            { label: 'Autos Vendidos', val: '1.5k+' },
            { label: 'Marcas Premium', val: '25+' },
            { label: 'Reviews 5 Estrellas', val: '100%' },
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <h2 className="text-4xl md:text-5xl font-black text-purple-500 mb-2 font-orbitron group-hover:scale-110 transition-transform">{stat.val}</h2>
              <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CATALOG SECTION --- */}
      <section id="catálogo" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h4 className="text-purple-500 font-bold tracking-widest mb-4">NUESTRO GARAJE</h4>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic">INVENTARIO <span className="text-white/20">PREMIUM</span></h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Buscar modelo..." 
                  className="bg-zinc-900 border border-white/10 px-6 py-4 rounded-xl w-full md:w-80 focus:outline-none focus:border-purple-600 transition-all font-bold"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {cars.map((car, index) => (
              <motion.div 
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden glass hover:border-purple-500/50 transition-all"
              >
                {/* Car Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <span className="absolute top-6 left-6 z-10 bg-purple-600 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-xl">
                    {car.badge}
                  </span>
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-1 group-hover:text-purple-400 transition-colors">{car.name}</h3>
                      <p className="text-gray-500 text-sm">{car.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500 block mb-1 uppercase tracking-tighter font-bold">Inversión</span>
                      <span className="text-xl font-black text-white">{car.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button className="flex-1 bg-white hover:bg-purple-600 hover:text-white text-black font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                      DETALLES <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-16 h-16 border border-white/10 rounded-xl flex items-center justify-center hover:bg-purple-600/10 hover:border-purple-600 transition-all">
                      <ShoppingBag className="w-6 h-6 text-purple-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="text-gray-500 hover:text-white font-bold tracking-widest flex items-center justify-center gap-3 mx-auto transition-all group italic underline decoration-purple-600 underline-offset-8">
              VER TODAS LAS UNIDADES <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section id="nosotros" className="py-32 bg-purple-950/20 border-y border-purple-900/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h4 className="text-purple-500 font-bold tracking-widest mb-4">CONFÍANOS TU SUEÑO</h4>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none italic">EL ESTÁNDAR <br /> <span className="text-gradient-purple">AUTODREAM</span></h2>
            
            <div className="space-y-8">
              {[
                { title: 'Transparencia Total', desc: 'Peritajes certificados y documentación al día en tiempo récord.' },
                { title: 'Atención Elite', desc: 'Asesoría personalizada 24/7 para que encuentres tu compañero ideal.' },
                { title: 'Consignación Digital', desc: 'Vendemos tu auto sin que salga de tu casa. Alcance masivo garantizado.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 glass-purple rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="text-purple-500 w-8 h-8" />
                  </div>
                  <div>
                    <h5 className="text-xl font-black mb-2 uppercase italic">{item.title}</h5>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.3)]">
               <img 
                 src="https://images.unsplash.com/photo-1542362567-b05503f3f7f4?q=80&w=2070&auto=format&fit=crop" 
                 alt="Luxury Showroom" 
                 className="w-full h-full object-cover"
               />
             </div>
             {/* Decorative floating elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 glass-purple rounded-3xl animate-bounce" style={{ animationDuration: '4s' }} />
             <div className="absolute -bottom-10 -left-10 w-32 h-32 glass border-white/20 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section id="contacto" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-black to-black z-0" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-12 inline-block">
            <div className="flex gap-1 mb-4 justify-center">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 fill-purple-500 text-purple-500" />)}
            </div>
            <p className="text-purple-400 font-black tracking-widest">+1,000 CLIENTES SATISFECHOS</p>
          </div>

          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase italic leading-tight">
            ¿LISTO PARA <br /> <span className="text-gradient-purple">TU PRÓXIMO AUTO?</span>
          </h2>
          
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Hablemos por WhatsApp. Te enviamos el video del auto que te gusta de inmediato.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-[#25D366] hover:bg-[#20ba56] text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_40px_rgba(37,211,102,0.3)] transform hover:scale-105 active:scale-95">
              <MessageCircle className="w-8 h-8 fill-current" /> AGENDAR CITA YA
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all">
              <Instagram className="w-8 h-8" /> @AUTODREAMCOL
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <Shield className="text-purple-500 w-8 h-8" />
                 <span className="text-3xl font-black font-orbitron">AUTODREAM<span className="text-purple-500">.</span></span>
              </div>
              <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
                Líderes en comercialización de vehículos premium y gama alta en Colombia. Experiencia sustentada en transparencia y pasión por el motor.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                <a href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"><MessageCircle /></a>
              </div>
            </div>
            
            <div>
              <h5 className="font-orbitron font-black text-white mb-6 uppercase tracking-widest text-sm">Empresa</h5>
              <ul className="space-y-4 text-gray-500 text-sm font-bold">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Catálogo</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Consignación</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Servicios</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nosotros</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-orbitron font-black text-white mb-6 uppercase tracking-widest text-sm">Contacto</h5>
              <ul className="space-y-4 text-gray-500 text-sm font-bold">
                <li>Whatsapp: +57 321 000 0000</li>
                <li>Email: ventas@autodream.com</li>
                <li>Medellín - Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-widest text-gray-600 uppercase">
             <p>© 2026 AUTODREAM COMPRAVENTA. TODOS LOS DERECHOS RESERVADOS.</p>
             <div className="flex gap-8">
               <a href="#" className="hover:text-white">Privacidad</a>
               <a href="#" className="hover:text-white">Términos</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
