
export const getData = (req, res) => {
    res.render("index.ejs");
}

export const postData = (req, res) => {
    res.redirect("index.ejs");
}