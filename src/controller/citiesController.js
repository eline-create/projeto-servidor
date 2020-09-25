const cities =  require ("../model/cities.json");

const getAll =  (req, res) => {
    console.log(req.url);

    res.send(cities);


};

const getById = (req, res) => {
    const id = req.params.id;

    res.send(cities.find((cities) => cities.id == id));
};

module.exports = { getAll, getById };

