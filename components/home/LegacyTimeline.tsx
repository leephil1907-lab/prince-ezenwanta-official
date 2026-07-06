"use client";

const timeline = [
  "Started Musical Journey",
  "First Studio Recording",
  "Released Albums",
  "Performed Across Nigeria",
  "Continuing The Legacy",
];

export default function LegacyTimeline() {
  return (
    <section className="py-32 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">Legacy Timeline</h2>

        <div className="mt-20 border-l-2 border-[#C8A045] pl-10">
          {timeline.map((step, index) => (
            <div key={index} className="relative mb-16">
              <div className="absolute -left-[49px] h-6 w-6 rounded-full bg-[#C8A045]" />

              <h3 className="text-2xl font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
