import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+20.1%', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Active Users', value: '2,350', change: '+15.3%', icon: Users, color: 'bg-blue-500' },
    { label: 'Sales', value: '1,234', change: '+8.2%', icon: ShoppingCart, color: 'bg-purple-500' },
    { label: 'Growth', value: '45%', change: '+12.5%', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-slate-900 mb-2">Welcome Back!</h2>
        <p className="text-slate-600">Here's what's happening with your website today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">{stat.change}</span>
              </div>
              <p className="text-slate-600 text-sm mb-1">{stat.label}</p>
              <p className="text-slate-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-slate-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New user registered', time: '2 minutes ago' },
            { action: 'Order #1234 completed', time: '15 minutes ago' },
            { action: 'Payment received', time: '1 hour ago' },
            { action: 'New message received', time: '2 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
              <span className="text-slate-700">{activity.action}</span>
              <span className="text-slate-500 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
