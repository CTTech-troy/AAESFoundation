import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'AAESF Foundation is changing lives through education and support. Their impact gives students hope and a better future.',
    author: 'Dr Tosin Adesile',
    role: 'Active Exco Member',
    image:
      '/drtosin.jpeg'
  },
  {
    id: 2,
    quote:
      "Seeing the joy on these students' faces when their fees were paid was priceless. AAESF is setting a standard for educational philanthropy in our community.",
    author: 'Mrs. F. O. Balogun',
    role: 'Parent of Beneficiary',
    image:
      'https://i.pinimg.com/736x/40/48/5a/40485a4179233d34fc749cc9cb667a89.jpg'
  },
  {
    id: 3,
    quote:
      'As a parent, I am deeply grateful to Mr. Akin Adeyanju and the foundation. They stepped in when we needed help the most.',
    author: 'Mr. Samuel Afolabi',
    role: 'Parent of Beneficiary',
    image:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2070&auto=format&fit=crop'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const current = testimonials[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((previous) => (previous + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (slideDirection: number) => ({
      x: slideDirection > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (slideDirection: number) => ({
      x: slideDirection < 0 ? 80 : -80,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (previous) =>
        (previous + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-charcoal py-28 text-white md:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker mb-5">Voices of impact</div>
            <h2 className="font-serif text-4xl font-bold md:text-6xl">
              Trust, in their words.
            </h2>
          </div>
          <QuoteIcon className="hidden h-14 w-14 text-accent md:block" />
        </div>

        <div className="relative overflow-hidden border border-white/20 bg-white/5 p-6 backdrop-blur md:p-10">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 280, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid gap-10 lg:grid-cols-[0.4fr_1fr] lg:items-center">
              <img
                src={current.image}
                alt={current.author}
                className="h-64 w-full object-cover grayscale md:h-120"
                style={{ borderRadius: 8 }} />
              <div>
                <p className="font-serif text-3xl leading-tight text-white md:text-5xl">
                  "{current.quote}"
                </p>
                <div className="mt-8 border-t border-white/20 pt-6">
                  <p className="font-bold text-white">{current.author}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
                    {current.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 transition-all ${
                    index === currentIndex
                      ? 'w-10 bg-accent'
                      : 'w-5 bg-white/25 hover:bg-white/50'
                  }`} />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => paginate(-1)}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent">
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => paginate(1)}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent">
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
