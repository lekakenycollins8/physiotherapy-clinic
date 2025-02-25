import { ServiceCard } from "./ServiceCard";

interface ServiceListProps {
  services: any[];
}

export function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}