import { Search } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="h-16 px-6 flex items-center gap-4 bg-white border-b border-slate-100 sticky top-0 z-30">
      {/* Search */}
      <form className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search developers..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg outline-none focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 font-mono hidden sm:block">⌘K</kbd>
        </div>
      </form>
    </header>
  )
}


export default Navbar;