import { FaNewspaper, FaStar, FaPlay, FaMicrophone } from 'react-icons/fa'
import Image from 'next/image'

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Main Spinner Container */}
        <div className="relative w-36 h-36 md:w-44 md:h-44">
          {/* Outer Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066cc] via-[#d53020] to-[#0066cc] animate-spin p-1">
            <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-full"></div>
          </div>

          {/* Pulsing Glow Effect */}
          <div
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(6, 102, 204, 0.3), rgba(213, 48, 32, 0.3), rgba(6, 102, 204, 0.3))',
              filter: 'blur(8px)',
            }}
          />

          {/* Secondary Counter-rotating Ring */}
          <div
            className="absolute inset-3 border-3 border-dashed rounded-full animate-spin opacity-60"
            style={{
              borderColor: '#d53020 transparent #d53020 transparent',
              animationDirection: 'reverse',
              animationDuration: '3s',
            }}
          />

          {/* Entertainment Icons Ring */}
          <div
            className="absolute inset-6 animate-spin"
            style={{ animationDuration: '4s', animationDirection: 'reverse' }}
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                <FaStar className="text-[#d53020] text-lg animate-pulse" />
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                <FaPlay
                  className="text-[#0066cc] text-lg animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                <FaMicrophone
                  className="text-[#d53020] text-lg animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2">
                <FaNewspaper
                  className="text-[#0066cc] text-lg animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                />
              </div>
            </div>
          </div>

          {/* Center Logo Container */}
          <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-100">
            <Image
              src="/light.png"
              alt="TeaSpace Africa Logo"
              width={100}
              height={100}
              className="group-hover:scale-105 w-16 animate-pulse"
            />
          </div>

          {/* Floating Particles */}
          <div className="absolute -inset-4">
            <div
              className="absolute w-2 h-2 bg-[#0066cc] rounded-full animate-bounce opacity-60"
              style={{
                top: '10%',
                left: '15%',
                animationDelay: '0s',
                animationDuration: '2s',
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 bg-[#d53020] rounded-full animate-bounce opacity-60"
              style={{
                top: '20%',
                right: '10%',
                animationDelay: '0.5s',
                animationDuration: '2.5s',
              }}
            />
            <div
              className="absolute w-2 h-2 bg-[#0066cc] rounded-full animate-bounce opacity-60"
              style={{
                bottom: '15%',
                left: '20%',
                animationDelay: '1s',
                animationDuration: '2.2s',
              }}
            />
            <div
              className="absolute w-1.5 h-1.5 bg-[#d53020] rounded-full animate-bounce opacity-60"
              style={{
                bottom: '25%',
                right: '15%',
                animationDelay: '1.5s',
                animationDuration: '2.8s',
              }}
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="text-lg font-semibold text-gray-800">Loading the Latest</div>
            <div className="flex space-x-1">
              <div
                className="w-1.5 h-1.5 bg-[#0066cc] rounded-full animate-bounce"
                style={{ animationDelay: '0s' }}
              />
              <div
                className="w-1.5 h-1.5 bg-[#d53020] rounded-full animate-bounce"
                style={{ animationDelay: '0.2s' }}
              />
              <div
                className="w-1.5 h-1.5 bg-[#0066cc] rounded-full animate-bounce"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
          <div className="text-sm text-gray-500 font-medium">Entertainment News & Updates</div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0066cc] to-[#d53020] rounded-full animate-pulse"
            style={{
              width: '100%',
              animation: 'loading-progress 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Spinner
