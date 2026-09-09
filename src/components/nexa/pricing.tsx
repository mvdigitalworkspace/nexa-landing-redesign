import { Check } from "lucide-react";

type Plan = {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  footnote: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    title: "Básico - Control Esencial",
    price: "$15",
    subtitle: "Abandona la planilla de papel para siempre",
    features: [
      "Fichaje online y offline garantizado",
      "Panel de control en tiempo real",
      "Autogestión de turnos simples",
    ],
    footnote: "Ideal para 1 sucursal y hasta 15 empleados.",
  },
  {
    title: "Plus - Gestión y Nómina",
    price: "$40",
    subtitle: "Ahorra horas de trabajo contable a fin de mes",
    features: [
      "Todo lo del plan Básico",
      "Exportación automatizada a Excel/PDF",
      "Cálculo de llegadas tarde",
      "Gestión de múltiples turnos",
    ],
    footnote: "Escalable hasta 3 sucursales y 50 empleados.",
    featured: true,
  },
  {
    title: "Premium - Auditoría y Seguridad",
    price: "$90",
    subtitle: "Confianza ciega y control total a distancia",
    features: [
      "Todo lo del plan Plus",
      "Sistema anti-fraude con foto frontal",
      "Alertas de apertura/cierre en vivo",
      "Roles de permisos granulares",
    ],
    footnote: "Para franquicias: sucursales y empleados ilimitados.",
  },
];

export function Pricing() {
  return (
    <section id="precios" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Planes y Precios
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
          Elegí el plan que mejor se adapta a tu negocio. Todos incluyen prueba
          gratis.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`flex h-full flex-col rounded-2xl bg-white p-6 shadow-lg transition-transform duration-200 hover:-translate-y-1 ${
              plan.featured
                ? "border-2 border-orange-600 shadow-xl md:-mt-4 md:pb-10"
                : "border border-slate-200"
            }`}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
              🎁 7 días de prueba gratis
            </span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {plan.title}
            </h3>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                {plan.price}
              </span>
              <span className="text-sm font-medium text-slate-500">
                USD / mes
              </span>
            </div>

            <p className="mt-3 text-pretty text-slate-600">{plan.subtitle}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 w-full rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Comenzar prueba gratis
            </button>

            <p className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-500">
              {plan.footnote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
