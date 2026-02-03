import { Home, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/users", label: "Users", icon: Users },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen">
      
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <p className="text-slate-400 text-sm">React Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 w-full transition-colors">
          <Settings size={20} />
          Settings
        </button>
      </div>
    </aside>
  );
}
