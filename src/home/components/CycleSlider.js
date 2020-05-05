import React from "react";
import CircularSlider from "react-circular-slider-svg";

const CycleSlider = props => {
    if (props.value1 === 0 || props.cycleLength === 0) {
        return <p>"Loading Slider"</p>;
    } else {
        return (
            <div className="cycle-slider">
                <CircularSlider
                    size={320}
                    startAngle={0}
                    endAngle={340}
                    minValue={1}
                    maxValue={props.cycleLength}
                    angleType={{
                        direction: "cw",
                        axis: "+y",
                    }}
                    handle1={{
                        value: props.value1,
                        onChange: v => props.setValue1(v),
                    }}
                    arcColor="#c5d6ed"
                    arcBackgroundColor="rgb(82,95,113)"
                />
            </div>
        );
    }
};

export default CycleSlider;
