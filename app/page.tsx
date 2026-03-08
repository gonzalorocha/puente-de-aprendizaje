import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#0d0d0f] text-zinc-100 font-sans overflow-x-hidden">
			{/* Subtle gradient background */}
			<div className="absolute inset-0 bg-linear-to-br from-[#0d0d0f] via-[#12121a] to-[#0a0a0d] -z-10 animate-fade-in" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)] -z-10 animate-fade-in" style={{ animationDelay: "0.1s" }} />

			<main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
				{/* Logo / Brand */}
				<div className="mb-8 sm:mb-12 flex flex-col items-center gap-4 animate-fade-in-down" style={{ animationDelay: "0s" }}>
					<Image
						src="/logo.svg"
						alt="Logo Puentes de Aprendizaje"
						width={96}
						height={96}
						className="h-20 w-20 sm:h-24 sm:w-24 object-contain animate-scale-in"
						style={{ animationDelay: "0s" }}
						priority
					/>
					<h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl text-center animate-blur-in" style={{ animationDelay: "0.15s" }}>
						Puentes de Aprendizaje
					</h1>
					<p className="text-center text-base sm:text-lg text-zinc-400 max-w-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
						Clases particulares virtuales y presenciales con amplia experiencia en Argentina
					</p>
				</div>

				{/* Work in progress badge */}
				<div className="mb-10 sm:mb-16 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 sm:px-5 sm:py-2.5 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
					<span className="relative flex h-2 w-2">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
						<span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
					</span>
					<span className="text-sm font-medium text-violet-400 animate-fade-in" style={{ animationDelay: "0.5s" }}>
						Sitio en construcción
					</span>
				</div>

				{/* Main content */}
				<div className="max-w-2xl text-center space-y-6 sm:space-y-8">
					<h2 className="text-xl font-semibold text-zinc-200 sm:text-3xl animate-slide-in-right" style={{ animationDelay: "0.55s" }}>
						Profesora particular con amplia experiencia
					</h2>
					<p className="text-zinc-400 leading-relaxed text-base sm:text-lg animate-slide-in-left" style={{ animationDelay: "0.65s" }}>
						Dedicada a brindar clases particulares personalizadas en Argentina.
						Con años de experiencia ayudando a estudiantes a alcanzar sus metas
						académicas y superar desafíos en el aprendizaje.
					</p>

					<div className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
						<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start gap-3 animate-slide-in-left transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/80" style={{ animationDelay: "0.75s" }}>
							<span className="text-violet-400 font-medium">✓</span>
							<span className="text-zinc-300">Clases virtuales</span>
						</div>
						<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start gap-3 animate-slide-in-right transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/80" style={{ animationDelay: "0.85s" }}>
							<span className="text-violet-400 font-medium">✓</span>
							<span className="text-zinc-300">Clases presenciales</span>
						</div>
						<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start gap-3 animate-slide-in-left transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/80" style={{ animationDelay: "0.95s" }}>
							<span className="text-violet-400 font-medium">✓</span>
							<span className="text-zinc-300">Enseñanza personalizada</span>
						</div>
						<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 sm:px-6 sm:py-4 text-center sm:text-left min-h-[44px] flex items-center justify-center sm:justify-start gap-3 animate-slide-in-right transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/80" style={{ animationDelay: "1.05s" }}>
							<span className="text-violet-400 font-medium">✓</span>
							<span className="text-zinc-300">Amplia experiencia</span>
						</div>
					</div>

					{/* Ubicación */}
					<div className="pt-6 sm:pt-8 flex flex-col items-center gap-2">
						<div className="w-full max-w-md mx-auto h-px bg-zinc-800/80 mb-6 sm:mb-8 origin-center animate-line-expand" style={{ animationDelay: "1.05s" }} />
						<p className="text-zinc-500 text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: "1.15s" }}>Ubicación</p>
						<a
							href="https://www.google.com/maps/place/Mar+del+Plata,+Buenos+Aires+Province,+Argentina"
							target="_blank"
							rel="noopener noreferrer"
							className="text-violet-400 hover:text-violet-300 font-medium transition-all duration-300 flex items-center gap-4 hover:scale-105 animate-fade-in-up"
							style={{ animationDelay: "1.25s" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
							Mar del Plata, Argentina
						</a>
					</div>

					{/* Biografía */}
					<div className="pt-8 sm:pt-12 mt-8 sm:mt-12 text-left">
						{/* Línea separadora animada */}
						<div className="w-full h-px bg-zinc-800 mb-8 sm:mb-12 origin-center animate-line-expand" style={{ animationDelay: "1.25s" }} />
						<h3 className="text-lg font-semibold text-zinc-200 mb-3 animate-fade-in-up" style={{ animationDelay: "1.35s" }}>
							Sobre Lourdes Baliña
						</h3>
						<ul className="flex flex-col gap-2 sm:gap-3 mb-6 rounded-xl border border-violet-500/30 bg-violet-500/5 p-4 sm:p-5 animate-box-reveal" style={{ animationDelay: "1.38s" }}>
							<li className="text-violet-400 text-base sm:text-lg font-semibold animate-slide-in-left" style={{ animationDelay: "1.4s" }}>
								Licenciada en Ciencia de la Comunicación
							</li>
							<li className="text-violet-400 text-base sm:text-lg font-semibold animate-slide-in-left" style={{ animationDelay: "1.5s" }}>
								Profesora en Ciencias de la Educación
							</li>
							<li className="text-violet-400 text-base sm:text-lg font-semibold animate-slide-in-left" style={{ animationDelay: "1.6s" }}>
								Profesora en Educación Primaria
							</li>
						</ul>
						<p className="text-zinc-400 leading-relaxed text-base sm:text-lg mb-4 animate-fade-in" style={{ animationDelay: "1.7s" }}>
							Con amplia trayectoria en el ámbito educativo. Su formación en
							comunicación le permite adaptar la enseñanza a las necesidades de
							cada estudiante, facilitando la comprensión y generando un vínculo
							de confianza que potencia el aprendizaje.
						</p>
						<p className="text-zinc-400 leading-relaxed text-base sm:text-lg animate-fade-in" style={{ animationDelay: "1.8s" }}>
							Convencida de que cada persona tiene su propio ritmo y forma de
							aprender, se dedica a crear un espacio donde los estudiantes
							puedan desarrollar sus capacidades con acompañamiento
							personalizado y metodologías adaptadas a sus objetivos.
						</p>
					</div>
				</div>

				{/* Contacto */}
				<div className="mt-12 sm:mt-20 flex flex-col items-center gap-4 pb-[env(safe-area-inset-bottom)]">
					<div className="w-full max-w-2xl h-px bg-zinc-800 mb-8 origin-center animate-line-expand" style={{ animationDelay: "1.85s" }} />
					<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider animate-fade-in" style={{ animationDelay: "1.9s" }}>
						Contacto
					</h3>
					<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
						<a
							href="mailto:puentedelaprendizaje@gmail.com"
							className="text-violet-400 hover:text-violet-300 font-medium transition-all duration-300 flex items-center gap-4 hover:scale-105 animate-fade-in-up"
							style={{ animationDelay: "2s" }}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect width="20" height="16" x="2" y="4" rx="2" />
								<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
							</svg>
							puentedelaprendizaje@gmail.com
						</a>
						<span className="text-zinc-500 flex items-center gap-4 animate-fade-in" style={{ animationDelay: "2.1s" }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
								<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
							</svg>
							Instagram: Próximamente
						</span>
					</div>
				</div>
			</main>
		</div>
	);
}
