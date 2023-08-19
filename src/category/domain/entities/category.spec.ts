import { Category } from './category'

describe('Category Unity Tests', () => {
  test('constructor of category', () => {
    const mock_created_at = new Date()
    const category = new Category({
      name: 'Movie',
      is_active: true,
      description: 'Movie description',
      created_at: mock_created_at,
    })

    expect(category.props).toStrictEqual({
      name: 'Movie',
      is_active: true,
      description: 'Movie description',
      created_at: mock_created_at,
    })
  })

  test('category getters', () => {
    const mock_created_at = new Date()
    const category = new Category({
      name: 'Movie',
      is_active: true,
      description: 'Movie description',
      created_at: mock_created_at,
    })

    expect(category.name).toBe('Movie')
    expect(category.description).toBe('Movie description')
    expect(category.is_active).toBe(true)
    expect(category.created_at).toBe(mock_created_at)
  })
})
