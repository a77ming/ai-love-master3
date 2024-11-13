import Image from 'next/image';

export default function HeroImage() {
  return (
    <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-xl shadow-lg">
      <Image
        src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Couple holding hands at sunset"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/70 to-purple-600/40 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-lg">
          Find Your Path to Love
        </h1>
      </div>
    </div>
  );
}