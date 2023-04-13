import model  from "../Model/model.js";

export const getData = async (req, res) => {
    const data = await model.find({});
    res.status(200);
    res.json(data);
}

export const postData = async (req, res) => {
    const data = req.body;
    const dataInput = await model(data);

    try {
        await dataInput.save();

        res.status(200);
        res.json(dataInput);
        console.log(dataInput)

    } catch (error) {
        console.log(error)
    }
}