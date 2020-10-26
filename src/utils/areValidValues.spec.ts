import areValidValues from './areValidValues'

describe('areValidValues', () => {
  const onValidade = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return false if the passed values do not correspond to the pattern', () => {
    const wrongDot = areValidValues(
      { value: '30.00', description: 'a' },
      onValidade
    )

    const wrongComma = areValidValues(
      { value: '3,000', description: 'a' },
      onValidade
    )

    const rightDotWrongComma = areValidValues(
      { value: '3.000,9812', description: 'a' },
      onValidade
    )

    const rightCommaWrongDot = areValidValues(
      { value: '3000.98,12', description: 'a' },
      onValidade
    )

    expect([
      wrongComma,
      wrongDot,
      rightDotWrongComma,
      rightCommaWrongDot
    ]).toStrictEqual([false, false, false, false])

    expect(onValidade).toHaveBeenCalledTimes(4)
    expect(onValidade).toHaveBeenCalledWith(true)
  })

  it('should return false if the passed description is empty', () => {
    const emptyDescription = areValidValues(
      { value: '1', description: '' },
      onValidade
    )

    expect(emptyDescription).toStrictEqual(false)

    expect(onValidade).toHaveBeenCalledTimes(1)
    expect(onValidade).toHaveBeenCalledWith(true)
  })

  it('should return true if the passed value and description is correctly', () => {
    const emptyDescription = areValidValues(
      { value: '3000', description: 'uma descrição qualquer' },
      onValidade
    )

    expect(emptyDescription).toStrictEqual(true)

    expect(onValidade).toHaveBeenCalledTimes(1)
    expect(onValidade).toHaveBeenCalledWith(false)
  })
})
