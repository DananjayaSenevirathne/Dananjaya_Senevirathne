import { motion } from "framer-motion";

const CARDS = [
  {
    n: "01",
    title: "Provincial & School Cricket",
    body: "Represented provincial and school cricket teams.",
    tag: "Cricket",
  },
  {
    n: "02",
    title: "School Rugby Team",
    body: "Played for the school rugby team.",
    tag: "Rugby",
  },
];

export function BeyondCode() {
  return (
    <section className="relative px-6 py-32 md:px-10 md:py-48">
      <div className="mb-20 grid grid-cols-12 gap-6">
        <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
          <span className="text-eyebrow text-muted-foreground">(06)</span>
          <span className="text-eyebrow text-muted-foreground">Beyond Code</span>
        </div>

        <h2 className="col-span-12 text-huge md:col-span-9">
          Beyond <span className="italic">code.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {CARDS.map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="flex items-center justify-between">
              <span>{c.n}</span>
              <span>{c.tag}</span>
            </div>

            <h3 className="mt-10 font-display text-4xl">
              {c.title}
            </h3>

            <p className="mt-4 text-muted-foreground">
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}