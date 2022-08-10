//***BUBBLE SORT****/
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}
// An optimized version of Bubble Sort
function bubbleSort( arr, n) {
  var i, j,c = 0;
  for (i = 0; i < n-1; i++) {
    for (j = 0; j < n-i-1; j++) {
      let swap_v = null;
      if (arr[j] > arr[j+1]) {              
        swap(arr,j,j+1);
        swap_v = [arr[j],arr[j+1]];
      }
      //generr estado, swap_v puede ser null
      state_factory(j,swap_v,c,arr)
      add_step_scrollbox(c,arr);

      c++;
    }
  }
  len_states = v_states.length;
}