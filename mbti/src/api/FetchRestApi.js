/*
  RESTful API
  ex) /mbti (GET), /mbti/ensp (GET)
      /mbti (POST)
      /mbti (PUT)
      /mbti (DELETE)
*/

export default function FetchRestApi(baseUrl) {
  const headers = {
    "accept" : "application/json"
  };
  const options = {
    headers
  };

  this.getAll = async () => {
    let resp = await fetch(baseUrl, options);
    if(resp.ok) {
      return await resp.json()
    } else {
      throw new Error(resp.statusText);
    }
  }

  this.getOne = async (id) => {
    let resp = await fetch(`${baseUrl}/${id}`, options);
    if(resp.ok) {
      return await resp.json()
    } else {
      throw new Error(resp.statusText);
    }
  }

  this.create = async (data) => {
    let resp = await fetch(baseUrl, {
      method: "post",
      headers: {
        ...headers,
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if(resp.ok) {
      return await resp.json()
    } else {
      throw new Error(resp.statusText);
    }
  }

  this.update = async (id, data) => {
    let resp = await fetch(`${baseUrl}/${id}`, {
      method: "put",
      headers: {
        ...headers,
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if(resp.ok) {
      return await resp.json()
    } else {
      throw new Error(resp.statusText);
    }
  }

  this.remove = async (id) => {
    let resp = await fetch(`${baseUrl}/${id}`, {
      method: "delete",
      ...options      
    });
    if(resp.ok) {
      return await resp.json()
    } else {
      throw new Error(resp.statusText);
    }
  }

}