import { RolePerformance } from '@/types/lol'

interface RoleAnalysisProps {
  roles: RolePerformance[]
}

export function RoleAnalysis({ roles }: RoleAnalysisProps) {
  if (roles.length === 0) {
    return <p className="text-gray-500 text-center py-4">No role data available</p>
  }

  return (
    <div className="space-y-4">
      {roles.map((role) => (
        <div key={role.role} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <span className="text-primary-600 font-bold text-lg">
                {role.role.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{role.role}</h4>
              <p className="text-sm text-gray-500">{role.games} games played</p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              {role.winRate.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-500">
              {role.wins}/{role.games} wins
            </div>
          </div>

          <div className="text-right ml-8">
            <div className="text-sm text-gray-600">KDA: {role.averageKDA.toFixed(2)}</div>
            <div className="text-sm text-gray-600">CS: {role.averageCS.toFixed(0)}</div>
            <div className="text-sm text-gray-600">Vision: {role.averageVisionScore.toFixed(1)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
