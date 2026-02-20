const fs = require('fs');
const ExifReader = require('exifreader');

let photos = [];

fs.readdirSync("../assets/photos").forEach((file)=>{
    const fRead = fs.readFileSync(`../assets/photos/${file}`);
    const tags = ExifReader.load(fRead);

    const date = tags["DateTime"]?.description.replace(" ", ":").split(":")

    photos.push({
        name: file,
        height: tags['Image Height']?.description,
        width: tags['Image Width']?.description,
        model: tags["Model"]?.description,
        date: `${date[0]}.${date[1]}.${date[2]}`,
        time: `${date[3]}h${date[4]}m`,
        exposureTime: tags["ExposureTime"]?.description,
        fNumber: tags["FNumber"]?.description,
        ISO: tags["ISOSpeedRatings"]?.description,
        focalLength: tags["FocalLength"]?.description,
        lens: tags["LensModel"]?.description
    });
});

fs.writeFileSync('../assets/photos-info.json', JSON.stringify(photos, null, 2))