import java.util.HashSet;
import java.util.Set;

/**
 * 链表
 */
public class LinkedList {

	public static void main(String[] args) {
		ListNode node = new ListNode(1);
		node.next = new ListNode(2);
		node.next.next = new ListNode(3);
		node.printLinkedList();

		ListNode reverseList = reverseListRecursion(node);//reverseList(node);
		reverseList.printLinkedList();
	}

	/**
	 * 反转链表
	 *
	 * @param head 单链表头节点
	 * @return 反转后的链表表头
	 */
	public static ListNode reverseList(ListNode head) {
		//新链表
		ListNode newHead = null;
		while (head != null) {
			//下一节点
			ListNode next = head.next;

			//将访问的原链表的节点设置为新链表的头节点
			head.next = newHead;
			newHead = head;

			//访问原链表下一节点
			head = next;
		}

		return newHead;
	}

	/**
	 * 反转链表
	 *
	 * @param head 单链表头节点
	 * @return 反转后的链表表头
	 */
	public static ListNode reverseListRecursion(ListNode head) {
		//终止递归
		if (head == null || head.next == null) {
			return head;
		}

		//下一节点
		ListNode next = head.next;
		//从第二个节点递归调用下一节点，node便是反转后的链表，next便是反转后的链表的尾节点
		ListNode node = reverseListRecursion(next);
		//将当前节点设置为next节点的下一节点，即head变为反转后链表的尾节点
		next.next = head;
		//head相当于反转后链表的尾节点，即是需要将其设置为null
		head.next = null;

		return node;
	}

	/**
	 * 判断链表中是否有环
	 *
	 * @param head 表头
	 * @return 链表中是否有环
	 */
	public boolean hasCycle(ListNode head) {
		//已访问过的节点
		Set<ListNode> set = new HashSet<>();

		while (head != null) {
			//若该节点已被访问过则表示有环
			if (set.contains(head)) {
				return true;
			}
			//将节点加入set
			set.add(head);
			//访问下一节点
			head = head.next;
		}
		return false;
	}

	/**
	 * 判断链表中是否有环
	 *
	 * @param head 表头
	 * @return 链表中是否有环
	 */
	public boolean hasCycleLink(ListNode head) {
		if (head == null) {
			return false;
		}

		//快指针，每次走两步
		ListNode fast = head;
		//慢指针，每次走一步
		ListNode slow = head;

		//如果快指针为null，则不存在环
		while (fast != null && fast.next != null) {
			fast = fast.next.next;
			slow = slow.next;

			//快指针的速度是慢指针的两倍，如果相遇则表示链表有环
			if (slow == fast) {
				return true;
			}
		}
		return false;
	}

	/**
	 * 链表中环的入口结点
	 *
	 * @param head 表头
	 * @return 链表中环的入口结点
	 */
	public ListNode entryNodeOfLoop(ListNode head) {
		//已访问过的节点
		HashSet<ListNode> set = new HashSet<>();

		while (head != null) {
			//若该节点已被访问过（第一次出现重复节点）则表示有环
			if (set.contains(head)) {
				return head;
			}
			//将节点加入set
			set.add(head);
			//访问下一节点
			head = head.next;
		}
		return null;
	}

	/**
	 * 链表中环的入口结点
	 *
	 * @param head 表头
	 * @return 链表中环的入口结点
	 */
	public ListNode entryNodeOfLoopLink(ListNode head) {
		if (head == null) {
			return null;
		}

		//快指针，每次走两步
		ListNode fast = head;
		//慢指针，每次走一步
		ListNode slow = head;

		//如果快指针为null，则不存在环
		while (fast != null && fast.next != null) {
			fast = fast.next.next;
			slow = slow.next;

			//快指针的速度是慢指针的两倍，第一次相遇节点
			if (slow == fast) {
				//快指针的速度是慢指针的两倍，将快指针指向头节点，快指针和慢指针每次走一步，相遇的地方就是入口节点
				fast = head;
				//相遇节点
				while (fast != slow) {
					fast = fast.next;
					slow = slow.next;
				}
				return slow;
			}
		}
		return null;
	}

	/**
	 * 合并两个排序的链表
	 *
	 * @param list1 递增的链表
	 * @param list2 递增的链表
	 * @return 合并两个排序的链表
	 */
	public ListNode Merge(ListNode list1, ListNode list2) {
		if (list1 == null || list2 == null) {
			return list1 == null ? list2 : list1;
		}

		ListNode merge = new ListNode(-1);
		ListNode current = merge;
		while (list1 != null && list2 != null) {
			if (list1.val < list2.val) {
				current.next = list1;
				list1 = list1.next;
			} else {
				current.next = list2;
				list2 = list2.next;
			}
			current = current.next;
		}
		//未比对的节点
		current.next = list1 == null ? list2 : list1;

		return merge.next;
	}

/**
 * 合并两个排序的链表
 *
 * @param list1 递增的链表
 * @param list2 递增的链表
 * @return 合并两个排序的链表
 */
public ListNode MergeR(ListNode list1, ListNode list2) {
	if (list1 == null || list2 == null) {
		return list1 == null ? list2 : list1;
	}
	if (list1.val < list2.val) {
		list1.next = MergeR(list1.next, list2);
		return list1;
	} else {
		list2.next = MergeR(list1, list2.next);
		return list2;
	}
}

	public static class ListNode {

		int val;
		ListNode next;

		public ListNode(int val) {
			this.val = val;
		}

		@Override
		public String toString() {
			return "val=" + val + ", next=" + (next == null ? null : next.val);
		}

		public void printLinkedList() {
			ListNode node = this;
			System.out.println("----------------------------------");
			while (node != null) {
				System.out.println(node);
				node = node.next;
			}
			System.out.println();
		}

	}


}
