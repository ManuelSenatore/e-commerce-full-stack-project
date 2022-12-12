export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";
export const LOG_OUT = "LOG_OUT";
export const SET_PRODOTTO_LIST = "SET_PRODOTTO_LIST";
export const SET_PREFERITI_LIST = "SET_PREFERITI_LIST";
export const SET_CARRELLO_LIST = "SET_CARRELLO_LIST";
export const SET_CATEGORIA_LIST = "SET_CATEGORIA_LIST";
export const ORDER_CATEGORIA_LIST = "ORDER_CATEGORIA_LIST";
export const SET_ORDER_LIST = "SET_ORDER_LIST";
export const REMOVE_TO_ORDER = "REMOVE_TO_ORDER";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logout = () => ({
  type: LOG_OUT,
});

export const setProdottoList = (prodottoList) => ({
  type: SET_PRODOTTO_LIST,
  payload: prodottoList,
});

export const setPreferitiList = (preferitiList) => ({
  type: SET_PREFERITI_LIST,
  payload: preferitiList
})

export const setCarrelloList = (carrelloList) => ({
  type: SET_CARRELLO_LIST,
  payload: carrelloList
})

export const setCategoriaList = (categoriaList) => ({
  type: SET_CATEGORIA_LIST,
  payload: categoriaList
})

export const orderCategoriaList = (categoriaList) => ({
  type: ORDER_CATEGORIA_LIST,
  payload: categoriaList
})

export const setOrderList = (data) => ({
  type: SET_ORDER_LIST,
  payload: data
})

export const removeOrder = (i) => ({
  type: REMOVE_TO_ORDER,
  payload: i
})

export const logIn = (obj) => {
  const baseEndpoint = "http://localhost:8080/auth/login";

  const header = {
    "Content-type": "application/json",
  };

  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint, {
        method: "POST",
        headers: header,
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setUser(data));
        console.log(data);
      } else {
        console.log("username o password errata");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProdottoList = () => {
  const baseEndpoint = "http://localhost:8080/api/prodotti";
  console.log("eseguo get prodotto list");

  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint, {
        method: "GET",
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        dispatch(setProdottoList(data));

        console.log(data);
      } else {
        console.log("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPreferitiList = (key, id) => {
  const baseEndpoint = `http://localhost:8080/api/preferiti/${id}`;
  console.log ( "eseguo get preferiti list" );
  const header = {
      Authorization : `Bearer ${ key }` ,
  };
  return async (dispatch , getState) => {
      try {
          const response = await fetch ( baseEndpoint , {
              method : "GET" ,
              headers : header ,
          } );
          if ( response.ok ) {
              const data = await response.json ();
              dispatch(setPreferitiList(data))
              console.log(response);
              console.log ( data );
          } else {
              console.log ( "Error fetching results" );
          }
      } catch ( error ) {
          console.log ( error );
      }
  };
};

export const getCarrelloList = (key, id) => {
  const baseEndpoint = `http://localhost:8080/api/carrello/${id}`;
  console.log ( "eseguo get preferiti list" );
  const header = {
      Authorization : `Bearer ${ key }` ,
  };
  return async (dispatch , getState) => {
      try {
          const response = await fetch ( baseEndpoint , {
              method : "GET" ,
              headers : header ,
          } );
          if ( response.ok ) {
              const data = await response.json ();
              dispatch(setCarrelloList(data))
              console.log(response);
              console.log ( data );
          } else {
              console.log ( "Error fetching results" );
          }
      } catch ( error ) {
          console.log ( error );
      }
  };
};

export const getCategoriaList = (categoria) => {
  const baseEndpoint = `http://localhost:8080/api/prodotti/categoria/${categoria}`;
  console.log ( "eseguo get categoria list" );
  return async (dispatch ) => {
      try {
          const response = await fetch ( baseEndpoint , {
              method : "GET" ,
          } );
          if ( response.ok ) {
              const data = await response.json ();
              dispatch(setCategoriaList(data))
              console.log ( data );
          } else {
              console.log ( "Error fetching results" );
          }
      } catch ( error ) {
          console.log ( error );
      }
  };
};

export const orderingCategoriaList = (categoria, value) => {
  const baseEndpoint = `http://localhost:8080/api/prodotti/categoria/${categoria}/${value}`;
  console.log ( "eseguo get categoria list" );
  return async (dispatch ) => {
      try {
          const response = await fetch ( baseEndpoint , {
              method : "GET" ,
          } );
          if ( response.ok ) {
              const data = await response.json ();
              dispatch(orderCategoriaList(data))
              console.log ( data );
          } else {
              console.log ( "Error fetching results" );
          }
      } catch ( error ) {
          console.log ( error );
      }
  };
};