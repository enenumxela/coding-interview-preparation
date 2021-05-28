package solution

func twoSum(nums []int, target int) []int {
	temp := make(map[int]int)

	for i, value := range nums {

		if j, ok := temp[target-value]; ok {
			return []int{j, i}
		}

		temp[value] = i
	}

	return nil
}
