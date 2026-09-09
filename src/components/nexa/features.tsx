import { MapPin, Lock, Clock, type LucideIcon } from "lucide-react";
import gpsAsset from "@/assets/GPS.png.asset.json";
import pinAsset from "@/assets/PIN.png.asset.json";
import horarioAsset from "@/assets/HORARIO.png.asset.json";

type Feature = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

const features: Feature[] = [
  {
    icon: MapPin,
    eyebrow: "Ubicación",
    title: "Fichaje Geofence",
    description:
      "Valida por GPS que cada empleado esté físicamente en la sucursal al momento de fichar. Se acabaron los fichajes desde casa: el radio permitido lo defines tú.",
    image: gpsAsset.url,
  },
  {
    icon: Lock,
    eyebrow: "Seguridad",
    title: "Seguridad por PIN",
    description:
      "Cada empleado usa un código único e intransferible. Evita suplantaciones y garantiza que quien ficha es realmente la persona correcta.",
    image: pinAsset.url,
  },
  {
    icon: Clock,
    eyebrow: "Automatización",
    title: "Cierres Automáticos",
    description:
      "Nexa audita los turnos a las 23:59 y cierra automáticamente los que quedaron abiertos. Nunca más una jornada mal registrada por un olvido.",
    image: horarioAsset.url,
  },
];

export function Features() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Todo lo que necesitas para controlar el presentismo
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-600">
          Desde la validación por ubicación hasta el cálculo automático de horas.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-16 md:gap-24">
        {features.map((feature, index) => {
          const reversed = index % 2 === 1;
          return (
            <div
              key={feature.title}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className={reversed ? "md:order-2" : ""}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-orange-600">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-pretty text-lg leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>

              <div className={reversed ? "md:order-1" : ""}>
                <div className="relative h-72 overflow-hidden rounded-2xl border border-orange-100 bg-orange-50/50 shadow-lg shadow-orange-900/5 ring-1 ring-orange-900/5">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
