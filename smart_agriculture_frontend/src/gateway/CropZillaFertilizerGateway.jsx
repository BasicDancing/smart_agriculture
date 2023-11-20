const CropZillaFertilizerGateway = () => {

    const fetchPost = async ({zilla, crop, setFertilizers}) => {
        console.log(zilla, crop)
        const response = await fetch(
            `http://127.0.0.1:8000/fertilizermeasures/?zilla__id=${zilla}&crop__id=${crop}`
        );
        const data = await response.json();
        console.log(data);
        setFertilizers(data);
    };

    return { fetchPost };
};

export default CropZillaFertilizerGateway;