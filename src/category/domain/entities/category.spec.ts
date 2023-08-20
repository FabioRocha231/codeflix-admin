import { Category } from './category'
import { omit } from 'lodash'
describe('Category Unity Tests', () => {
  test('constructor of category', () => {
    let category = new Category({
      name: 'Movie',
    })
    const props = omit(category.props, ['created_at'])
    expect(props).toStrictEqual({
      name: 'Movie',
      is_active: true,
      description: null,
    })
    expect(category.props.created_at).toBeInstanceOf(Date)

    category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
    })
    let created_at = new Date()
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      created_at,
    })

    category = new Category({
      name: 'Movie',
      is_active: true,
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      is_active: true,
    })

    created_at = new Date()
    category = new Category({
      name: 'Movie',
      created_at,
    })
    expect(category.props).toMatchObject({
      name: 'Movie',
      created_at,
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
