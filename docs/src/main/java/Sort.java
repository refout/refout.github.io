import java.util.Arrays;

public class Sort {

	public static void main(String[] args) {
		int[] items = {2, 1, 5, 4, 7, 0};
//		selectionSort(items);
		insertSort(items);
		System.out.println(Arrays.toString(items));


	}

	/**
	 * 选择排序
	 *
	 * @param items 待排序对象
	 */
	public static void selectionSort(int[] items) {
		if (items == null) {
			return;
		}
		int length = items.length;
		if (length <= 1) {
			return;
		}

		int j, minIndex;
		for (int i = 0; i < length - 1; i++) {
			minIndex = i;
			for (j = i + 1; j < length; j++) {
				if (items[minIndex] > items[j]) {
					minIndex = j;
				}

				int temp = items[minIndex];
				items[minIndex] = items[i];
				items[i] = temp;
			}

		}
	}

	/**
	 * 插入排序
	 *
	 * @param items 待排序对象
	 */
	public static void insertSort(int[] items) {
		if (items == null) {
			return;
		}
		int length = items.length;
		if (length <= 1) {
			return;
		}

		int j, item;
		for (int i = 1; i < length; i++) {
			item = items[i];
			j = i - 1;
			while (j >= 0 && items[j] > item) {
				items[j + 1] = items[j];
				j = j - 1;
			}
			items[j + 1] = item;
		}
	}

}
