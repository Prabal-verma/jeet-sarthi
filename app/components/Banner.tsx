import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-white">
      {/* Main Banner */}
      <div className="flex items-center justify-between px-8 py-3">
        {/* Left Section - Logo */}
        <div className="flex items-center pl-43">
          <Image
            src="/logo.svg"
            alt="Left Logo"
            width={80}
            height={60}
            className="h-auto"
          />
        </div>

        {/* Right Section - Powered By and Right Logo */}
        <div className="flex items-center pr-45">
          <div className="flex flex-col items-end">
            {/* Powered By Text */}
            <div className="text-xs font-bold text-gray-600">Powered By</div>
            {/* Right Logo */}
            <Image
              src="/right-logo.png"
              alt="Right Logo"
              width={140}
              height={100}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
