const defaultState = {
  inputValue: '',
  inputValueOne: '',
  inputValueTwo: '',
  list: [],
}

export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'changeOne_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValueOne = action.valueOne;
    return newState;
  }
  if (action.type === 'changeTwo_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValueTwo = action.valueTwo;
    return newState;
  }
  if (action.type === 'add_todo_list') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue, newState.inputValueOne, newState.inputValueTwo );
    newState.inputValue = '';
    newState.inputValueOne = '';
    newState.inputValueTwo = '';
    return newState;
  }
  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
