import { Badge } from "./Badge";
import { VerticalImageStack } from "./VerticalImageStack";

function FeatureWithImageComparison() {
  return (
    <div className="w-full py-10 lg:py-20 flex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kolom Kiri: Teks */}
          <div className="flex gap-6 flex-col items-center md:items-start w-full text-center md:text-left z-10">
            <Badge
              variant="outline"
              className="mb-2 rounded-md px-4 py-1 text-sm"
            >
              Available
            </Badge>
            <h1 className="text-6xl md:text-8xl tracking-tight font-serif font-bold leading-tight text-vintage-black">
              I'am Faisal
            </h1>
            <h1 className="text-6xl md:text-8xl tracking-tight font-serif font-bold leading-tight text-vintage-black">
              Let's Crafting vintage visuals for the modern era.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-vintage-gray font-semibold max-w-lg">
              I design and direct merch for musicians, labels, and brands that
              move culture
            </p>
          </div>

          {/* Kolom Kanan: Vertical Image Stack */}
          <div className="w-full relative">
            {/* Latar belakang aksen tipis (opsional) */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-vintage-red/5 blur-3xl pointer-events-none" />
            <VerticalImageStack />
          </div>
        </div>
      </div>
    </div>
  );
}

export { FeatureWithImageComparison };
