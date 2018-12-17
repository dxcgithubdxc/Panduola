export var APIhost='https://www.baizhaowangluo.com/eshop';
//export var APIhost=  'http://192.168.1.61';
export function ajax(options) {
                    options = options || {};
                    options.type = (options.type || "GET").toUpperCase();
                    options.dataType = options.dataType || "jsonp";
                    var params = formatParams(options.data);
                    var xhr;


                    //创建 - 第一步
                    if (window.XMLHttpRequest) {
                      xhr = new XMLHttpRequest();
                    } 


                    //连接 和 发送 - 第二步
                    if (options.type == "GET") {
                      xhr.open("GET", options.url + "?" + params, true);
                      xhr.send(null);
                    } else if (options.type == "POST") {
                      xhr.open("POST", options.url, true);
                      //设置表单提交时的内容类型
                      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                      xhr.send(params);
                    }


                     //接收 - 第三步
                    xhr.onreadystatechange = function () {
                      if (xhr.readyState == 4) {
                        var status = xhr.status;
                        if (status >= 200 && status < 300 || status == 304) {
                          options.success && options.success(xhr.responseText, xhr.responseXML);
                        } else {
                          options.error && options.error(status);
                        }
                      }
                    }
                  }


                  //格式化参数
 export function  formatParams(data) {
                    var arr = [];
                    for (var name in data) {
                      arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
                    }
                    arr.push(("v=" + Math.random()).replace("."));
                    return arr.join("&");
                  }


                  //模板调用函数
  // Ceshi22(){
  //   const content=this;
  //     reajax.ajax({
  //     url: "http://192.168.1.61:8080/phone/back",       //请求地址
  //     type: "POST",                            //请求方式
  //     data: {
  //     openid:"web" ,
  //     phoneType:content.state.phoneType,
  //     name:content.state.name,
  //     phone:content.state.mobile,
  //     remark:content.state.address,
  //      },    //请求参数
  //     // dataType: "json",
  //     dataType: 'jsonp',
  //      // jsonp:"callback",
  //     // jsonpCallback:"jsonpCallback_webOrderAdd",
  //     success: function (resStr) {        // 此处放成功后执行的代码
  //       var res=JSON.parse(resStr);
  //       console.log(res);
  //     },
  //     error: function (res) { // 此处放失败后执行的代码
  //       console.log(res);
  //     }
  //   });
  // }