const twoSum = require('./approach3')

test('Example 1', () => {
	const nums = [2, 7, 11, 15]
	const target = 9

	const result = twoSum(nums, target)

	expect(result).toStrictEqual([0, 1])
})

test('Example 2', () => {
	const nums = [3,2,4]
	const target = 6

	const result = twoSum(nums, target)

	expect(result).toStrictEqual([1, 2])
})