export default function StudioLoading() {
    return (
        <div className="fixed inset-0 bg-[#1a1a1a] flex flex-col items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-[#ffad18] rounded-full animate-spin mb-4"></div>
            <h2 className="text-white text-xl font-oswald tracking-wider uppercase">Loading Studio...</h2>
            <p className="text-gray-400 text-sm mt-2">Preparing your workspace</p>
        </div>
    )
}
