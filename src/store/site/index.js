const state = {
  list: JSON.parse(sessionStorage.getItem("site")) || []
};
const actions = {};
const mutations = {
  addList(state, Info) {
    console.log(state.list);
    state.list.push({
      id: state.list.length + 1,
      name: Info.name,
      tel: Info.tel,
      province: Info.province,
      city: Info.city,
      county: Info.county,
      addressDetail: Info.addressDetail,
      areaCode: Info.areaCode,
      postalCode: Info.postalCode,
      isDefault: Info.isDefault,
      address: Info.province + Info.city + Info.county + Info.addressDetail
    });
    sessionStorage.setItem("site", JSON.stringify(state.list));
  }
};
export default {
  state,
  actions,
  mutations,
  namespaced: true
};
