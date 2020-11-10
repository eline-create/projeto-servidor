const cities =  require ("../model/cities.json");

const getAll =  (req, res) => {
    console.log(req.url);

    res.send(cities);


};

const getByCity = (req, res) => {
    const city = req.params.city;

    res.send(cities.filter((cities) => cities.city == city));
};

module.exports = { getAll, getByCity };

