
exports.fileUpload = (req, res) => {
    try {
        if (!req.files) {
            res.status(500).send({
                status: "error",
                message: 'No file uploaded'
            });
        } else {
            let avatar = req.files.file;
            const name = `${new Date().getTime().toString()}.${avatar.name.split('.').pop()}`
            avatar.mv(`./public/images/${name}`);
            res.status(201).send({
                status: "success",
                message: 'File is uploaded',
                data: {
                    name,
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};