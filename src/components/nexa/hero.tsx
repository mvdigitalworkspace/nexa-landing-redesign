import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(var(--color-gray-300)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-16 sm:pt-28 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center rounded-full bg-orange-100 px-6 py-3 text-base font-semibold text-gray-800 shadow-sm ring-1 ring-orange-200">
            La forma correcta de gestionar y controlar tu empresa
          </span>

          <h1 className="mt-8 text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Control de presentismo inteligente, sin relojes físicos.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
            Nexa permite a tus empleados fichar desde su celular mediante GPS y
            PIN. Olvídate del hardware y automatiza el control de tus sucursales.
          </p>

          <div className="mt-10 flex flex-col items-center lg:items-start">
            <a
              href="#precios"
              className="rounded-lg bg-orange-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-orange-700"
            >
              Crear mi cuenta gratis
            </a>
            <p className="mt-4 text-sm text-slate-500">
              Prueba gratis de 7 días. No requiere tarjeta de crédito.
            </p>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[60%] top-[40%] -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-400/20 blur-3xl"
          />
          <div className="relative z-10 w-[280px] rounded-[2.5rem] border-[10px] border-gray-900 bg-gray-900 shadow-2xl">
            <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
            <div className="overflow-hidden rounded-[1.8rem] bg-gray-50">
              <div className="flex flex-col gap-4 p-5 pt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Buen día,</p>
                    <p className="text-sm font-bold text-slate-900">
                      Sucursal Centro
                    </p>
                  </div>
                  <div className="h-9 w-9 rounded-full bg-orange-100" />
                </div>

                {/* mini map */}
                <div className="relative h-32 overflow-hidden rounded-xl bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-gray-200" />
                  <div className="absolute left-6 top-8 h-16 w-16 rounded-full border-2 border-orange-500/40 bg-orange-500/10" />
                  <div className="absolute left-[54px] top-[62px] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                    <MapPin
                      className="h-4 w-4 text-orange-500"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute inset-x-4 top-4 h-1.5 rounded-full bg-white/60" />
                  <div className="absolute inset-x-8 bottom-6 h-1.5 rounded-full bg-white/50" />
                </div>

                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <p className="text-[11px] text-slate-500">
                    Estás dentro del rango permitido
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900">
                    Radio: 50m · GPS activo
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-orange-600 py-3 text-sm font-bold text-white shadow-lg shadow-orange-600/30 transition-colors hover:bg-orange-700"
                >
                  Fichar Entrada
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  08:59 AM · PIN verificado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
