
exports.fileUpload = (req, res) => {
    try {
        if (!req.files) {
            res.status(500).send({
                status: "error",
                message: 'No file uploaded'
            });
        } else {
            let avatar = req.files.file;
            const name = new Date().getTime().toString()
            avatar.mv('./public/images/' + name + avatar.name.split('.').pop());
            res.status(201).send({
                status: "success",
                message: 'File is uploaded',
                data: {
                    name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};