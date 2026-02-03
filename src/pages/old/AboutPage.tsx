import { Target, Heart, Zap } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional solutions that empower businesses to achieve their goals.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, and customer satisfaction are at the core of everything we do.',
    },
    {
      icon: Zap,
      title: 'Our Vision',
      description: 'To be the leading provider of innovative solutions in our industry.',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-slate-900 mb-2">About Us</h2>
        <p className="text-slate-600">Learn more about who we are and what we stand for.</p>
      </div>

      {/* Company Overview */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h3 className="text-slate-900 mb-4">Who We Are</h3>
        <p className="text-slate-600 mb-4">
          We are a team of passionate professionals dedicated to creating innovative solutions
          that make a difference. With years of experience in the industry, we've helped
          countless clients achieve their business objectives.
        </p>
        <p className="text-slate-600">
          Our commitment to excellence and customer satisfaction has made us a trusted partner
          for businesses of all sizes. We believe in building long-term relationships based on
          trust, transparency, and results.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div key={value.title} className="bg-white rounded-lg shadow-sm p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-slate-900 mb-2">{value.title}</h4>
              <p className="text-slate-600">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
