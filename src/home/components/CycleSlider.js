import React from "react";
import CircularSlider from "react-circular-slider-svg";

const CycleSlider = props => {
    return (
        <div className="cycle-slider">
            <CircularSlider
                size={320}
                startAngle={330 / props.cycleLength}
                endAngle={330}
                minValue={1}
                maxValue={props.cycleLength}
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
                arcBackgroundColor="rgb(82,95,113)"
            />
        </div>
    );
};

export default CycleSlider;
