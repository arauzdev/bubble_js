class num_slot {
  constructor(num, state,alg_swap) {
    this.num = num;
    this.state = state;
    this.alg_swap = alg_swap;
  }
}
//start new example
function new_set() {
  v_nums = Array.from({length: glob_vlen}, () => Math.floor(Math.random() * 9));
  v_states = [];
  len_states = 0;
  index_states = 0;
}

/***read all states****/
function read_all_states() {

  //read all or redraw GUI
  if (index_states != len_states - 1) {

    //change the statye of all buttons
    let curr_state = v_states[index_states];
    if( index_states < len_states) {
      curr_state.forEach((slot) => {
        change_state(v_btns[slot.num],slot.state,slot.alg_swap)
      });
      index_states++;
    }
  }
  else { //sort new array
    new_set();
    fill_gui();
    bubbleSort(v_nums,glob_vlen);
  }
}

///// un arreglo para cada paso de bubblesort
function make_state_vector (p_btnA,p_btnB,state,swap_tup = [null,null]) {
  let temp_v = []
  //insertar un elemento visual con un numero y un estado css
  //a cada elemento del arreglo del estado del algoritmo
  //btnA y btnB son ls posiciones numericas en btn
  //invertir aunque los datos sean nulos
  for (let i = 0; i < glob_vlen; i++) {
    if( i == p_btnA ) {
      temp_v.push(new num_slot(i,state,swap_tup[0]));
    }
    if( i == p_btnB) {
      temp_v.push(new num_slot(i,state,swap_tup[1]));
    }
  }
  v_states.push(temp_v);
}

function state_factory(j,swap_v,c,arr) {
  //state 1 - select
  make_state_vector(j,j+1,"selected")
  if (swap_v != null) {
    //state 2 - detect error in order
    make_state_vector(j,j+1,"error_detected")
    //state 3 - swapp
    make_state_vector(j,j+1,"values_swapped",[arr[j],arr[j+1]]);        
  }
  // state 4 -deselect
  make_state_vector(j,j+1,"default_number_slot");
  make_state_vector(j,j+1,"default_number_slot");
}
