import { Category, CategoryProperties } from './category'
import { omit } from 'lodash'
import { validate as uuidValidate } from 'uuid'

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

    let created_at = new Date()
    category = new Category({
      name: 'Movie',
      description: 'Movie description',
      is_active: false,
      created_at,
    })
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

  test('id field', () => {
    type CategoryData = { props: CategoryProperties; id?: string }
    const data: CategoryData[] = [
      { props: { name: 'Movie' } },
      { props: { name: 'Movie' }, id: null },
      { props: { name: 'Movie' }, id: undefined },
      { props: { name: 'Movie' }, id: 'b50d9b0d-b08c-4466-b462-b79b1ba0024d' },
    ]

    data.forEach((item) => {
      const category = new Category(item.props, item.id)
      expect(category.id).not.toBeNull()
      expect(uuidValidate(category.id)).toBeTruthy()
    })
  })

  test('getter of name field', () => {
    const category = new Category({
      name: 'Movie',
    })
    expect(category.name).toBe('Movie')
  })

  test('getter and setter of description field', () => {
    let category = new Category({
      name: 'Movie',
    })
    expect(category.description).toBeNull()

    category = new Category({
      name: 'Movie',
      description: 'Movie description',
    })
    expect(category.description).toBe('Movie description')

    category = new Category({
      name: 'Movie',
    })
    category['description'] = 'Other description'
    expect(category.description).toBe('Other description')

    category = new Category({
      name: 'Movie',
    })
    category['description'] = undefined
    expect(category.description).toBeNull()

    category = new Category({
      name: 'Movie',
    })
    category['description'] = null
    expect(category.description).toBeNull()
  })

  test('getter and setter of is_active field', () => {
    let category = new Category({
      name: 'Movie',
    })
    expect(category.is_active).toBeTruthy()

    category = new Category({
      name: 'Movie',
      is_active: false,
    })
    expect(category.is_active).toBeFalsy()

    category = new Category({
      name: 'Movie',
      is_active: false,
    })
    category['is_active'] = true
    expect(category.is_active).toBeTruthy()

    category = new Category({
      name: 'Movie',
      is_active: true,
    })
    category['is_active'] = false
    expect(category.is_active).toBeFalsy()
  })

  test('getter of created_at field', () => {
    let category = new Category({
      name: 'Movie',
    })
    expect(category.created_at).toBeInstanceOf(Date)

    const created_at = new Date()
    category = new Category({
      name: 'Movie',
      created_at,
    })
    expect(category.created_at).toBe(created_at)
  })
})
