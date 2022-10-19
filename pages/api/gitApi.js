export const fetchUser = (username) =>
    fetch(`/api/users/${username}`).then((res) => res.json());
