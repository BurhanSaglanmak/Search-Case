import React, { createContext, useContext, useReducer, useState } from "react";
import searchReducer from "../reducers/searchReducer";

const SearchContext = createContext();

const initialState = { data: [], samplesData: [] };

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const [newRecordLink, setNewRecordLink] = useState("/");
  const [errorMessages, setErrorMessages] = useState({
    nameSurname: '',
    country: '',
    city: '',
    email: '',
    website: '',
  });
  const [errorCompHide, setErrorHideComp] = useState(false);
  const [responsePost, setResponsePost] = useState();
  const [successHide, setSuccesHide] = useState(false)


  const setResults = (data) => {
    dispatch({
      type: "SET_RESULTS",
      payload: data,
    });
  };

  const setSamplesData = (data) => {
    dispatch({
      type: "SET_SAMPLES_DATA",
      payload: data,
    });
  };

  const changeSort = (event) => {
    const value = event.target.value;
    dispatch({
      type: "CHANGE_SORT",
      payload: value,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        state,
        setResults,
        changeSort,
        setSamplesData,
        newRecordLink,
        setNewRecordLink,
        errorMessages,
        setErrorMessages,
        errorCompHide,
        setErrorHideComp,
        responsePost,
        setResponsePost,
        successHide,
        setSuccesHide
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
