const removeDuplicates = require('./approach1')

test('Example 1', () => {
	const nums = [1, 1, 2]

	const result = removeDuplicates(nums)

	expect(result).toStrictEqual(2)
})

test('Example 2', () => {
	const nums = [0,0,1,1,1,2,2,3,3,4]

	const result = removeDuplicates(nums)

	expect(result).toStrictEqual(5)
})