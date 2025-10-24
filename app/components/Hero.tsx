import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-[675px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.webp"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#3B82F6]/80"></div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full">
        {/* Left Content Area (60%) */}
        <div className="flex-1 flex flex-col justify-center px-12 pl-52 py-16">
          <div className="text-white">
            {/* Main Heading */}
            <h1 className="text-4xl font-bold mb-6">
              Secure Your Dream<br />
              Rank in NEET & JEE with<br />
              JEET SARTHI
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl font-semibold mb-8">Powered by Shiksha Nation</p>
            
            {/* Separator Line */}
            <div className="w-full h-0.5 bg-white mb-8"></div>
            
            {/* Description */}
            <p className="text-2xl">
              Personalized One-on-One Mentorship from IITians & Doctors Who've Already Cracked It
            </p>
          </div>
        </div>
        
        {/* Right Form Area (40%) */}
        <div className="flex-1 flex flex-col justify-center pr-54 px-8 py-16">
          <div className="text-white">
            {/* Form Heading */}
            <h2 className="text-3xl font-bold mb-8">Book your FREE First Session</h2>
            
            {/* Form */}
            <form className="space-y-4">
              {/* Name and Email Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Name *</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Email *</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">Phone Number *</label>
                <div className="flex">
                  <span className="px-3 py-2 bg-white text-gray-900 border border-r-0 border-gray-300 rounded-l-md">+91</span>
                  <input
                    type="tel"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md bg-white text-gray-900"
                  />
                </div>
                <a href="#" className="text-sm text-red-500 hover:underline">Send OTP</a>
              </div>
              
              {/* Student Class and Exam Type Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Student Class *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                    <option value="dropper">Dropper</option>
                    <option value="class-12">Class 12</option>
                    <option value="class-11">Class 11</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Exam Type *</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                    <option value="neet">NEET</option>
                    <option value="jee">JEE</option>
                    <option value="both">Both</option>
                  </select>
                </div>
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
              
              {/* How Can We Help */}
              <div>
                <label className="block text-sm font-medium text-white mb-1">How Can We Help?</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900">
                  <option value="backlog">Backlog Management</option>
                  <option value="doubt">Doubt Clearing</option>
                  <option value="strategy">Study Strategy</option>
                  <option value="motivation">Motivation</option>
                </select>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
