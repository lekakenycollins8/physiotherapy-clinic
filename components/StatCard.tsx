interface StatCardProps {
  number: string
  label: string
}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

