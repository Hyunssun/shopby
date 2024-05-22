// 디코딩
export const atou = (str) => {
  const decoded = window.atob(str);
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(
    new Uint8Array([...decoded].map((c) => c.charCodeAt(0)))
  );
};

// 인코딩
export const utoa = (str) => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode("0x" + p1);
    })
  );
};
