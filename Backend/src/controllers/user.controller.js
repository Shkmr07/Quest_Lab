const User = require("../models/User");
const cloudinary = require("../utils/cloudinary");


async function getDetails(req, res) {
  try {
    const details = await User.find()
    if (details.length === 0) {
      return res.json({ message: "No details available" });
    }
    res.json({ message: "user list ", details });
  } catch (err) {}
}

async function addUser(req, res) {
  const payload = req.body;
  try {
    let imageUrl = "";

    if (req.file) {
      const uploadImg = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "users" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        stream.end(req.file.buffer);
      });

      imageUrl = uploadImg.secure_url;
    }

    await User.create({ ...payload, image: imageUrl });
    res.json({ message: "User added successfully" });
  } catch (err) {
    res.json({
      message: `Error happend while adding the data: ${err.message}`,
    });
  }
}

module.exports = { getDetails, addUser};
