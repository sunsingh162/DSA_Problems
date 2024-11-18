function mergeSortedArray(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  //When all elements in nums1 are greater than nums2,then nums1 length will be zero when nums2 eval starts
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  return nums1;
}

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
