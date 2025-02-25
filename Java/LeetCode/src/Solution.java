import java.util.ArrayList;
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


    // Max Profit
    // You are given an array "prices" where "prices[i]" is the price of a given stock on the "ith" day
    // You want to maximize your profit by choosing a single day to buy stock
    // and choosing a different day in the future to sett that stock
    // Return the maximum profit you can achieve from this transaction.
    // If you cannot achieve any profit, return 0
    // prices = [7, 1, 5, 3, 6, 4] Output: 5 -> Buy on day2:1 and sell on day5:6 profit: 6-1: 5
    // prices = [7, 6, 4, 3, 1] Output: 0 -> No profit

    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for(int price : prices) {
            if(price < minPrice) {
                minPrice = price;
            }else {
                maxProfit = Math.max(maxProfit, price-minPrice);
            }
        }

        return maxProfit;
    }

    // Last Visited Integers
    // Given an integer array "nums" where nums[i] is either a positive integer or -1.
    // We need to find for each -1 the respective positive integer, which we call the last visited integer
    // To achieve this goal, lets define two empty arrays: seen and ans
    // Start iterating from the beginning of the array nums

    // - If a positive integer is encountered, prepend it to the front of seen
    // - If -1 is encountered, let "k" be the number of consecutive -1s seen so far (including the current -1)
    // - If k is less than or equal to the length of seen, append the k-th element of seen to ans
    // - If k is strictly greater than the length of seen, append -1 to ans

    // Return the array ans

    // nums = [1, 2, -1, -1, -1] output: [2, 1, -1]
    public List<Integer> lastVisitedIntegers(int[] nums) {
        List<Integer> seen = new ArrayList<>();
        List<Integer> ans = new ArrayList<>();
        int k = 0;

        for(int num : nums) {

            if(num > 0) {
                seen.addFirst(num);
                k = 0;
            }else if(num == -1){
                k++;
                int seenSize = seen.size();
                if(k <= seenSize) {
                    ans.add(seen.get(k-1));
                }else {
                    ans.add(-1);
                }
            }
        }

        return ans;
    }


































}
