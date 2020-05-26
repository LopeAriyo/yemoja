import React from "react";

const Calendar = props => {
    const cycles = [
        {
            id: 4,
            is_cycle_active: true,
            start_date: "04/29/2020",
            end_date: null,
            period_length: 5,
            user_id: 1,
        },
        {
            id: 3,
            is_cycle_active: false,
            start_date: "03/31/2020",
            end_date: "04/28/2020",
            period_length: 3,
            user_id: 1,
        },
        {
            id: 2,
            is_cycle_active: false,
            start_date: "02/29/2020",
            end_date: "03/30/2020",
            period_length: 4,
            user_id: 1,
        },
        {
            id: 1,
            is_cycle_active: false,
            start_date: "01/31/2020",
            end_date: "02/28/2020",
            period_length: 4,
            user_id: 1,
        },
    ];

    return <main>This is the calendar page: {cycles}</main>;
};

export default Calendar;
