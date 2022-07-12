function testFunc(nums, target) {
  nums.forEach((item, index) => {
    if (item <= target) {
        let sub = target - item
        // console.log(nums.slice(index+1))
        if (nums.slice(index+1).includes(sub)) {
            console.log(index, nums.findIndex((itm, idx) => (itm == sub && index != idx)))
            return
        }
    }
  })
}
nums = [3, 1, 2, 3], target = 6
testFunc(nums, target)