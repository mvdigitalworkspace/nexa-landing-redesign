export function Cta() {
  return (
    <section className="px-4 pb-16 md:pb-24">
      <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-12 text-center shadow-2xl md:px-12 md:py-14">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-white md:text-3xl">
          Empieza a gestionar tu franquicia de forma inteligente.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-300">
          Únete a los dueños de negocios que ya no pierden tiempo con planillas
          de papel.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href="#precios"
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-700"
          >
            Comenzar mi prueba gratis ahora
          </a>
        </div>
      </div>
    </section>
  );
}
