import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapModule from "highcharts/modules/map";
import { mapOptions } from "../assets/mapData";

mapModule(Highcharts);

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
