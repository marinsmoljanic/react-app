export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      // state.push(action.course); // los nacin -> MUTATES STATE
      // zasto je "...action.course", a ne "action.course" jer tako isto kopiramo i vrijednost novog coursea?
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
