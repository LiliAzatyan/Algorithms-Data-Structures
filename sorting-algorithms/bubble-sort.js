function bubbleSort(array) {
	let flag = new Boolean(true);
	for (let i = 0; i < array.length; ++i) {
		flag = true;
		for (let j = 0; j < array.length; ++j) {
			if (array[j] > array[j + 1]) {
				array[j] = array[j] ^ array[j + 1];
				array[j + 1] = array[j] ^ array[j + 1];
				array[j] = array[j] ^ array[j + 1];
				flag = false;
			}
		}
		if (flag) {
			return array;
		}
	}
	return array;
}
console.log(bubbleSort([80, 9, 1, 2, 3, -8, 4, 5, 7]));
