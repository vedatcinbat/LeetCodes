public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();

        ListNode list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
        ListNode list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

        solution.mergeTwoLists(list1, list2);
    }
}