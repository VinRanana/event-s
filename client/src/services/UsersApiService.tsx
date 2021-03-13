const BASE_URL = 'http://localhost:4000';

interface ApiServiceInterface {
  register: Function;
  login: Function;
  logout: Function;
  profile: Function;
  getHostDetails: Function;
}

interface RegisterUserInterface {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  host: string;
  photo: string;
}

interface LoginUserInterface {
  email: string;
  password: string;
}

const apiService: ApiServiceInterface = {
  
  register: (user: RegisterUserInterface) => {
    return fetch(`${BASE_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((err) => {throw new Error(err)});
  },
  
  login: (user: LoginUserInterface) => {
    return fetch(`${BASE_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((err) => {throw new Error(err)});
  },
  
  profile: () => {
    return fetch(`${BASE_URL}/me`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((err) => {throw new Error(err)});
  },
  
  logout: () => {
    return fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .catch((err) => {throw new Error(err)});
  },

  getHostDetails: (id: string) => {
    return fetch(`${BASE_URL}/users/${id}`)
      .then((res) => res.json())
      .catch((err) => {throw new Error(err)});
  }
};

export default apiService;
