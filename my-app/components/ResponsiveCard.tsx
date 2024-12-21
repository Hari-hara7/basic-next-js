interface ResponsiveCardProps {
    title: string;
    description: string;
  }
  
  export default function ResponsiveCard({ title, description }: ResponsiveCardProps) {
    return (
      <div className="p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 text-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    );
  }
  