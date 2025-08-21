import { render, screen } from '@testing-library/react'
import { StatCard } from '../StatCard'

describe('StatCard', () => {
  it('renders correctly with all props', () => {
    render(
      <StatCard
        title="Win Rate"
        value="65.5%"
        subtitle="13/20 games"
        color="success"
      />
    )

    expect(screen.getByText('Win Rate')).toBeInTheDocument()
    expect(screen.getByText('65.5%')).toBeInTheDocument()
    expect(screen.getByText('13/20 games')).toBeInTheDocument()
  })

  it('applies correct color classes', () => {
    const { container } = render(
      <StatCard
        title="Test"
        value="100"
        subtitle="test"
        color="success"
      />
    )

    const card = container.firstChild
    expect(card).toHaveClass('border-success-200', 'bg-success-50', 'text-success-700')
  })

  it('handles different color variants', () => {
    const { rerender, container } = render(
      <StatCard
        title="Test"
        value="100"
        subtitle="test"
        color="error"
      />
    )

    expect(container.firstChild).toHaveClass('border-error-200', 'bg-error-50', 'text-error-700')

    rerender(
      <StatCard
        title="Test"
        value="100"
        subtitle="test"
        color="warning"
      />
    )

    expect(container.firstChild).toHaveClass('border-warning-200', 'bg-warning-50', 'text-warning-700')
  })
})
