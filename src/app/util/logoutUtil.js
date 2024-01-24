export const  handleLogout = () => {
    const action = confirm("Do you want to logout?");
    if (action) {
      localStorage.clear();
      location.reload();
      return;
    }
  };