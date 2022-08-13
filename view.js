function fill_gui() {
  let c = 0;
  //default css to all buttons
  v_btns.forEach((v_btn) => {
    v_btn.innerHTML = v_nums[c];
    v_btn.className = "default_number_slot";
    c++;
  } );
  //reset legend below button vector
  document.getElementById("orig_v").innerHTML = v_nums;
  document.getElementById("scrollbox_pasos_agoritmo").innerHTML = "";
}

function change_state(v_btn,state,alg_swap=null) {
  if(alg_swap == null) {
    //css acording to bubble state
    if(state == "default_number_slot")
      v_btn.style.backgroundColor = "green";
    if(state == "selected" )
      v_btn.style.backgroundColor = "yellow";
    if(state == "error_detected")
      v_btn.style.backgroundColor = "red";
  }
  else {
    //bubble swap
    v_btn.innerHTML = alg_swap;
    v_btn.style.backgroundColor = "blue";
  }
}
//accumulate all steps in the scrollbox
function add_step_scrollbox(i,arr) {
  document.getElementById("scrollbox_pasos_agoritmo").innerHTML+= i +") " + arr +"\n";
}

function make_btns() { 
  for(let c = 0 ; c < glob_vlen;c++) {
    const btn_num_slot = document.createElement("button");
    v_btns.push(btn_num_slot); 
    document.getElementById("main_div").appendChild(btn_num_slot);
  }
}