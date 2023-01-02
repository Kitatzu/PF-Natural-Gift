const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, CLOUD_APIKEY, CLOUD_SECRET } = process.env;

cloudinary.config({
  cloud_name: `${CLOUD_NAME}`,
  api_key: `${CLOUD_APIKEY}`,
  api_secret: `${CLOUD_SECRET}`,
  secure: true,
});

module.exports.uploadProductImage = async (filePath) => {
  return await cloudinary.uploader
    .upload(filePath, {
      folder: "Products",
    })
    .then((response) => {
      console.log("thenCloudinary", response);
      return response.secure_url;
    })
    .catch((response) => {
      console.log("catchCloudinary", response);
      return response;
    });
};

module.exports.uploadAvatarImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "Avatar",
  });
};

module.exports.deleteImage = async (public_Id) => {
  return await cloudinary.uploader.destroy(public_Id);
};
