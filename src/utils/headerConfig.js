const headerConfig = {
  getAppJson() {
    return {
      "Content-Type": "application/json"
    };
  },
  getArrayBuffer() {
    return {
      "Content-Type": "arraybuffer"
    };
  },
  getBlob() {
    return {
      "Content-Type": "blob"
    };
  },
  getFormData() {
    return {
      "Content-Type": "multipart/form-data"
    };
  }
};

export default headerConfig;
