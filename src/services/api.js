import React from 'react';
import { stringify } from 'query-string';


const constValue = {
  url: 'http://212.174.9.86:10080/WebService.asmx',
  version: 'v1'
};


//#region Global Api Folder
const Api = () => {
  return {
    get(query, params) {

      var url = constValue.url + '/' + query;
      if (params) {
        // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        url = url + '?' + stringify(params);
      }



      return fetch(url)
        .then((response) => response.json());

    },
    post(query, queryParams, bodyParams) {
      var url = new URL(constValue.url + '/' + query);
      if (queryParams)
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

      return this.props.fetch(url, {
        method: 'POST',
        body: JSON.stringify(bodyParams)
      })
        .then((response) => response.json());
    },
    put(query, queryParams, bodyParams) {
      var url = new URL(constValue.url + '/' + query);
      if (queryParams)
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

      return this.props.fetch(url, {
        method: 'PUT',
        body: JSON.stringify(bodyParams)
      })
        .then((response) => response.json());
    },
    delete(query, queryParams, bodyParams) {
      var url = new URL(constValue.url + '/' + query);
      if (queryParams)
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

      return this.props.fetch(url, {
        method: 'DELETE',
        body: JSON.stringify(bodyParams)
      })
        .then((response) => response.json());
    }
  };
};
//#endregion Global Api Folder
export default Api;