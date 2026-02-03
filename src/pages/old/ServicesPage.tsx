import { Code, Palette, Smartphone, Globe, Database, Shield } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS & Android', 'Cross-platform', 'App Store Deployment'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust and scalable server-side solutions with ASP.NET Core.',
      features: ['API Development', 'Database Design', 'Cloud Integration'],
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence.',
      features: ['SEO', 'Content Marketing', 'Social Media'],
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date with ongoing support.',
      features: ['Security Audits', 'Regular Updates', '24/7 Support'],
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-slate-900 mb-2">Our Services</h2>
        <p className="text-slate-600">Comprehensive solutions tailored to your business needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
