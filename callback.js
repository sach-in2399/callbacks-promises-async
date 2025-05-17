// Simulates downloading data from a URL
function downloadData(url, callback) {
  console.log(`Starting download from ${url}`);
  setTimeout(() => {
    const data = {
      content: "Sample data content",
      size: 1024
    };
    console.log(`Download complete: ${JSON.stringify(data)}`);
    callback(null, data);
  }, 1000);
}

// Simulates writing data to a file
function writeToFile(data, callback) {
  console.log("Writing data to file...");
  setTimeout(() => {
    const filename = `output_${Date.now()}.txt`;
    console.log(`Data written to ${filename}`);
    callback(null, filename);
  }, 800);
}

// Simulates uploading file to a URL
function uploadFile(filename, url, callback) {
  console.log(`Uploading ${filename} to ${url}`);
  setTimeout(() => {
    const uploadResult = {
      status: "success",
      uploadedFile: filename,
      destination: url
    };
    console.log(`Upload complete: ${JSON.stringify(uploadResult)}`);
    callback(null, uploadResult);
  }, 1200);
}

// Chains the operations together
function processFile(downloadUrl, uploadUrl, finalCallback) {
  downloadData(downloadUrl, (err, data) => {
    if (err) return finalCallback(err);
    writeToFile(data, (err, filename) => {
      if (err) return finalCallback(err);
      uploadFile(filename, uploadUrl, (err, result) => {
        if (err) return finalCallback(err);
        finalCallback(null, result);
      });
    });
  });
}

// Example usage
processFile(
  "http://viratkholi.com/data",
  "http://example.com/upload",
  (err, result) => {
    if (err) {
      console.error("Error:", err);
      return;
    }
    console.log("Final result:", result);
  }
);