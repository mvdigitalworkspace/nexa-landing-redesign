import { useState } from "react";
import { ChevronDown, MessageCircleHeart } from "lucide-react";

const faqs = [
  {
    question: "¿Qué pasa si se cae el internet en el local?",
    answer:
      "Nexa permite el fichaje en modo offline. El empleado puede marcar su ingreso/salida y el sistema lo sincronizará automáticamente en la nube en cuanto regrese la conexión.",
  },
  {
    question: "¿Necesito comprar algún equipo o reloj biométrico?",
    answer:
      "En absoluto. Los empleados utilizan sus propios celulares. Nexa valida que estén físicamente en el local utilizando tecnología GPS (Geocerca) y un PIN único de seguridad.",
  },
  {
    question: "¿Cómo funciona la prueba gratuita?",
    answer:
      "Tienes 7 días de acceso total sin necesidad de ingresar tarjeta de crédito. Te ayudamos a configurar tu primera sucursal en minutos para que lo pruebes con tu equipo.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-16">
        <div className="md:sticky md:top-24">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <MessageCircleHeart className="size-7" aria-hidden="true" />
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            ¿Tienes dudas?
          </h2>
          <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-slate-600">
            Estamos aquí para ayudarte a dar el salto digital.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-900"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`size-5 shrink-0 text-orange-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
