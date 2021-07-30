exports.splitKeywords = (req, res, next) => {
     
    // Function to delete empty spaces among commas
    req.body.keywords = req.body.keywords.replace(/\s/g, '');

    // Function to split string based on comma
    req.body.keywords = req.body.keywords.split(",");
     
    next();
}