import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

class ListNode {
    int val;
    ListNode next;
    //ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        if(list1.val <= list2.val) {
            list1.next = mergeTwoLists(list1.next, list2);
            return list1;
        }else {
            list2.next = mergeTwoLists(list1, list2.next);
            return list2;
        }
    }

    public int removeElement(int[] nums, int val) {
        int k = 0;

        for(int i = 0; i < nums.length; i++) {
            if(nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }

    // Majority Element
    // Given an array "nums" of size "n", return the majority element
    // The majority element is the element that appears more than [n / 2] times.
    // nums = [3, 2, 3] output: 3 | nums = [2,2,1,1,1,2,2] Output: 2 (size is: 7 / 2 -> 3 times)
    public int majorityElement(int[] nums) {
        int size = nums.length;
        int output = 0;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        for (int num : nums) {
            if (map.containsKey(num)) {
                map.replace(num, map.get(num) + 1);
            } else {
                map.put(num, 1);
            }
        }

        int timeSeen = size / 2;

        for (int num : nums) {
            int appearCount = map.getOrDefault(num, 0);
            if (appearCount > timeSeen) {
                output = num;
            }
        }

        return output;
    }
}
