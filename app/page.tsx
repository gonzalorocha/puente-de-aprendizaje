export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-zinc-100 font-sans">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0d0d0f] via-[#12121a] to-[#0a0a0d] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.08),transparent)] -z-10" />

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
        {/* Logo / Brand */}
        <div className="mb-8 sm:mb-12 flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/20 ring-1 ring-amber-500/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-amber-400"
              >
                <path d="M2 12h4l2-6 4 12 2-6h4" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl text-center sm:text-left">
              Puente de Aprendizaje
            </h1>
          </div>
          <p className="text-center text-base sm:text-lg text-zinc-400 max-w-md">
            Clases particulares con amplia experiencia en Argentina
          </p>
        </div>

        {/* Work in progress badge */}
        <div className="mb-10 sm:mb-16 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 sm:px-5 sm:py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          <span className="text-sm font-medium text-amber-400">
            Sitio en construcción
          </span>
        </div>

        {/* Main content */}
        <div className="max-w-2xl text-center space-y-6 sm:space-y-8">
          <h2 className="text-xl font-semibold text-zinc-200 sm:text-3xl">
            Profesora particular con amplia experiencia
          </h2>
          <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
            Dedicada a brindar clases particulares personalizadas en Argentina.
            Con años de experiencia ayudando a estudiantes a alcanzar sus metas
            académicas y superar desafíos en el aprendizaje.
          </p>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start">
              <span className="text-amber-400 font-medium">✓</span>{" "}
              <span className="text-zinc-300">Enseñanza personalizada</span>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start">
              <span className="text-amber-400 font-medium">✓</span>{" "}
              <span className="text-zinc-300">Amplia experiencia</span>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start">
              <span className="text-amber-400 font-medium">✓</span>{" "}
              <span className="text-zinc-300">Clases en Argentina</span>
            </div>
          </div>

          {/* Quién impulsa */}
          <div className="pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm mb-2">Impulsado por</p>
            <p className="text-xl font-semibold text-zinc-200">Lourdes Baliña</p>
            <p className="text-amber-400/90 text-base mt-1">
              Licenciada en Ciencia de la Comunicación
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 sm:mt-20 text-sm text-zinc-500 pb-[env(safe-area-inset-bottom)]">
          Próximamente más información y contacto
        </p>
      </main>
    </div>
  );
}
