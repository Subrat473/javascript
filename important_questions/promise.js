function requestData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "explainthis.io") {
          resolve("hello welcome to explainthis");
        } else {
          reject("it is not explainthis");
        }
      }, 3000);
    });
  }
  
  // 1. Request success
  requestData("explainthis.io").then((res) => {
    console.log(res); //hello welcome to explainthis
  });
  
  // 2. Request failed
  requestData("explainthis.com").catch((e) => console.log(e)); //it is not explainthis