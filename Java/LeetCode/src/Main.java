import java.util.List;

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
//
//        ListNode list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
//        ListNode list2 = new ListNode(2, new ListNode(4, new ListNode(6)));
//
//        solution.mergeTwoLists(list1, list2);
//
//        int[] myNumsList = new int[] {3, 2, 3};
//
//        int majorityElement = solution.majorityElement(myNumsList);
//
//        System.out.println("Majority Element: "+ majorityElement);

        // [7,1,5,3,6,4]
//        int[] profitArr = new int[] {7, 1, 5, 3, 6, 4};
//
//        int maxProfit = solution.maxProfit(profitArr);
//
//        System.out.println("Max Profit: "+ maxProfit);
//

        // [1, 2, -1, -1, -1]
        int[] nums = new int[] {1, -1, 2, -1, -1};
        List<Integer> result = solution.lastVisitedIntegers(nums);

        System.out.println(result);


    }
}