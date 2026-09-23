import { IndustrialStats } from "@prisma/client";
import { fallbackStats } from "@/lib/fallbackData";
import { Package, Building2, TrendingUp, Award, LucideIcon } from "lucide-react";

const STAT_ICONS: Record<number, LucideIcon> = {
  1: Package,
  2: Building2,
  3: TrendingUp,
  4: Award,
};

interface StatsSectionProps {
  stats: IndustrialStats[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const data = stats.length > 0 ? stats : fallbackStats;

  return (
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Numbers Don&apos;t Lie</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Kepercayaan Industri Sejak Awal
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Angka-angka ini bukan sekadar statistik — mereka adalah bukti nyata kepercayaan ratusan perusahaan kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((stat) => (
            <div
              key={stat.id}
              className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg rounded-2xl p-6 md:p-8 text-center transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  {(() => {
                    const Icon = STAT_ICONS[stat.order] ?? Package;
                    return <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />;
                  })()}
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-blue-600 mb-2">{stat.label}</p>
              <p className="text-xs text-slate-500 leading-relaxed hidden md:block">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
