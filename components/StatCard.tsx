interface StatCardProps {
  title: string
  value: string
  subtitle: string
  color: 'primary' | 'success' | 'warning' | 'error'
}

export function StatCard({ title, value, subtitle, color }: StatCardProps) {
  const colorClasses = {
    primary: 'border-primary-200 bg-primary-50 text-primary-700',
    success: 'border-success-200 bg-success-50 text-success-700',
    warning: 'border-warning-200 bg-warning-50 text-warning-700',
    error: 'border-error-200 bg-error-50 text-error-700'
  }

  return (
    <div className={`card border-2 ${colorClasses[color]} text-center`}>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm font-medium mb-1">{title}</div>
      <div className="text-xs opacity-75">{subtitle}</div>
    </div>
  )
}
