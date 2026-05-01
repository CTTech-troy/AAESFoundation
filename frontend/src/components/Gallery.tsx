import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2Icon, XIcon } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/img1.jpeg',
    category: 'Events',
    title: 'Scholarship Assessment Day'
  },
  {
    id: 2,
    src: '/imhfd.jpeg',
    category: 'Presentation',
    title: 'Award Ceremony 2026'
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbpVL4WOZz0LnGa6MCb9U0N7ZA9B2fPrcRA&s',
    category: 'School',
    title: 'Abeokuta Grammar School Campus'
  },
  {
    id: 4,
    src: 'https://pbs.twimg.com/media/DpvKmgKWwAEIgix.jpg',
    category: 'Beneficiaries',
    title: 'Students in Class'
  },
  {
    id: 5,
    src: '/image.png',
    category: 'Community',
    title: 'Community Outreach'
  },
  {
    id: 6,
    src: '/img4.jpeg',
    category: 'Events',
    title: 'Foundation Launch'
  },
  {
    id: 7,
    src: '/hero.jpeg',
    category: 'Events',
    title: 'Scholarship Winners'
  }
];

const categories = [
  'All',
  'Presentation',
  'Beneficiaries',
  'Events',
  'School',
  'Community'
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  return (
    <section id="gallery" className="bg-white py-28 md:py-32">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker mb-5">Field record</div>
            <h2 className="font-serif text-4xl font-bold text-charcoal md:text-6xl">
              Moments with proof.
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                  activeCategory === category
                    ? 'border-charcoal bg-charcoal text-white'
                    : 'border-charcoal/10 bg-white text-slate hover:border-accent hover:text-charcoal'
                }`}
                style={{ borderRadius: 6 }}>
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.button
                layout
                key={image.id}
                type="button"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden border border-charcoal/10 text-left shadow-[0_22px_70px_rgba(16,17,20,0.1)] ${
                  index === 1 || index === 4
                    ? 'min-h-[34rem] md:row-span-2'
                    : 'min-h-[18rem]'
                }`}
                style={{ borderRadius: 8 }}
                onClick={() => setSelectedImage(image.src)}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"></span>
                <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-white/40 bg-white/10 text-white opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  <Maximize2Icon className="h-4 w-4" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-light">
                    {image.category}
                  </span>
                  <span className="mt-3 block font-serif text-2xl font-bold text-white">
                    {image.title}
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md md:p-10"
            onClick={() => setSelectedImage(null)}>
            <button
              type="button"
              aria-label="Close gallery image"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center border border-white/20 bg-white/10 text-white"
              style={{ borderRadius: 6 }}
              onClick={() => setSelectedImage(null)}>
              <XIcon className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={selectedImage}
              alt="Expanded gallery view"
              className="max-h-full max-w-full border border-white/20 object-contain shadow-2xl"
              style={{ borderRadius: 8 }}
              onClick={(event) => event.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
