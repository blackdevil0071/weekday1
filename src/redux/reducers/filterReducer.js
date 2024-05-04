// filterReducer.js
const filterReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          [action.filterName]: action.value
        };
      case 'RESET_FILTERS':
        return {
          roles: [],
          employees: [],
          experience: "",
          remote: [],
          techStack: [],
          minBasePaySalary: "",
          companyName: ""
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  