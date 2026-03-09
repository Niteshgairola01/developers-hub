import { NavLink, useLocation } from 'react-router'
import {
  LayoutDashboard,
  Users,
  GitFork,
  Heart,
  Settings,
  ChevronRight,
  Github,
} from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Developers', to: '/developers', icon: Users },
  { label: 'Repositories', to: '/repositories', icon: GitFork },
  { label: 'Favorites', to: '/favorites', icon: Heart },
  { label: 'Settings', to: '/settings', icon: Settings },
]

const Sidebar = () => {
  const location = useLocation()

  return (
    <aside className=" w-60 shrink-0 h-screen sticky top-0 flex flex-col bg-white border-r border-slate-100">
      {/* Logo */}
      <div className="h-16 px-5 flex items-center gap-3 border-b border-slate-100">
        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
          <Github className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-slate-900 tracking-tight text-[15px]">Developer Hub</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="px-3 mb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Navigation</p>
        {NAV_ITEMS.map(({ label, to, icon: Icon }) => {
          const active = location.pathname.startsWith(to)
          return (
            <NavLink
              key={to}
              to={to}
              className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${active
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
              <span className="flex-1">{label}</span>
              {active && <ChevronRight className="w-3.5 h-3.5 text-blue-400" />}
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100">
        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-xs text-slate-500 font-medium">Developer Hub</p>
          <p className="text-[11px] text-slate-400 mt-0.5">v1.0.0 · GitHub API</p>
        </div>
      </div>
    </aside>
  )
}


export default Sidebar;