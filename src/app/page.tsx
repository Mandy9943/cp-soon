import CountdownTimer from "@/components/CountdownTimer";
import Lightning from "@/components/Lightning";
import { Calendar, Instagram, MapPin, Music, Sparkles } from "lucide-react";
import Image from "next/image";

export const runtime = "edge";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 relative overflow-hidden">
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>

      {/* Single Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/img3.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          style={{
            filter: "grayscale(40%) sepia(20%) hue-rotate(280deg) blur(1px)",
          }}
        />
      </div>
      {/* More dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-500/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/15 rounded-full blur-xl animate-bounce delay-700"></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-red-500/10 rounded-full blur-xl animate-bounce delay-1500"></div>
      </div>

      {/* Floating elements with more movement */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-white/10 text-3xl animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`,
            }}
          >
            {["♪", "♫", "🎵", "🎶", "💃", "🕺"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Logo/Brand */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-spin-slow opacity-75"></div>
            <div className="absolute inset-1 bg-gradient-to-br from-purple-950 to-black rounded-full p-2">
              <Image
                src="/logo.jpg"
                alt="Cuban Party Logo"
                className="w-full h-full rounded-full object-cover"
                width={100}
                height={100}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent rounded-full animate-pulse"></div>
          </div>

          <div className="absolute -bottom-4 -left-4 animate-bounce delay-1000">
            <Music className="w-6 h-6 text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          <span className="text-3xl sm:text-4xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            CUBAN
          </span>
          <br />
          <span className="text-white">PARTY</span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
            Montevideo, Uruguay
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
          La fiesta más caliente de Montevideo está llegando.
          <br />
          <span className="text-pink-400 font-semibold">
            Salsa • Reggaeton • Timba • Reparto
          </span>
          <br />
          Prepárate para vivir la auténtica experiencia cubana.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
            <Music className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            <span className="text-white font-medium">Música en Vivo</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
            <span className="text-white font-medium">Eventos Exclusivos</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="text-white font-medium">Experiencia Única</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Social Links */}
        <div className="mb-6 sm:mb-8 px-2">
          <a
            href="https://www.instagram.com/cuban.party.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-sm sm:text-base"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Síguenos en Instagram</span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-gray-400 text-xs sm:text-sm px-4">
          <p>© 2024 Cuban Party. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
      </div>
    </div>
  );
}
