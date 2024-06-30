import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

const events = [
    {
        start: moment("2023-03-18T10:00:00").toDate(),
        end: moment("2023-03-18T11:00:00").toDate(),
        title: "MRI Registration",
    },
];

const CalendarView = () => {
    return (
        <div className="w-full h-full p-5 grid grid-cols-1 grid-rows-1">
            <div className="flex p-4 shadow-md rounded-lg col-span-1 row-span-1 bg-customCard">
                <div className="w-full h-full">
                    <Calendar localizer={localizer} events={events} />
                </div>
            </div>
        </div>
    );
};

export default CalendarView;
