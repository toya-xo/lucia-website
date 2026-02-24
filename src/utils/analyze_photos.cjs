const fs = require('fs');
const ExifReader = require('exifreader');

let photos = [];

fs.readdirSync("./src/assets/photos").forEach((file)=>{
    const fRead = fs.readFileSync(`./src/assets/photos/${file}`);
    const tags = ExifReader.load(fRead);

    const date = tags["DateTime"]?.description.replace(" ", ":").split(":")
    const height = tags['Image Height']?.value;
    const width = tags['Image Width']?.value;
    const type = height >= width ? "portrait" : "landscape";

    photos.push({
        name: file,
        height: height,
        width: width,
        model: tags["Model"]?.description,
        date: `${date[0]}.${date[1]}.${date[2]}`,
        time: `${date[3]}h${date[4]}m`,
        exposureTime: tags["ExposureTime"]?.description,
        fNumber: tags["FNumber"]?.description,
        ISO: tags["ISOSpeedRatings"]?.description,
        focalLength: tags["FocalLength"]?.description,
        lens: tags["LensModel"]?.description,
        rotation: type
    });
});

fs.writeFileSync('./src/assets/photos-info.json', JSON.stringify(photos, null, 2))