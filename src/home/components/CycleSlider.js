import React from "react";
import CircularSlider from "react-circular-slider-svg";

const CycleSlider = props => {
    return (
        <div>
            <CircularSlider
                size={300}
                // startAngle={330 / props.cycleLength}
                endAngle={330}
                minValue={1}
                // maxValue={props.cycleLength}
                angleType={{
                    direction: "cw",
                    axis: "+y",
                }}
                handle1={{
                    value: 4,
                    onChange: v => props.setValue1(v),
                    // value: props.value1,
                    // onChange: v => props.setValue1(v),
                }}
                arcColor="#c5d6ed"
                arcBackgroundColor="#233750"
            />
        </div>
    );
};

export default CycleSlider;
