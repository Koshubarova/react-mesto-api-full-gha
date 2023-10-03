class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    // this._headers = options.headers
    // this._authorization = options.headers.authorization
    // this._authUrl = options.authUrl;
    // this._token = options.token;
  }

  _checkResponse(res) {return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);}

  getInitialCards(token) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      
    })
      .then(this._checkResponse)
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  setUserInfo(data, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.username,
        about: data.description,
      })
    })
      .then(this._checkResponse)
  }

  setPhoto(data, token) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(this._checkResponse)
  }

  addNewCard(data, token) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      })
    })
      .then(this._checkResponse)
  }

  addLike(cardId, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  deleteLike(cardId, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }

  deleteCard(cardId, token) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'http://127.0.0.1:3001'
  // headers: {
  //   authorization: `Bearer ${token}`,
  //   'Content-Type': 'application/json'
  // }
});

export default api

// class Api {
//   constructor(options) {
//     this._baseUrl = options.baseUrl;
//     this._headers = options.headers
//     this._authorization = options.headers.authorization
//     this._authUrl = options.authUrl;
//     this._token = options.token;
//   }

//   _checkResponse(res) {return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);}

//   getInitialCards() {
//     return fetch(`${this._baseUrl}/cards`, {
//       headers: this._headers,
//       // credentials: 'include'
//     })
//       .then(this._checkResponse)
//   }

//   getUserInfo() {
//     return fetch(`${this._baseUrl}/users/me`, {
//       headers: this._headers,
//       // credentials: 'include'
//     })
//       .then(this._checkResponse)
//   }

//   setUserInfo(data) {
//     return fetch(`${this._baseUrl}/users/me`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: data.username,
//         about: data.description,
//       })
//     })
//       .then(this._checkResponse)
//   }

//   setPhoto(data) {
//     return fetch(`${this._baseUrl}/users/me/avatar`, {
//       method: 'PATCH',
//       headers: this._headers,
//       body: JSON.stringify(data)
//     })
//     .then(this._checkResponse)
//   }

//   addNewCard(data) {
//     return fetch(`${this._baseUrl}/cards`, {
//       method: 'POST',
//       headers: this._headers,
//       body: JSON.stringify({
//         name: data.name,
//         link: data.link,
//       })
//     })
//       .then(this._checkResponse)
//   }

//   addLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//       method: 'PUT',
//       headers: this._headers
//     })
//     .then(this._checkResponse)
//   }

//   deleteLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//     .then(this._checkResponse)
//   }

//   deleteCard(cardId) {
//     return fetch(`${this._baseUrl}/cards/${cardId}`, {
//       method: 'DELETE',
//       headers: this._headers
//     })
//     .then(this._checkResponse)
//   }
// }

// const api = new Api({
//   baseUrl: 'http://127.0.0.1:3001',
//   headers: {
//     authorization: '39c56915-9550-44c8-84ed-160de228f283',
//     'Content-Type': 'application/json'
//   }
// });

// export default api