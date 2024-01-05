"use client";
import { useContext, useEffect, useState } from "react";
import MyContext from "../context";

export const services = [
  {
    name: "Web App Development",
    value: "web",
    levels: [
      {
        name: "Senior",
        start: 70,
        end: 82,
      },
      {
        name: "Mid-Level",
        start: 60,
        end: 70,
      },
      {
        name: "Junior",
        start: 60,
        end: 70,
      },
    ],
  },
  {
    name: "Mobile App Development",
    value: "mobile",
    levels: [
      {
        name: "Senior",
        start: 76,
        end: 65,
      },
      {
        name: "Mid-Level",
        start: 60,
        end: 65,
      },
      {
        name: "Junior",
        start: 55,
        end: 60,
      },
    ],
  },
  {
    name: "UI/UX Design",
    value: "ui",
    levels: [
      {
        name: "Senior",
        start: 60,
        end: 70,
      },
      {
        name: "Mid-Level",
        start: 55,
        end: 60,
      },
      {
        name: "Junior",
        start: 48,
        end: 55,
      },
    ],
  },
];

export const SelectServiceItem = ({ index }: any) => {
  const { state, setState } = useContext(MyContext);

  const [selectedService, setSelectedService] = useState("web");
  const [selectedLevel, setSelectedLevel] = useState("Senior");
  const [selectedCount, setSelectedCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState("");
  const selectService = (service: any) => {
    setSelectedService(service);
  };
  const selectLevel = (level: any) => {
    setSelectedLevel(level);
  };
  const selectCount = (cnt: any) => {
    try {
      parseInt(cnt);
      setSelectedCount(cnt);
    } catch (error) {
      setSelectedCount(1);
    }
  };

  useEffect(() => {
    const level = services
      .filter((service) => service.value == selectedService)[0]
      .levels.filter((level) => level.name == selectedLevel)[0];

    const totalPrice = `${selectedCount * level.start} - ${
      selectedCount * level.end
    } k`;
    setTotalPrice(totalPrice);
    const result = state.items.map((item: any) => {
      if (item.id == index) {
        item.selectedInfo = { selectedService, selectedLevel, selectedCount };
      }
      return item;
    });
    setState(result);
  }, [
    selectedService,
    selectedLevel,
    selectedCount,
    index,
    state.items,
    setState,
  ]);

  return (
    <div className="row m-4">
      <div className="col-sm-4">
        <select
          name="example"
          id="exampleDropdown"
          className="form-control"
          value={selectedService}
          onChange={(e) => selectService(e.target.value)}
        >
          {services.map((item) => {
            return (
              <option value={item.value} key={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col-sm-3">
        <select
          name="example"
          id="exampleDropdown"
          className="form-control"
          value={selectedLevel}
          onChange={(e) => selectLevel(e.target.value)}
        >
          {services
            .filter((service) => service.value == selectedService)[0]
            .levels.map((item) => {
              return (
                <option value={item.name} key={item.name}>
                  {item.name} : {`(${item.start}-${item.end}) k`}
                </option>
              );
            })}
        </select>
      </div>
      <div className="col-sm-1">
        <input
          type="text"
          className="form-control text-center"
          id="formGroupExampleInput"
          placeholder=""
          value={selectedCount}
          onChange={(e) => selectCount(e.target.value)}
        />
      </div>
      <div className="col-sm-3 flex items-center justify-center ">
        <span className="s-16 w-700">{totalPrice}</span>
      </div>
    </div>
  );
};
