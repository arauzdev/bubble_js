function fill_gui() {
  let c = 0;
  v_btns.forEach((v_btn) => {
    v_btn.innerHTML = v_nums[c];
    v_btn.className = "default_number_slot";
    c++;
  } );
  document.getElementById("orig_v").innerHTML = v_nums;
  document.getElementById("scrollbox_pasos_agoritmo").innerHTML = "";
}

function change_state(v_btn,state,alg_swap=null) {
  if(alg_swap == null) {
    //v_btn.className = state;
    if(state == "default_number_slot")
      v_btn.style.backgroundColor = "green";
    if(state == "selected" )
      v_btn.style.backgroundColor = "yellow";
    if(state == "error_detected")
      v_btn.style.backgroundColor = "red";
  }
  else {
    v_btn.innerHTML = alg_swap;
    v_btn.style.backgroundColor = "blue";
  }
}
function add_step_scrollbox(i,arr) {
  document.getElementById("scrollbox_pasos_agoritmo").innerHTML+= i +") " + arr +"\n";
}

function make_btns() { 
  for(let c = 0 ; c < 5;c++) {
    const btn_num_slot = document.createElement("button");
    v_btns.push(btn_num_slot); 
    document.getElementById("main_div").appendChild(btn_num_slot);
  }
}