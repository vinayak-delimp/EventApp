const apicall = async(params) => {
    const options = {
      'method': 'POST',
    //   'headers': {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    };
    try {
      
     // let url = ApiCommon.base_url + ApiCommon.get_all_categories+params;
      const response = await fetch(params, options);
      const respObj = await response.json();
      return respObj;
    } catch (e) {
      return {
        message: e
      };
    }
  }