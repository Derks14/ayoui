export const StorageService = {
  setAccessToken: (value) => {
    localStorage.setItem("access-token", value);
  },
  getAccessToken: () => localStorage.getItem("access-token"),
};
