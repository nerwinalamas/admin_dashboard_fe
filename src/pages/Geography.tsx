import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapModule from "highcharts/modules/map";
import { mapData, mapDataPH } from "../assets/mapData";

mapModule(Highcharts);

const mapOptions = {
    title: {
        text: "",
    },
    series: [
        {
            mapData: mapDataPH,
            name: "Philippines",
            data: mapData,
            color: "transparent",
        },
    ],
    chart: {
        type: "map",
        backgroundColor: "transparent",
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: "bottom",
        },
    },
    map: {
        mapData: Highcharts.maps["custom/world"],
        mapSize: 5,
        mapZoom: 5,
        mapVerticalAlign: "middle",
    },
};

const Geography = () => {
    return (
        <div className="w-full h-full p-5 grid grid-cols-1 grid-rows-1">
            <div className="rounded-lg grid p-5 col-span-1 row-span-1 bg-customCard">
                <HighchartsReact
                    options={mapOptions}
                    constructorType={"mapChart"}
                    highcharts={Highcharts}
                />
            </div>
        </div>
    );
};

export default Geography;
