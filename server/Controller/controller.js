import model from "../Model/model.js";

export const getData = async (req, res) => {
    const data = await model.find({});
    res.status(200);
    res.render("data", {
        project: data
    });
}

export const postData = async (req, res) => {
    const data = req.body;
    const dataInput = await model(data);

    try {
        await dataInput.save();

        res.status(200);
        // res.json(dataInput);
        // console.log(dataInput);
        res.redirect("/");

    } catch (error) {
        console.log(error)
    }
}

// Show data Function 
export const showData = async (req, res) => {
    const data = await model.find({});
    res.json(data);
}

//Update Function
export const updateData = async (req, res) => {
    const updateValue = await model.findByIdAndUpdate();
}

// Delete Function
export const deleteData = async (req, res) => {
    const deleteValue = model.findByIdAndDelete();
} 