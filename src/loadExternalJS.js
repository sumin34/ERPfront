function loadExternalJS() {
  // 필요한 파일들을 동적으로 생성해줍니다.
  const script1 = document.createElement("script");
  script1.src = "/vendors/popper/popper.min.js";
  script1.async = true;

  const script2 = document.createElement("script");
  script2.src = "/vendors/bootstrap/bootstrap.min.js";
  script2.async = true;

  const script3 = document.createElement("script");
  script3.src = "/vendors/anchorjs/anchor.min.js";
  script3.async = true;

  const script4 = document.createElement("script");
  script4.src = "/vendors/is/is.min.js";
  script4.async = true;

  const script5 = document.createElement("script");
  script5.src = "/vendors/echarts/echarts.min.js";
  script5.async = true;

  const script6 = document.createElement("script");
  script6.src = "/vendors/fontawesome/all.min.js";
  script6.async = true;

  const script7 = document.createElement("script");
  script7.src = "/vendors/lodash/lodash.min.js";
  script7.async = true;

  const script8 = document.createElement("script");
  script8.src = "https://polyfill.io/v3/polyfill.min.js?features=window.scroll";
  script8.async = true;

  const script9 = document.createElement("script");
  script9.src = "/vendors/list.js/list.min.js";
  script9.async = true;

  const script10 = document.createElement("script");
  script10.src = "/assets/js/theme.js";
  script10.async = true;

  // 생성된 script 요소들을 body에 붙여주세요
  document.body.appendChild(script1);
  document.body.appendChild(script2);
  document.body.appendChild(script3);
  document.body.appendChild(script4);
  document.body.appendChild(script5);
  document.body.appendChild(script6);
  document.body.appendChild(script7);
  document.body.appendChild(script8);
  document.body.appendChild(script9);
  document.body.appendChild(script10);
}

export default loadExternalJS;
