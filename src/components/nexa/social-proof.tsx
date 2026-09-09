const clients = ["MANAPACAS S.A.", "USINA LÁCTEA EL PUENTE", "KAWHA CAFE"];

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-medium text-slate-500">
          Confían en nosotros franquicias de todo el país
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map((name) => (
            <span
              key={name}
              className="text-slate-400 font-bold text-xl uppercase tracking-wider"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
