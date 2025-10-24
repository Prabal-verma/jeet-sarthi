import Image from 'next/image';

export default function ContactForm() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <Image src="/hero.webp" alt="Background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-[#3B82F6]/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-white font-extrabold text-3xl md:text-5xl mb-10">
          Start Your Success Journey With JEET SARTHI
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <span className="px-3 py-2 bg-white text-gray-900 border border-r-0 border-gray-300 rounded-l-md">+91</span>
              <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md bg-white text-gray-900" />
            </div>
            <a href="#" className="text-sm text-red-400 hover:underline">Send OTP</a>
          </div>

          {/* Student Class */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Student Class <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
              <option>Dropper</option>
              <option>Class 12</option>
              <option>Class 11</option>
            </select>
          </div>

          {/* Exam Type */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Exam Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
              <option>NEET</option>
              <option>JEE</option>
              <option>Both</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-white mb-1">City</label>
            <input
              type="text"
              placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white mb-1">How Can We Help?</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
              <option>Backlog Management</option>
              <option>Doubt Clearing</option>
              <option>Study Strategy</option>
              <option>Motivation</option>
            </select>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-[#66B34B] hover:bg-[#56a13f] text-white font-bold py-3 px-6 rounded-md transition-colors">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


