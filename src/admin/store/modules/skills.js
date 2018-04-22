const skills = {
  state: {
    data: [],
  },
  getters: {
    skills(state) {
      return state.data;
    },
  },
  mutations: {
    addSkill(state, skill) {
      state.data.push(skill);
    },
    removeSkill(state, skillid) {
      state.data = state.data.filter(item => item.id!==skillid);  
    },
  },
  actions: {
    fetchSkills({ state }) {
      fetch('/portfolio_pages/json/skills.json')
        .then(data => data.json())
        .then(responce => state.data = responce);
    },
  },
};

export default skills;