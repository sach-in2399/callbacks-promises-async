// Simulates downloading data from a URL
function downloadData(url) {
  return new Promise((resolve, reject) => {
    console.log(`Starting download from ${url}`);
    setTimeout(() => {
      const data = {
        content: "Sample data content",
        size: 1024
      };
      console.log(`Download complete: ${JSON.stringify(data)}`);
      resolve(data);
    }, 1000);
  });
}

// Simulates writing data to a file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    console.log("Writing data to file...");
    setTimeout(() => {
      const filename = `output_${Date.now()}.txt`;
      console.log(`Data written to ${filename}`);
      resolve(filename);
    }, 800);
  });
}

// Simulates uploading file to a URL
function uploadFile(filename, url) {
  return new Promise((resolve, reject) => {
    console.log(`Uploading ${filename} to ${url}`);
    setTimeout(() => {
      const uploadResult = {
        status: "success",
        uploadedFile: filename,
        destination: url
      };
      console.log(`Upload complete: ${JSON.stringify(uploadResult)}`);
      resolve(uploadResult);
    }, 1200);
  });
}

// Main process using async/await
async function processFile(downloadUrl, uploadUrl) {
  try {
    const data = await downloadData(downloadUrl);
    const filename = await writeToFile(data);
    const result = await uploadFile(filename, uploadUrl);
    console.log("Final result:", result);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Example usage
processFile(
  "http://viratkholi.com/data",
  "http://example.com/upload"
);
